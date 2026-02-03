"use client";

import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Video,
  Mail,
  Clock,
  CheckCircle2,
  MessageSquare,
  Lightbulb,
  FileText,
  ArrowRight,
  Calendar,
  Shield,
} from "lucide-react";

const consultationSteps = [
  {
    icon: Calendar,
    title: "ご予約",
    description: "下記ボタンからご都合の良い日時をお選びください",
  },
  {
    icon: MessageSquare,
    title: "ヒアリング",
    description: "現状の課題や目指したい姿をお聞かせください（30〜60分）",
  },
  {
    icon: Lightbulb,
    title: "ご提案",
    description: "御社に合った解決策の方向性をその場でお伝えします",
  },
  {
    icon: FileText,
    title: "次のステップ",
    description: "具体的な進め方について、後日ご提案書をお送りします",
  },
];

const benefits = [
  "相談料は無料です",
  "オンライン（Zoom）で全国対応",
  "強引な営業は一切いたしません",
  "相談後のしつこい連絡もありません",
];

export function ContactPageContent() {
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
              無料相談
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 text-balance">
              まずはお気軽に
              <br className="hidden sm:block" />
              ご相談ください
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              「何から始めればいいか分からない」
              <br className="hidden md:block" />
              そんな状態でも大丈夫です。一緒に整理していきましょう。
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <MainContactSection />

      {/* Process Section */}
      <ProcessSection />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}

function MainContactSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {/* Zoom Consultation - Primary */}
          <div className="bg-card rounded-2xl p-8 md:p-10 border-2 border-primary shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-medium px-4 py-1.5 rounded-bl-xl">
              おすすめ
            </div>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
              <Video className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Zoom無料相談
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              オンラインで直接お話しながら、御社の状況や課題をヒアリングします。
              その場で解決策の方向性もお伝えできます。
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span>所要時間：30〜60分程度</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span>完全無料・営業なし</span>
              </div>
            </div>
            <Button
              asChild
              size="lg"
              className="w-full text-base py-6 transition-all duration-300 hover:scale-[1.02]"
            >
              <a
                href="https://timerex.net/s/atlas.workroom_7175/7f8d7c44/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zoom相談を予約する
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              予約画面に移動します
            </p>
          </div>

          {/* Email Contact - Secondary */}
          <div className="bg-card rounded-2xl p-8 md:p-10 border border-border">
            <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              メールでのお問い合わせ
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Zoom面談が難しい場合は、メールでも承っております。
              お気軽にご連絡ください。
            </p>
            <div className="bg-secondary/50 rounded-xl p-6 mb-8">
              <p className="text-sm text-muted-foreground mb-2">メールアドレス</p>
              <a
                href="mailto:atlas.workroom@gmail.com"
                className="text-lg font-medium text-foreground hover:text-primary transition-colors break-all"
              >
                atlas.workroom@gmail.com
              </a>
            </div>
            <Button
              variant="outline"
              size="lg"
              className="w-full text-base py-6 transition-all duration-300 hover:scale-[1.02] bg-transparent"
              asChild
            >
              <a href="mailto:atlas.workroom@gmail.com">
                <Mail className="mr-2 w-5 h-5" />
                メールを送る
              </a>
            </Button>
          </div>
        </div>

        {/* Benefits */}
        <div
          className={`mt-12 bg-secondary/30 rounded-2xl p-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-foreground text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            相談の流れ
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            無料相談の進め方
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            事前準備は不要です。現状や課題について、お話しいただければ大丈夫です。
          </p>
        </div>
        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {consultationSteps.map((step, index) => (
            <div
              key={step.title}
              className="relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mt-2">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [ref, isVisible] = useScrollAnimation();

  const faqs = [
    {
      question: "本当に無料ですか？",
      answer:
        "はい、初回のご相談は完全に無料です。お見積りやご提案まで、一切費用はかかりません。",
    },
    {
      question: "どんな相談ができますか？",
      answer:
        "業務効率化、AI活用、自動化の導入検討など、幅広くご相談いただけます。「何から始めればいいか分からない」という段階でも大丈夫です。",
    },
    {
      question: "事前に準備は必要ですか？",
      answer:
        "特別な準備は不要です。現状の課題や困っていることを、そのままお話しいただければ大丈夫です。",
    },
    {
      question: "相談後に営業されますか？",
      answer:
        "強引な営業は一切いたしません。相談後は、ご希望があれば具体的なご提案をお送りしますが、しつこい連絡もありません。",
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            よくあるご質問
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            ご不明点はありませんか？
          </h2>
        </div>
        <div
          className={`space-y-4 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {faq.question}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
