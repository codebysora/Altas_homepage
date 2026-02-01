"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  ArrowRight,
  Quote,
  Users,
  Lightbulb,
  Heart,
  Rocket,
  MapPin,
  Clock,
  Briefcase,
  CheckCircle2,
  Mail,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "人を大切に",
    description: "技術だけでなく、クライアントやチームメンバーとの信頼関係を大切にします",
  },
  {
    icon: Lightbulb,
    title: "本質を見極める",
    description: "表面的な解決ではなく、根本的な課題解決を追求します",
  },
  {
    icon: Rocket,
    title: "一緒に成長する",
    description: "クライアントの成功と自分たちの成長を両立させます",
  },
];

const positions = [
  {
    id: "sales",
    title: "営業・コンサルタント",
    type: "正社員 / 業務委託",
    location: "リモート可",
    description:
      "クライアントの課題をヒアリングし、最適なソリューションを提案。導入後のフォローアップまで一貫してサポートします。",
    requirements: [
      "法人営業またはコンサルティング経験",
      "IT・テクノロジーへの興味関心",
      "クライアントの課題解決に情熱を持てる方",
    ],
    preferred: [
      "SaaS・ITサービスの営業経験",
      "業務改善・DX推進の経験",
      "中小企業への提案経験",
    ],
  },
  {
    id: "engineer",
    title: "エンジニア・開発",
    type: "正社員 / 業務委託",
    location: "リモート可",
    description:
      "業務自動化システムの設計・開発を担当。クライアントの業務を理解し、最適なソリューションを構築します。",
    requirements: [
      "プログラミング経験（言語不問）",
      "業務システムへの興味関心",
      "クライアントとのコミュニケーション能力",
    ],
    preferred: [
      "API連携・自動化ツールの開発経験",
      "クラウドサービス（AWS, GCP等）の経験",
      "AIツールの活用経験",
    ],
  },
];

export function CareersPageContent() {
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
              一緒に働く
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 text-balance">
              仕組みで人を自由にする
              <br className="hidden sm:block" />
              仕事を一緒にしませんか
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              ATLASは、AIと自動化で
              <br className="hidden md:block" />
              「人がやらなくていい仕事」をなくしていく会社です。
            </p>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <CEOMessageSection />

      {/* Values */}
      <ValuesSection />

      {/* Team */}
      <TeamSection />

      {/* Positions */}
      <PositionsSection />

      {/* CTA */}
      <CTASection />
    </div>
  );
}

function CEOMessageSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/team.jpg"
                alt="代表"
                width={600}
                height={500}
                className="w-full h-80 md:h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Quote className="w-10 h-10 text-primary/30" />
              <span className="text-sm font-medium text-primary">代表メッセージ</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-balance">
              「人がやらなくていい仕事」を
              <br />
              なくしていきたい
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                多くの企業で、優秀な人材が単純作業に追われている現状を見てきました。
                入力、転記、確認作業...本来、その時間は「考える」「創る」「人と向き合う」ことに使われるべきです。
              </p>
              <p>
                AIと自動化は、人の仕事を奪うものではありません。
                人が本来やるべき仕事に集中できる環境をつくるためのツールです。
              </p>
              <p>
                私たちは、技術と人の温かさの両方を大切にしながら、
                クライアントの「自由」をつくるお手伝いをしています。
              </p>
              <p>
                この想いに共感いただける方と、一緒に働けることを楽しみにしています。
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-foreground font-semibold">ATLAS 代表</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            大切にしていること
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            ATLASの価値観
          </h2>
        </div>
        <div
          className={`grid md:grid-cols-3 gap-8 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500 text-center"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                <value.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium text-primary">チームについて</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-balance">
              少数精鋭で、
              <br />
              密にコミュニケーションをとるチーム
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                ATLASは少人数のチームです。だからこそ、一人ひとりの裁量が大きく、
                自分の意見やアイデアがすぐに反映される環境があります。
              </p>
              <p>
                リモートワーク中心ですが、オンラインでのコミュニケーションを大切にし、
                チームとしての一体感を保っています。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "リモートワーク", value: "可能" },
                { label: "フレックスタイム", value: "導入" },
                { label: "副業", value: "応相談" },
                { label: "服装", value: "自由" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-secondary/50 rounded-xl p-4 text-center"
                >
                  <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-semibold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/service-consulting.jpg"
                alt="チームの様子"
                width={600}
                height={500}
                className="w-full h-80 md:h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

function PositionsSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            募集職種
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            現在募集中のポジション
          </h2>
          <p className="text-muted-foreground">
            ご興味のある方は、お気軽にお問い合わせください
          </p>
        </div>
        <div
          className={`space-y-8 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {positions.map((position, index) => (
            <div
              key={position.id}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    {position.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary text-muted-foreground text-sm rounded-full">
                      <Briefcase className="w-3.5 h-3.5" />
                      {position.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary text-muted-foreground text-sm rounded-full">
                      <MapPin className="w-3.5 h-3.5" />
                      {position.location}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {position.description}
                  </p>
                </div>
                <div className="lg:w-80 space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      必須スキル・経験
                    </h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req) => (
                        <li key={req} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      歓迎スキル・経験
                    </h4>
                    <ul className="space-y-2">
                      {position.preferred.map((pref) => (
                        <li key={pref} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-muted-foreground/50 shrink-0 mt-0.5" />
                          {pref}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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
          一緒に働きませんか？
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
          ご興味をお持ちいただけた方は、
          <br className="hidden sm:block" />
          まずはお気軽にお問い合わせください。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-base px-8 py-6 transition-all duration-300 hover:scale-105"
          >
            <Link href="/contact">
              <Mail className="mr-2 w-5 h-5" />
              お問い合わせ
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
