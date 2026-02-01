import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Problems } from "@/components/problems";
import { Services } from "@/components/services";
import { Results } from "@/components/results";
import { Careers } from "@/components/careers";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <Services />
        <Results />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
