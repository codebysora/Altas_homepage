import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServicesPageContent } from "@/components/services-page-content";

export const metadata: Metadata = {
  title: "サービス | ATLAS - AI・業務自動化コンサルティング",
  description:
    "ATLASが提供する3つのサービス。AI・業務改善コンサルティング、業務自動化・システム構築、継続サポートで、御社の業務を支援します。",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesPageContent />
      </main>
      <Footer />
    </>
  );
}
