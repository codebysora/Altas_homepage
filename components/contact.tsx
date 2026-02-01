"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Video, Mail, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Contact() {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.2 });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-36 bg-primary text-primary-foreground relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-background/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-background/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            無料相談
          </h2>

          <p className="text-lg md:text-xl opacity-90 mb-12 leading-relaxed max-w-2xl mx-auto">
            まずは気軽にお話ししませんか？
            <br />
            現状の課題や悩みをお聞かせください。
            <br />
            Zoomでの無料相談を受け付けています。
          </p>
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-base group transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Link
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Video className="mr-2 w-5 h-5" />
              Zoom相談を予約する
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div
          className={`flex items-center justify-center gap-3 text-sm opacity-80 transition-all duration-700 ${
            isVisible ? "opacity-80 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <Mail className="w-4 h-4" />
          <span>Zoomが難しい場合はメールでも可：</span>
          <Link
            href="mailto:contact@example.com"
            className="underline hover:no-underline transition-all"
          >
            contact@example.com
          </Link>
        </div>
      </div>
    </section>
  );
}
