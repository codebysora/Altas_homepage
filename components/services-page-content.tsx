"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  MessageSquare,
  Cog,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  ClipboardList,
  Search,
  Lightbulb,
  Settings,
  Layers,
  Code2,
  RefreshCw,
  Headphones,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    id: "consulting",
    icon: MessageSquare,
    title: "AI・業務改善コンサルティング",
    description:
      "現状の業務を丁寧にヒアリングし、課題を整理。AIや自動化をどこに・どう活用すべきかを明確にします。",
    image: "/images/service-consulting.jpg",
    features: [
      {
        icon: ClipboardList,
        title: "業務ヒアリング",
        description: "現場の声を丁寧に聞き取り、業務フローを可視化します",
      },
      {
        icon: Search,
        title: "課題整理・改善ポイントの明確化",
        description: "ボトルネックを特定し、優先度の高い改善ポイントを洗い出します",
      },
      {
        icon: Lightbulb,
        title: "AI・自動化の活用設計",
        description: "最適な技術選定と、実現可能な導入計画を策定します",
      },
    ],
    benefits: [
      "何から始めればいいか分からない状態を解消",
      "投資対効果の高い施策を優先的に実行",
      "社内の理解・協力を得やすい提案資料",
    ],
  },
  {
    id: "automation",
    icon: Cog,
    title: "業務自動化・システム構築",
    description:
      "設計に基づき、実際の自動化・システムを構築。現場の使い方を変えず、裏側を整えるアプローチで導入負荷を最小化します。",
    image: "/images/service-automation.jpg",
    features: [
      {
        icon: Settings,
        title: "業務単位での自動化設計",
        description: "大きなシステム刷新ではなく、業務単位で段階的に自動化",
      },
      {
        icon: Layers,
        title: "現場を変えず、裏側を整える構築",
        description: "既存の業務フローを尊重しながら、バックエンドを最適化",
      },
      {
        icon: Code2,
        title: "実運用を前提とした開発",
        description: "運用・保守まで見据えた設計で、長期的な安定稼働を実現",
      },
    ],
    benefits: [
      "現場の混乱なく、スムーズに導入",
      "段階的な導入で、効果を確認しながら進行",
      "将来の拡張・変更にも柔軟に対応",
    ],
  },
  {
    id: "support",
    icon: HeartHandshake,
    title: "継続サポート（サブスクリプション）",
    description:
      "「作って終わり」にしない。導入後の調整・改善、運用サポート、環境変化への対応を継続的に行います。",
    image: "/images/service-support.jpg",
    features: [
      {
        icon: RefreshCw,
        title: "導入後の調整・改善",
        description: "実際の運用で見えてきた課題を迅速に改善",
      },
      {
        icon: Headphones,
        title: "運用サポート",
        description: "トラブル対応や使い方の質問に、いつでも対応",
      },
      {
        icon: TrendingUp,
        title: "業務・環境変化への対応",
        description: "ビジネスの成長や変化に合わせてシステムを進化",
      },
    ],
    benefits: [
      "導入後も安心して運用を継続",
      "継続的な改善で、効果を最大化",
      "新しいニーズにも柔軟に対応",
    ],
  },
];

export function ServicesPageContent() {
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
              サービス
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 text-balance">
              御社に合った形で
              <br className="hidden sm:block" />
              業務改善をサポートします
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              ATLASは、AI・自動化の導入から運用まで
              <br className="hidden md:block" />
              一貫してサポートする3つのサービスを提供しています。
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

function ServiceSection({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const [ref, isVisible] = useScrollAnimation();
  const isEven = index % 2 === 0;

  return (
    <section
      id={service.id}
      ref={ref}
      className={`py-20 md:py-32 ${isEven ? "bg-background" : "bg-secondary/30"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Service Header */}
        <div
          className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className={`flex-1 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium text-primary">
                サービス {index + 1}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
              {service.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
          <div className={`flex-1 w-full ${isEven ? "lg:order-2" : "lg:order-1"}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                width={600}
                height={400}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Features */}
        <div
          className={`grid md:grid-cols-3 gap-6 mb-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {service.features.map((feature, i) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div
          className={`bg-card rounded-2xl p-8 border border-border transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-lg font-semibold text-foreground mb-6">
            このサービスで得られること
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {service.benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">{benefit}</span>
              </div>
            ))}
          </div>
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
          まずは無料相談から
          <br className="sm:hidden" />
          始めませんか？
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
          御社の課題や状況をお聞きし、
          <br className="hidden sm:block" />
          最適な進め方をご提案いたします。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </div>
    </section>
  );
}
