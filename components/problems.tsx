"use client";

import { ClipboardList, Users, Sparkles, ArrowDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const problems = [
  {
    icon: ClipboardList,
    title: "手作業が多すぎる",
    before: ["入力・転記・確認が手作業", "作業に追われ、考える時間がない"],
    after: ["処理は自動化", "人は判断・対応に集中できる"],
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Users,
    title: "人が張り付かないと回らない",
    before: ["問い合わせ・確認対応で時間が取られる"],
    after: ["自動応答・自動処理", "必要な対応だけ人が行う"],
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: Sparkles,
    title: "AIを業務で使えていない",
    before: ["AIは知っているが、使えていない"],
    after: ["実務に組み込まれたAI", "品質・顧客満足度が向上"],
    gradient: "from-primary/20 to-primary/5",
  },
];

export function Problems() {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="problems"
      ref={sectionRef}
      className="py-24 md:py-36 bg-card relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            私たちが<span className="text-primary">解決</span>すること
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            現場の「困った」を仕組みで解消します
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className={`group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="h-full bg-background rounded-2xl p-6 md:p-8 border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                {/* Icon and Title */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${problem.gradient} flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110`}>
                  <problem.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-8">
                  {problem.title}
                </h3>

                {/* Before Section */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-muted text-muted-foreground">
                      現状
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {problem.before.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-muted-foreground flex items-start gap-3"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center py-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <ArrowDown className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* After Section */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-primary/10 text-primary">
                      導入後
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {problem.after.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-foreground font-medium flex items-start gap-3"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
