import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "返金ポリシー | ATLAS",
  description: "ATLASの返金に関するポリシーです。",
};

export default function RefundPage() {
  return (
    <>
      <Header />
      <main className="pt-24 md:pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            返金ポリシー
          </h1>
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <p>
              ATLAS（以下「当方」）では、お客様に安心してご利用いただけるよう、返金について以下のとおり定めています。
            </p>
            <h2 className="text-lg font-semibold text-foreground mt-8">返金の可否</h2>
            <p>
              サービス内容・契約形態により、返金の可否および条件が異なります。個別のご契約時に書面またはウェブ上でご案内する内容に従います。
            </p>
            <h2 className="text-lg font-semibold text-foreground mt-8">返金を希望される場合</h2>
            <p>
              返金をご希望の場合は、まず下記お問い合わせ先までご連絡ください。ご契約内容を確認のうえ、返金条件に該当する場合は手続き方法をご案内します。
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>メール：atlas.workroom@gmail.com</li>
              <li><Link href="/contact" className="text-primary hover:underline">お問い合わせページ</Link>（Zoom無料相談・メール）</li>
            </ul>
            <h2 className="text-lg font-semibold text-foreground mt-8">返金方法</h2>
            <p>
              返金が認められた場合、原則としてご入金いただいた口座への振込により返金いたします。手数料等は契約内容に応じてご案内します。
            </p>
            <h2 className="text-lg font-semibold text-foreground mt-8">不審請求（チャージバック）について</h2>
            <p>
              クレジットカード等による不審請求やご不明な請求がございましたら、上記お問い合わせ先までご連絡ください。内容を確認し、適切に対応いたします。お問い合わせ後、必要に応じて取引内容のご説明・返金手続き等をご案内します。
            </p>
          </div>
          <div className="mt-12">
            <Link href="/" className="text-primary hover:underline text-sm font-medium">
              ← トップへ戻る
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
