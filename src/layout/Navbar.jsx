import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";


export const Navbar = () => {
 const { t } = useLanguage();
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const [isScrolled, setIsScrolled] = useState(false);
const navLinks = [
  { href: "#about", label: t.nav.about },
  { href: "#projects", label: t.nav.projects },
  { href: "#experience", label: t.nav.experience },
  { href: "#testimonials", label: t.nav.testimonials },
  { href: "#contact", label: t.nav.contact },
];
useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <header className={`fixed top-0 left-0 right-0 ${ isScrolled ? "glass-strong py-3" : "bg-[var(--color-transparent)] py-5" } z-50`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-[var(--color-primary)] transition-colors"
        >
          EJ <span className="text-[var(--color-primary)]">.</span>
        </a>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
            <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
                <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] rounded-full hover:bg-[var(--color-surface)]"
                >
                {link.label}
                </a>
            ))}
            </div>
        </div>
         {/*CTA button */}
         <div className="hidden md:flex items-center gap-2">
         <Button size="sm">Contact Me</Button>
          <LanguageSwitcher />
         </div>

         {/*Mobile Mennu Button*/}
         <button className="md:hidden p-2 text-[var(--color-foreground)]"
         onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
            {isMobileMenuOpen ? <X size={24}/> : <Menu size={24} />}
         </button>
      </nav>

      {/* Mobile Menu */ }
      {isMobileMenuOpen && (
    <div className="md:hidden glass-strong animate-fade-in">
      <div className="container mx-auto px-6 py-6 flex flex-col gap-4">

      {navLinks.map((link, index) => (
        <a
          href={link.href}
          key={index}
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-lg text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] py-2"
        >
          {link.label}
        </a>
      ))}

      <Button onClick={() => setIsMobileMenuOpen(false)}>
        {t.nav.contact}
      </Button>

      <div className="flex justify-center">
        <LanguageSwitcher />
      </div>

    </div>
  </div>
  )}
    </header>
  );
};
