"use client";

import Image from "next/image";
import { MessageSquare, Cog, HeartHandshake } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const services = [
  {
    icon: MessageSquare,
    number: "01",
    title: "AI・業務改善コンサルティング",
    description:
      "業務ヒアリングから始め、課題整理・改善ポイントの明確化、AI・自動化の活用設計まで伴走します。",
    points: [
      "業務ヒアリング",
      "課題整理・改善ポイントの明確化",
      "AI／自動化の活用設計",
    ],
    image: "/images/service-consulting.jpg",
  },
  {
    icon: Cog,
    number: "02",
    title: "業務自動化・システム構築",
    description:
      "現場を変えず、裏側を整える。業務単位での自動化設計から実運用を前提とした開発まで。",
    points: [
      "業務単位での自動化設計",
      "現場を変えず、裏側を整える構築",
      "実運用を前提とした開発",
    ],
    image: "/images/service-automation.jpg",
  },
  {
    icon: HeartHandshake,
    number: "03",
    title: "継続サポート",
    description:
      "「作って終わり」にしない。導入後の調整・改善、運用サポート、業務・環境変化への対応。",
    points: [
      "導入後の調整・改善",
      "運用サポート",
      "業務・環境変化への対応",
    ],
    image: "/images/service-support.jpg",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const isReversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-8 md:gap-16 ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } items-center transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted group">
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center transition-transform duration-500 hover:scale-110">
            <service.icon className="w-7 h-7 text-primary" />
          </div>
          <span className="text-5xl font-bold text-primary/15">
            {service.number}
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          {service.title}
        </h3>

        <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
          {service.description}
        </p>

        <ul className="space-y-4">
          {service.points.map((point, pointIndex) => (
            <li
              key={point}
              className={`flex items-center gap-4 text-foreground transition-all duration-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: `${(pointIndex + 3) * 100}ms` }}
            >
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <span className="text-base">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Services() {
  const [headerRef, isHeaderVisible] = useScrollAnimation<HTMLDivElement>({
    threshold: 0.3,
  });

  return (
    <section id="services" className="py-24 md:py-36 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div
          ref={headerRef}
          className={`text-center mb-16 md:mb-24 transition-all duration-700 ${
            isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            サービス<span className="text-primary">内容</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            課題に合わせた最適なソリューションを提供します
          </p>
        </div>

        <div className="space-y-20 md:space-y-32">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
