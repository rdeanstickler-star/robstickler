#!/usr/bin/env python3
"""Ingest photographs for the /photographs page.

Reads originals from an inbox folder, writes web-sized copies into
public/images/photos/, and emits src/content/photos.json.

Every output image has its EXIF stripped. iPhone photos carry GPS
coordinates and this repository is public, so that step is not optional.
Orientation is baked into the pixels first, otherwise stripping EXIF
would leave sideways photos.

Usage:  python3 scripts/ingest-photos.py [inbox_dir]
"""

import json
import pathlib
import shutil
import subprocess
import sys
import tempfile

from PIL import Image, ImageOps

INBOX = pathlib.Path(
    sys.argv[1] if len(sys.argv) > 1
    else pathlib.Path.home() / "robstickler-inbox" / "photos-inbox"
)
REPO = pathlib.Path(__file__).resolve().parent.parent
OUT_DIR = REPO / "public" / "images" / "photos"
MANIFEST = REPO / "src" / "content" / "photos.json"

MAX_EDGE = 1800          # plenty for a full-bleed view, small enough to ship
QUALITY = 82
SUFFIXES = {".jpg", ".jpeg", ".png", ".heic", ".heif", ".tif", ".tiff",
            ".webp", ".dng"}
# Pillow cannot decode these; macOS sips can, so convert first.
NEEDS_SIPS = {".heic", ".heif", ".dng"}


def open_image(path: pathlib.Path, tmp: pathlib.Path) -> Image.Image:
    """Open any supported file, routing HEIC/DNG through sips."""
    if path.suffix.lower() not in NEEDS_SIPS:
        return Image.open(path)
    if not shutil.which("sips"):
        raise RuntimeError("sips not found; cannot decode HEIC/DNG")
    staged = tmp / (path.stem + ".jpg")
    subprocess.run(
        ["sips", "-s", "format", "jpeg", "-s", "formatOptions", "best",
         str(path), "--out", str(staged)],
        check=True, capture_output=True,
    )
    return Image.open(staged)


def main() -> int:
    if not INBOX.is_dir():
        print(f"inbox not found: {INBOX}")
        return 1

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    sources = sorted(p for p in INBOX.iterdir() if p.suffix.lower() in SUFFIXES)
    if not sources:
        print(f"no images in {INBOX}")
        return 1

    entries = []
    skipped = []
    tmp = pathlib.Path(tempfile.mkdtemp(prefix="photo-ingest-"))
    for index, src in enumerate(sources, start=1):
        try:
            image = open_image(src, tmp)
            image.load()
        except Exception as exc:
            print(f"  SKIP {src.name}: {type(exc).__name__}")
            skipped.append(src.name)
            continue

        image = ImageOps.exif_transpose(image).convert("RGB")
        if max(image.size) > MAX_EDGE:
            scale = MAX_EDGE / max(image.size)
            image = image.resize(
                (round(image.width * scale), round(image.height * scale)),
                Image.LANCZOS,
            )

        name = f"photo-{index:02d}.jpg"
        # no exif= argument, so metadata (including GPS) is dropped
        image.save(OUT_DIR / name, "JPEG", quality=QUALITY,
                   optimize=True, progressive=True)

        check = Image.open(OUT_DIR / name)
        assert not check.info.get("exif"), f"EXIF survived in {name}"

        entries.append({
            "src": f"/images/photos/{name}",
            "width": image.width,
            "height": image.height,
            "alt": "",
        })
        print(f"  {src.name} -> {name}  {image.width}x{image.height}")

    MANIFEST.parent.mkdir(parents=True, exist_ok=True)
    MANIFEST.write_text(json.dumps(entries, indent=2) + "\n")
    shutil.rmtree(tmp, ignore_errors=True)
    total = sum((OUT_DIR / e["src"].split("/")[-1]).stat().st_size for e in entries)
    print(f"\n{len(entries)} photos, {total / 1_000_000:.1f} MB total")
    if skipped:
        print(f"SKIPPED {len(skipped)}: {', '.join(skipped)}")
    else:
        print(f"all {len(sources)} source files converted, none skipped")
    print(f"manifest: {MANIFEST.relative_to(REPO)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
