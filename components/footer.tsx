import Link from "next/link";

const navLinks = [
  { href: "#top", label: "トップ" },
  { href: "#services", label: "サービス" },
  { href: "#results", label: "実績・発信" },
  { href: "#careers", label: "一緒に働く" },
  { href: "#contact", label: "無料相談" },
];

export function Footer() {
  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* ATLAS Logo */}
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
              AI & Business Automation
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 text-center">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} ATLAS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
