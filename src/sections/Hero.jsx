import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import {
  ArrowRight,
  Github,
  Linkedin,
  ChevronDown,
  Download,
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export const Hero = () => {
  const { t, language } = useLanguage();

  const [dots] = useState(() =>
    [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }))
  );

  const skills = [
    "React",
    "NodeJS",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Tailwind CSS",
    "SpringBoot",
    "Django",
    "Devops",
    "Jenkins",
    "Nexus",
    "Linux",
    "ISTQB",
  ];

  // Select the CV according to the current language
  const cvPath =
    language === "fr"
      ? "/projects/cv/EyaJomliFR.pdf"
      : "/projects/cv/Eya-Jomli.pdf";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/projects/hero.jpeg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2AC",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column - Text Content */}
          <div className="space-y-8">

            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-[var(--color-primary)]">
                <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse" />
                {t.hero.role}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                {t.hero.titleLine1}{" "}
                <span className="text-[var(--color-primary)] glow-text">
                  {t.hero.titleHighlight}
                </span>

                <br />

                {t.hero.titleLine2}

                <br />

                <span className="font-serif italic font-normal text-white">
                  {t.hero.titleItalic}
                </span>
              </h1>

              <p className="text-lg text-[var(--color-muted-foreground)] max-w-lg animate-fade-in animation-delay-200">
                {t.hero.description}
              </p>
            </div>

            {/* Call To Actions */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                {t.hero.contact}
                <ArrowRight className="w-5 h-5" />
              </Button>

              <a href={cvPath} download>
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  {t.hero.downloadCV}
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animaet-fade-in animation-delay-400">
              <span className="text-sm text-[var(--color-muted-foreground)]">
                {t.hero.followMe}
              </span>

              {[
                {
                  icon: Github,
                  href: "https://github.com/Eya-jomli",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/eyajomli/",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">

            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">

              {/* Glowing gradient pulse behind the image */}
              <div
                className="absolute inset-0 rounded-3xl 
                bg-gradient-to-br 
                from-[var(--color-primary)]/30 
                via-transparent 
                to-[var(--color-primary)]/10 
                blur-2xl animate-pulse 
                pointer-events-none"
              />

              {/* Glass + glow wrapper */}
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/projects/Eya.png"
                  alt="Eya Jomli"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span>{t.hero.available}</span>
                  </div>
                </div>

                {/* Stats Badge */}
                <div className="absolute -top-5 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-[var(--color-primary)]">
                    1
                  </div>

                  <div className="text-xs text-[var(--color-foreground)]">
                    {t.hero.experience}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-[var(--color-muted-foreground)] mb-6 text-center">
            {t.hero.technologies}
          </p>

          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-[var(--color-muted-foreground)]/50 hover:text-[var(--color-muted-foreground)] transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">
            {t.hero.scroll}
          </span>

          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};