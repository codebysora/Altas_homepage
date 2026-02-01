import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ResultsPageContent } from "@/components/results-page-content";

export const metadata: Metadata = {
  title: "実績・発信 | ATLAS - AI・業務自動化コンサルティング",
  description:
    "ATLASのお知らせ、実績、イベント・活動報告。AI・業務自動化に関する最新情報をお届けします。",
};

export default function ResultsPage() {
  return (
    <>
      <Header />
      <main>
        <ResultsPageContent />
      </main>
      <Footer />
    </>
  );
}
