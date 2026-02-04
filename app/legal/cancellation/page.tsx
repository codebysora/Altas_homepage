import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "キャンセルポリシー | ATLAS",
  description: "ATLASのキャンセルに関するポリシーです。",
};

export default function CancellationPage() {
  return (
    <>
      <Header />
      <main className="pt-24 md:pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            キャンセルポリシー
          </h1>
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <p>
              ATLAS（以下「当方」）では、サービス・契約のキャンセルについて以下のとおり定めています。
            </p>
            <h2 className="text-lg font-semibold text-foreground mt-8">無料相談のキャンセル</h2>
            <p>
              Zoom無料相談の予約をキャンセルされる場合は、予約システムからまたはメール（atlas.workroom@gmail.com）にて、できるだけ早めにご連絡ください。キャンセル料は発生しません。
            </p>
            <h2 className="text-lg font-semibold text-foreground mt-8">有償契約のキャンセル</h2>
            <p>
              有償のご契約をキャンセルされる場合は、契約内容に応じたキャンセル条件が適用されます。詳細は個別のご契約書または事前のご案内に記載しています。キャンセルをご希望の場合は、お問い合わせ先までご連絡ください。
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>メール：atlas.workroom@gmail.com</li>
              <li><Link href="/contact" className="text-primary hover:underline">お問い合わせページ</Link></li>
            </ul>
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
