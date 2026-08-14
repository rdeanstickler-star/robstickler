import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Method } from "@/components/method";
import { Proof } from "@/components/proof";
import { Work } from "@/components/work";
import { contactStudios, studiosMeta } from "@/content/copy";
import { pageMetadata } from "@/lib/metadata";

export function generateMetadata() {
  return pageMetadata({
    absoluteTitle: studiosMeta.title,
    description: studiosMeta.description,
    path: "/studios",
  });
}

export default function StudiosPage() {
  return (
    <div id="top">
      <main id="main">
        <Hero />
        <Proof />
        <Work />
        <Method />
        <About />
        <Contact copy={contactStudios} />
      </main>
    </div>
  );
}
