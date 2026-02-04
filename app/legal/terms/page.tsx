import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "利用規約 | ATLAS",
  description: "ATLASのウェブサイトおよびサービス利用規約です。",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-24 md:pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            利用規約
          </h1>
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <p>
              この利用規約は、ATLAS（以下「当方」）が提供するウェブサイトおよびサービス（以下「本サービス」）の利用条件を定めるものです。本サービスをご利用いただくことで、本規約に同意いただいたものとみなします。
            </p>

            <h2 className="text-lg font-semibold text-foreground mt-8">第1条（適用）</h2>
            <p>
              本規約は、本サービスの利用に関する当方とお客様との間の権利義務を定めることを目的とし、本サービスに関する一切の関係に適用されます。
            </p>

            <h2 className="text-lg font-semibold text-foreground mt-8">第2条（禁止事項）</h2>
            <p>お客様は、本サービスの利用にあたり、以下の行為を行ってはなりません。</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>法令または公序良俗に反する行為</li>
              <li>当方または第三者の権利を侵害する行為</li>
              <li>本サービスの運営を妨害する行為</li>
              <li>不正アクセス、不正なデータ取得・改ざんの試み</li>
              <li>その他、当方が不適切と判断する行為</li>
            </ul>

            <h2 className="text-lg font-semibold text-foreground mt-8">第3条（本サービスの提供）</h2>
            <p>
              当方は、本サービスの内容の変更、中断、終了について、必要な場合に事前の通知なく行うことがあります。これによりお客様に生じた損害について、当方は責任を負いません。
            </p>

            <h2 className="text-lg font-semibold text-foreground mt-8">第4条（免責・責任の制限）</h2>
            <p>
              本サービスは現状のまま提供されます。当方は、本サービスの正確性、完全性、有用性等について保証しません。本サービスの利用により生じた損害について、法令に基づく場合を除き、当方は責任を負いません。
            </p>

            <h2 className="text-lg font-semibold text-foreground mt-8">第5条（規約の変更）</h2>
            <p>
              当方は、必要に応じて本規約を変更することがあります。変更後の規約は、本サイト上での掲示その他の適切な方法で通知した時点から効力を生じるものとします。
            </p>

            <h2 className="text-lg font-semibold text-foreground mt-8">第6条（法律・輸出上の制限）</h2>
            <p>
              本サービスは日本国内を主な対象としています。法律上・輸出上の制限について、当方として特に該当する事項は現時点では該当なしとします。お客様のご利用地域における法令遵守はお客様の責任で行ってください。
            </p>

            <h2 className="text-lg font-semibold text-foreground mt-8">お問い合わせ</h2>
            <p>
              本規約に関するお問い合わせは、<Link href="/contact" className="text-primary hover:underline">お問い合わせページ</Link>または atlas.workroom@gmail.com までご連絡ください。
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
