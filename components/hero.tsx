"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/60 to-background/10" />
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 py-10 md:py-20 -mt-20 ">
        <div className="max-w-4xl">
          {/* Animated badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">AIおよびビジネス自動化</span>

          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight text-balance animate-fade-in-up animation-delay-100">
            自由は、
            <br className="sm:hidden" />
            <span className="text-primary">仕組み</span>から生まれる。
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-up animation-delay-200">
            人がやらなくていい仕事は、仕組みに任せる。
            {/* <br className="hidden sm:block" /> */}
            私たちは、AIと自動化で業務の裏側を整え、
            {/* <br className="hidden sm:block" /> */}
            現場が本来やるべき仕事に集中できる状態をつくります。
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
            <Button asChild size="lg" className="text-base group transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Link href="#contact">
                無料相談を予約する
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base bg-transparent transition-all duration-300 hover:bg-primary/5">
              <Link href="#services">サービスを見る</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <Link href="#problems" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs font-medium">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
