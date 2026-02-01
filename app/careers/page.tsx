import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CareersPageContent } from "@/components/careers-page-content";

export const metadata: Metadata = {
  title: "一緒に働く | ATLAS - AI・業務自動化コンサルティング",
  description:
    "ATLASでは、一緒に働く仲間を募集しています。代表メッセージ、チームの雰囲気、募集情報をご紹介します。",
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
