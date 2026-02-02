"use client";

import Image from "next/image";
import { ClipboardList, Users, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const PROBLEMS_IMAGE = "/images/problems-solutions.png";

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

const circleLabels = ["①", "②"] as const;
const pointTitles = ["現状を知ろう", "解決策を知る"] as const;
const pointSubs = [
  "どんなことが問題になっているのか把握しよう",
  "解決するにはどうすればいい?",
] as const;

export function Problems() {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="problems"
      ref={sectionRef}
      className="py-24 md:py-36 bg-card relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            私たちが<span className="text-primary">解決</span>すること
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            現場の「困った」を仕組みで解消します
          </p>
        </div>

        {/* One part per section: Part 1 & 3 = image left, text right. Part 2 = text left, image right. One image for all. */}
        <div className="space-y-12 md:space-y-16">
          {problems.map((problem, partIndex) => {
            const imageOnLeft = partIndex !== 1; // Part 1 and 3: left. Part 2: right.
            return (
              <div
                key={problem.title}
                className={`rounded-2xl border-2 border-primary/30 bg-background overflow-hidden shadow-md transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                style={{ transitionDelay: `${(partIndex + 1) * 120}ms` }}
              >
                <div
                  className={`grid md:grid-cols-2 gap-0 min-h-0 ${!imageOnLeft ? "md:grid-flow-dense" : ""
                    }`}
                >
                  {/* Image block - one image for all parts */}
                  <div
                    className={`relative aspect-[4/3] md:aspect-auto md:min-h-[280px] ${!imageOnLeft ? "md:col-start-2" : ""
                      }`}
                  >
                    <Image
                      src={PROBLEMS_IMAGE}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Text block: Icon + Title + Explanation + Numbered points */}
                  <div
                    className={`p-6 md:p-8 flex flex-col justify-center border-t md:border-t-0 md:border-l border-border ${!imageOnLeft ? "md:col-start-1 md:row-start-1 md:border-l-0 md:border-r" : ""
                      }`}
                  >
                    <div
                      className={`w-14 h-14 rounded-xl border-2 border-primary/40 bg-gradient-to-br ${problem.gradient} flex items-center justify-center shrink-0 mb-3`}
                    >
                      <problem.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                      {problem.title}
                    </h3>
                    <div className="border border-border rounded-lg p-4 bg-muted/20 mb-5">
                      <p className="text-sm font-bold text-sky-600 dark:text-sky-400 mb-2">◆現状</p>
                      <ul className="space-y-1.5 mb-4">
                        {problem.before.map((item) => (
                          <li key={item} className="text-sm text-muted-foreground flex gap-2">
                            <span className="w-1 h-1 rounded-full bg-muted-foreground/60 mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm font-bold text-sky-600 dark:text-sky-400 mb-2">◆導入後</p>
                      <ul className="space-y-1.5">
                        {problem.after.map((item) => (
                          <li key={item} className="text-sm text-foreground font-medium flex gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      {circleLabels.map((label, i) => (
                        <div key={label}>
                          <div className="flex gap-3">
                            <span className="text-xl font-bold text-foreground shrink-0">
                              {label}
                            </span>
                            <div>
                              <h4 className="text-base font-bold text-foreground">
                                {pointTitles[i]}
                              </h4>
                              <p className="text-sm text-sky-600 dark:text-sky-400 font-medium mt-0.5">
                                {pointSubs[i]}
                              </p>
                              <ul className="mt-2 space-y-1.5">
                                {(i === 0 ? problem.before : problem.after).map((item) => (
                                  <li
                                    key={item}
                                    className={`text-sm flex items-start gap-2 ${i === 0
                                        ? "text-muted-foreground"
                                        : "text-foreground font-medium"
                                      }`}
                                  >
                                    <span
                                      className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${i === 0 ? "bg-muted-foreground/60" : "bg-primary"
                                        }`}
                                    />
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
