import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactPageContent } from "@/components/contact-page-content";

export const metadata: Metadata = {
  title: "無料相談 | ATLAS - AI・業務自動化コンサルティング",
  description:
    "ATLASへの無料相談のご案内。Zoom面談を最優先で承っています。お気軽にご予約ください。",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactPageContent />
      </main>
      <Footer />
    </>
  );
}
