"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Cog, HeartHandshake } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const services = [
  {
    icon: MessageSquare,
    title: "AI・業務改善コンサルティング",
    description:
      "業務ヒアリングから課題整理・改善ポイントの明確化、AI・自動化の活用設計まで、一貫して伴走します。",
    points: [
      "業務ヒアリング",
      "課題整理・改善ポイントの明確化",
      "AI／自動化の活用設計",
    ],
    image: "/images/service-consulting.jpg",
  },
  {
    icon: Cog,
    title: "業務自動化・システム構築",
    description:
      "現場を変えず、裏側を整えます。自動化設計から実運用を前提とした開発まで、一貫して対応します。",
    points: [
      "業務単位での自動化設計",
      "現場を変えず、裏側を整える構築",
      "実運用を前提とした開発",
    ],
    image: "/images/service-automation.jpg",
  },
  {
    icon: HeartHandshake,
    title: "継続サポート",
    description:
      "「作って終わり」にしません。導入後の調整・改善、運用サポート、業務・環境変化への対応まで、継続的にサポートします。",
    points: [
      "導入後の調整・改善",
      "運用サポート",
      "業務・環境変化への対応",
    ],
    image: "/images/service-support.jpg",
  },
];

export function Services() {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-24 md:py-36 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* 
          The error comes from a type mismatch:
          sectionRef is typed as RefObject<HTMLElement | null>,
          but <div> expects a ref of type RefObject<HTMLDivElement | null>.
          HTMLElement is more general than HTMLDivElement, hence the assignment fails.
          The fix is to narrow the generic argument to HTMLDivElement.
        */}
        <div
          ref={sectionRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-12 md:mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            サービス<span className="text-primary">内容</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            課題に合わせた最適なソリューションを提供します
          </p>
        </div>

        {/* 3-column grid: same layout on mobile and desktop for full overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 left-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-background/90 backdrop-blur-sm flex items-center justify-center">
                      <service.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-sm md:text-lg font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs md:text-sm text-muted-foreground line-clamp-2 md:line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {service.points.slice(0, 3).map((point) => (
                      <li
                        key={point}
                        className="text-xs md:text-sm text-foreground flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="line-clamp-1">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 md:mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            サービス詳細を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
