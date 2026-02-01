"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  ArrowRight,
  Calendar,
  Tag,
  Newspaper,
  Trophy,
  Mic,
  ChevronRight,
} from "lucide-react";

const categories = [
  { id: "all", label: "すべて" },
  { id: "news", label: "お知らせ", icon: Newspaper },
  { id: "results", label: "実績", icon: Trophy },
  { id: "events", label: "イベント・活動報告", icon: Mic },
];

const articles = [
  {
    id: 1,
    category: "news",
    categoryLabel: "お知らせ",
    title: "ATLASホームページを公開しました",
    description:
      "この度、ATLAS（アトラス）の公式ホームページを公開いたしました。今後とも、AI・業務自動化を通じて、皆様のビジネスをサポートしてまいります。",
    date: "2025年1月",
    image: "/images/news-1.jpg",
    featured: true,
  },
  {
    id: 2,
    category: "results",
    categoryLabel: "実績",
    title: "製造業A社様：月40時間の業務削減を実現",
    description:
      "受発注管理業務の自動化により、手作業による入力ミスの解消と大幅な工数削減を達成しました。",
    date: "2025年1月",
    image: "/images/news-2.jpg",
    featured: true,
  },
  {
    id: 3,
    category: "events",
    categoryLabel: "イベント・活動報告",
    title: "中小企業向けAI活用セミナーに登壇しました",
    description:
      "「今日からできるAI活用術」をテーマに、実践的なAI導入のポイントについてお話しました。",
    date: "2024年12月",
    image: "/images/news-3.jpg",
    featured: false,
  },
  {
    id: 4,
    category: "results",
    categoryLabel: "実績",
    title: "サービス業B社様：顧客対応の品質向上",
    description:
      "AI チャットボットの導入により、24時間対応が可能になり、顧客満足度が大幅に向上しました。",
    date: "2024年11月",
    image: "/images/service-support.jpg",
    featured: false,
  },
  {
    id: 5,
    category: "news",
    categoryLabel: "お知らせ",
    title: "年末年始の営業について",
    description:
      "2024年12月28日から2025年1月5日まで、年末年始休業とさせていただきます。",
    date: "2024年12月",
    image: "/images/service-consulting.jpg",
    featured: false,
  },
];

export function ResultsPageContent() {
  const [heroRef, heroVisible] = useScrollAnimation();

  return (
    <div className="pt-24 md:pt-32">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-16 md:py-24 bg-gradient-to-b from-secondary/50 to-background overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div
          className={`max-w-6xl mx-auto px-4 sm:px-6 relative transition-all duration-700 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              実績・発信
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 text-balance">
              ATLASの活動と
              <br className="hidden sm:block" />
              最新情報をお届けします
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              お知らせ、導入実績、イベント・セミナー情報など
              <br className="hidden md:block" />
              ATLASの取り組みをご紹介します。
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <CategoriesSection />

      {/* Featured Articles */}
      <FeaturedSection />

      {/* All Articles */}
      <ArticlesSection />

      {/* CTA */}
      <CTASection />
    </div>
  );
}

function CategoriesSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} className="py-8 border-b border-border">
      <div
        className={`max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                category.id === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
              }`}
            >
              {category.icon && <category.icon className="w-4 h-4" />}
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedSection() {
  const [ref, isVisible] = useScrollAnimation();
  const featuredArticles = articles.filter((a) => a.featured);

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className={`mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            注目の記事
          </h2>
        </div>
        <div
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {featuredArticles.map((article, index) => (
            <article
              key={article.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    <Tag className="w-3 h-3" />
                    {article.categoryLabel}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                  {article.description}
                </p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  続きを読む
                  <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticlesSection() {
  const [ref, isVisible] = useScrollAnimation();
  const regularArticles = articles.filter((a) => !a.featured);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className={`mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            すべての記事
          </h2>
        </div>
        <div
          className={`space-y-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {regularArticles.map((article, index) => (
            <article
              key={article.id}
              className="group flex flex-col sm:flex-row gap-6 bg-card rounded-2xl p-4 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative w-full sm:w-48 h-40 sm:h-32 rounded-xl overflow-hidden shrink-0">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {article.categoryLabel}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {article.description}
                </p>
              </div>
              <div className="flex items-center sm:pr-2">
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 md:py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>
      <div
        className={`max-w-4xl mx-auto px-4 sm:px-6 text-center relative transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-6 text-balance">
          御社の課題も
          <br className="sm:hidden" />
          解決できるかもしれません
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
          まずはお気軽にご相談ください。
          <br className="hidden sm:block" />
          御社に合った解決策をご提案いたします。
        </p>
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="text-base px-8 py-6 transition-all duration-300 hover:scale-105"
        >
          <Link href="/contact">
            無料相談を予約する
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
