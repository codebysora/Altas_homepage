import Link from "next/link";

const navLinks = [
  { href: "/", hash: "#top", label: "トップ" },
  { href: "/", hash: "#services", label: "サービス" },
  { href: "/", hash: "#results", label: "実績・発信" },
  { href: "/", hash: "#about", label: "私たちについて" },
  { href: "/contact", label: "お問い合わせ" },
];

const legalLinks = [
  { href: "/legal/tokusho", label: "特定商取引法に基づく表記" },
  { href: "/legal/refund", label: "返金ポリシー" },
  { href: "/legal/cancellation", label: "キャンセルポリシー" },
  { href: "/legal/terms", label: "利用規約" },
];

export function Footer() {
  return (
    <div className="relative">
      <footer className="pt-16 pb-12 bg-foreground text-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* ATLAS Logo + business name for Stripe */}
            <div>
              <Link href="/" className="group flex items-center gap-1">
                <span className="text-2xl font-bold tracking-tight">
                  <span className="text-primary">A</span>
                  <span className="text-background">T</span>
                  <span className="text-background">L</span>
                  <span className="text-primary">A</span>
                  <span className="text-background">S</span>
                </span>
              </Link>
              <p className="text-sm opacity-60 mt-2">
                AIおよびビジネス自動化
              </p>
              <p className="text-xs opacity-50 mt-1">お問い合わせ：atlas.workroom@gmail.com</p>
            </div>

            <nav className="flex flex-col items-center md:items-end gap-4">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href + (link.hash || "")}
                    href={link.hash ? `${link.href}${link.hash}` : link.href}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs opacity-60">
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:opacity-100 transition-opacity duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          <div className="mt-8 pt-8 text-center">
            <p className="text-sm opacity-60">
              © {new Date().getFullYear()} ATLAS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
