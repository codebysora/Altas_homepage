"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "トップ" },
  { href: "/services", label: "サービス" },
  { href: "/results", label: "実績・発信" },
  { href: "/contact", label: "お問い合わせ" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 md:h-24 leading-3 text-primary">
          {/* ATLAS Logo */}
          <Link href="/" className="group flex items-center gap-1">
            <span className="text-2xl md:text-3xl font-bold tracking-tight">
              <span className="text-primary">A</span>
              <span className="text-foreground">T</span>
              <span className="text-foreground">L</span>
              <span className="text-primary">A</span>
              <span className="text-foreground">S</span>
            </span>
            <span className="hidden sm:block ml-3 text-xs text-muted-foreground font-medium border-l border-border pl-3">
              AIおよびビジネス自動化
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 ${pathname === link.href
                  ? "text-foreground after:w-full"
                  : "text-muted-foreground hover:text-foreground after:w-0 hover:after:w-full"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="px-6 transition-all duration-300 hover:scale-105 shrink-0">
              <Link href="/contact">お問い合わせ</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <nav className="py-6 border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium transition-colors px-2 py-2 ${pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="w-full mt-2">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  お問い合わせ
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
