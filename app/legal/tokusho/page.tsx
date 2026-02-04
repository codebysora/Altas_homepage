import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | ATLAS",
  description: "ATLASの特定商取引法に基づく表記（事業者情報）です。",
};

export default function TokushoPage() {
  return (
    <>
      <Header />
      <main className="pt-24 md:pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            特定商取引法に基づく表記
          </h1>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <table className="w-full text-left border-collapse">
              <tbody className="text-sm md:text-base">
                <tr className="border-b border-border">
                  <th className="py-4 pr-4 font-semibold text-foreground w-40 md:w-48 align-top">事業者名</th>
                  <td className="py-4 text-muted-foreground">ATLAS</td>
                </tr>
                <tr className="border-b border-border">
                  <th className="py-4 pr-4 font-semibold text-foreground align-top">代表者</th>
                  <td className="py-4 text-muted-foreground">直井 星空（なおい そら）</td>
                </tr>
                <tr className="border-b border-border">
                  <th className="py-4 pr-4 font-semibold text-foreground align-top">所在地</th>
                  <td className="py-4 text-muted-foreground">
                    〒（お問い合わせフォーム・メールにてご案内します）
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <th className="py-4 pr-4 font-semibold text-foreground align-top">お問い合わせ</th>
                  <td className="py-4 text-muted-foreground">
                    メール：atlas.workroom@gmail.com
                    <br />
                    <Link href="/contact" className="text-primary hover:underline">お問い合わせページ</Link>
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <th className="py-4 pr-4 font-semibold text-foreground align-top">販売商品・サービス</th>
                  <td className="py-4 text-muted-foreground">
                    AI・業務改善コンサルティング、業務自動化・システム構築、継続サポート等のコンサルティングおよびシステム開発・運用支援サービス。法人・個人事業主を対象に、ヒアリング・設計・開発・導入支援・運用サポートを提供します。
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <th className="py-4 pr-4 font-semibold text-foreground align-top">販売価格</th>
                  <td className="py-4 text-muted-foreground">各サービスページおよびご契約時に表示・ご案内する価格に準じます。</td>
                </tr>
                <tr className="border-b border-border">
                  <th className="py-4 pr-4 font-semibold text-foreground align-top">支払方法・時期</th>
                  <td className="py-4 text-muted-foreground">ご契約内容に応じて、請求書払い（銀行振込）等。支払時期は別途ご契約書に記載します。</td>
                </tr>
                <tr className="border-b border-border">
                  <th className="py-4 pr-4 font-semibold text-foreground align-top">サービス提供時期</th>
                  <td className="py-4 text-muted-foreground">ご契約内容に応じて別途ご案内します。</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            上記は概要です。詳細は<Link href="/contact" className="text-primary hover:underline">お問い合わせ</Link>にてご確認ください。
          </p>
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
