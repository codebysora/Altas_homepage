import { Metadata } from "next";

export const metadata: Metadata = {
  title: "法的情報 | ATLAS",
  description: "ATLASの特定商取引法に基づく表記、返金・キャンセルポリシー、利用規約など。",
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
