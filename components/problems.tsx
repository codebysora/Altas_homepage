"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const PROBLEMS_IMAGE = "/images/problems-solutions.png";

const problems = [
  {
    title: "手作業が多すぎる",
    before: ["入力・転記・確認が手作業", "作業に追われ、考える時間がない"],
    after: ["処理は自動化", "人は判断・対応に集中できる"],
  },
  {
    title: "人が張り付かないと回らない",
    before: ["問い合わせ・確認対応で時間が取られる"],
    after: ["自動応答・自動処理", "必要な対応だけ人が行う"],
  },
  {
    title: "AIを業務で使えていない",
    before: ["AIは知っているが、使えていない"],
    after: ["実務に組み込まれたAI", "品質・顧客満足度が向上"],
  },
];

export function Problems() {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="problems"
      ref={sectionRef}
      className="py-24 md:py-32 bg-muted/30 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.06]"
        aria-hidden
        style={{
          backgroundImage: `repeating-linear-gradient(
            -12deg,
            transparent,
            transparent 40px,
            currentColor 40px,
            currentColor 1px
          )`,
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        <header
          className={`text-center mb-10 md:mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <p className="text-sm tracking-[0.3em] text-muted-foreground mb-3">
            解決する課題
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground tracking-tight">
            私たちが<span className="text-primary">解決</span>すること
          </h2>
          <div className="mt-6 w-12 h-px bg-primary/50 mx-auto" />
          <p className="mt-6 text-base text-muted-foreground">
            現場の「困った」を仕組みで解消します
          </p>
        </header>

        {/* Table-style layout: clear columns, easy to scan */}
        <div
          className={`rounded-xl border border-border bg-background overflow-hidden shadow-sm transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          style={{ transitionDelay: "150ms" }}
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left min-w-[600px]">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th
                    scope="col"
                    className="w-14 md:w-16 py-4 px-4 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                  >
                    No.
                  </th>
                  <th
                    scope="col"
                    className="w-[200px] md:w-[220px] py-4 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                  >
                    課題
                  </th>
                  <th
                    scope="col"
                    className="py-4 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                  >
                    現状
                  </th>
                  <th
                    scope="col"
                    className="py-4 px-4 text-xs font-semibold text-primary uppercase tracking-wider"
                  >
                    導入後
                  </th>
                </tr>
              </thead>
              <tbody>
                {problems.map((problem, index) => (
                  <tr
                    key={problem.title}
                    className={`border-b border-border last:border-b-0 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"
                      } hover:bg-muted/20`}
                    style={{ transitionDelay: `${(index + 2) * 80}ms` }}
                  >
                    <td className="py-5 px-4 text-center align-top">
                      <span className="inline-flex w-9 h-9 items-center justify-center rounded-lg bg-primary/10 text-base font-bold text-primary tabular-nums">
                        {index + 1}
                      </span>
                    </td>
                    <td className="py-0 px-0 align-top w-[200px] md:w-[220px]">
                      <div
                        className="min-h-[120px] md:min-h-[100px] flex flex-col justify-end p-4 bg-cover bg-center bg-no-repeat text-white"
                        style={{
                          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%), url(${PROBLEMS_IMAGE})`,
                        }}
                      >
                        <span className="text-sm md:text-base font-bold drop-shadow-md">
                          {problem.title}
                        </span>
                      </div>
                    </td>
                    <td className="py-5 px-4 align-top">
                      <ul className="space-y-2">
                        {problem.before.map((item) => (
                          <li
                            key={item}
                            className="text-sm text-muted-foreground flex items-start gap-2 leading-relaxed"
                          >
                            <span className="w-1 h-1 rounded-full bg-muted-foreground/50 mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="py-5 px-4 align-top">
                      <ul className="space-y-2">
                        {problem.after.map((item) => (
                          <li
                            key={item}
                            className="text-sm text-foreground font-medium flex items-start gap-2 leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
