"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, Newspaper, Award, X, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const items = [
  {
    icon: Newspaper,
    category: "お知らせ",
    title: "ATLAS公式サイトを公開しました",
    date: "2025年",
    image: "/images/news-1.jpg",
    description:
      "ATLASの公式サイトを公開いたしました。サービス内容や実績、無料相談のご案内をご確認いただけます。",
    content: `この度、ATLASの公式サイトを公開いたしました。

【サイトの内容】
・サービス内容のご案内
・実績・事例のご紹介
・無料相談のご予約

お客様により良い情報をお届けできるよう、内容は随時更新してまいります。ご不明な点はお気軽にお問い合わせください。`,
  },
  {
    icon: Award,
    category: "実績",
    title: "業務自動化プロジェクト事例",
    date: "2024.12",
    image: "/images/news-2.jpg",
    description:
      "製造業A社様の受発注業務を自動化し、月間40時間の工数削減を実現しました。",
    content: `製造業A社様の受発注業務自動化プロジェクトが完了いたしました。

【プロジェクト概要】
・業種：製造業
・対象業務：受発注処理、在庫管理、請求書発行
・期間：3ヶ月

【導入効果】
・月間40時間の工数削減
・入力ミスの大幅減少
・リアルタイムでの在庫把握が可能に
・請求書発行の自動化により月末作業を効率化

【お客様の声】
「以前は毎日2時間以上かかっていた作業が、今では30分程度で完了します。空いた時間を営業活動に充てられるようになりました。」`,
  },
  {
    icon: Calendar,
    category: "イベント",
    title: "AI活用セミナーを開催しました",
    date: "2024.11",
    image: "/images/news-3.jpg",
    description:
      "中小企業向けAI活用セミナーを開催し、30名以上の経営者様にご参加いただきました。",
    content: `2024年11月、中小企業向けAI活用セミナーを開催いたしました。

【セミナー内容】
・AIとは？中小企業での活用可能性
・ChatGPTを業務に活かす具体的な方法
・自動化ツールの選び方と導入ステップ
・成功事例のご紹介

【参加者様の声】
・「AIは大企業だけのものと思っていたが、自社でも活用できることが分かった」
・「具体的な事例が多く、イメージが湧いた」
・「早速、社内で検討を始めたい」

次回セミナーの開催も予定しております。ご興味のある方は、お気軽にお問い合わせください。`,
  },
];

export function Results() {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({
    threshold: 0.1,
  });
  const [selectedItem, setSelectedItem] = useState<(typeof items)[0] | null>(
    null
  );

  return (
    <section
      id="results"
      ref={sectionRef}
      className="py-24 md:py-36 bg-secondary relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            実績・<span className="text-primary">発信</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            最新のニュースと活動報告
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, index) => (
            <article
              key={item.title}
              onClick={() => setSelectedItem(item)}
              className={`group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-700 hover:shadow-xl hover:-translate-y-2 cursor-pointer ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-xs text-muted-foreground ml-auto">
                    {item.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0">
          {selectedItem && (
            <>
              <div className="relative aspect-video w-full">
                <Image
                  src={selectedItem.image || "/placeholder.svg"}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                      <selectedItem.icon className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-xs font-bold text-primary-foreground/90 uppercase tracking-wider">
                      {selectedItem.category}
                    </span>
                    <span className="text-xs text-primary-foreground/70 ml-auto">
                      {selectedItem.date}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <DialogHeader>
                  <DialogTitle className="text-xl md:text-2xl font-bold text-foreground text-left">
                    {selectedItem.title}
                  </DialogTitle>
                </DialogHeader>
                <p className="mt-4 text-muted-foreground">
                  {selectedItem.description}
                </p>
                <div className="mt-6 p-4 md:p-6 bg-secondary rounded-xl">
                  <pre className="whitespace-pre-wrap font-sans text-sm md:text-base text-foreground leading-relaxed">
                    {selectedItem.content}
                  </pre>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button asChild className="flex-1">
                    <Link href="/contact">無料相談を予約する</Link>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedItem(null)}
                    className="flex-1"
                  >
                    閉じる
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
