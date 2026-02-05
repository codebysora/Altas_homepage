"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  ArrowRight,
  Quote,
  Lightbulb,
  Heart,
  Rocket,
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
          className={`max-w-6xl mx-auto px-4 sm:px-6 relative transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              私たちについて
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 text-balance">
              仕組みで人を自由に
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              ATLASは、AIと自動化で「人がやらなくていい仕事」をなくしていくことを目指しています。
            </p>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <CEOMessageSection />

      {/* Values */}
      <ValuesSection />

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
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
                この想いで、クライアントの皆様のお役に立てるよう努めてまいります。
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-foreground font-semibold">直井 星空（なおい そら）</p>
              <p className="text-sm text-muted-foreground mt-1">ATLAS 代表</p>
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
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
          className={`grid md:grid-cols-3 gap-8 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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

function CTASection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 md:py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>
      <div
        className={`max-w-4xl mx-auto px-4 sm:px-6 text-center relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-6 text-balance">
          お気軽にご相談ください
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
          サービスや取り組みについてご質問がございましたら、お問い合わせよりご連絡ください。
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
