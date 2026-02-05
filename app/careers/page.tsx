import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CareersPageContent } from "@/components/careers-page-content";

export const metadata: Metadata = {
  title: "私たちについて | ATLAS - AI・業務自動化コンサルティング",
  description:
    "ATLASの代表メッセージと大切にしている価値観をご紹介します。",
};

export default function CareersPage() {
  return (
    <>
      <Header />
      <main>
        <CareersPageContent />
      </main>
      <Footer />
    </>
  );
}
