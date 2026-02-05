"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Careers() {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.2 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-36 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div
            className={`relative aspect-square rounded-2xl overflow-hidden transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
            }`}
          >
            <Image
              src="/images/team.jpg"
              alt="私たちの取り組み"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              私たち<span className="text-primary">について</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                私たちは、「人がやらなくていい仕事」を仕組みに任せることで、
                現場がより創造的な仕事に集中できる環境をつくっています。
              </p>
              <p>
                AIと自動化の技術で、クライアントの業務改善に取り組んでいます。
                御社の課題について、お気軽にご相談ください。
              </p>
            </div>

            <div className="mt-10">
              <Button asChild variant="outline" size="lg" className="group transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary bg-transparent">
                <Link href="#contact">
                  お問い合わせ
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
