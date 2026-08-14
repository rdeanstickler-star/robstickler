import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Grain } from "@/components/grain";
import { Hero } from "@/components/hero";
import { Method } from "@/components/method";
import { Nav } from "@/components/nav";
import { Proof } from "@/components/proof";
import { Work } from "@/components/work";
import { getSiteUrl, site } from "@/lib/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: getSiteUrl(),
    jobTitle: "Wellness studio operator",
    description: site.description,
    sameAs: [site.linkedin],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Grain />
      <div id="top">
        <Nav />
        <main>
          <Hero />
          <Proof />
          <Work />
          <Method />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
