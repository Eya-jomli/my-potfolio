import { Code2, Users, Rocket, Lightbulb } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const About = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Code2,
      title: t.about.highlights.scalable.title,
      description: t.about.highlights.scalable.description,
    },
    {
      icon: Rocket,
      title: t.about.highlights.performance.title,
      description: t.about.highlights.performance.description,
    },
    {
      icon: Users,
      title: t.about.highlights.collaboration.title,
      description: t.about.highlights.collaboration.description,
    },
    {
      icon: Lightbulb,
      title: t.about.highlights.learning.title,
      description: t.about.highlights.learning.description,
    },
  ];

  return (
    <section
      id="about"
      className="py-32 relative overflow-hidden"
    >
      <div className="animate-fade-in text-center mb-16">
        <span
          className="text-[var(--color-secondary-foreground)] 
                     text-sm font-medium tracking-wider uppercase"
        >
          {t.about.label}
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column */}
          <div className="space-y-8">

            <h2
              className="text-4xl md:text-5xl font-bold leading-tight 
                         animate-fade-in animation-delay-100 
                         text-[var(--color-secondary-foreground)]"
            >
              {t.about.title}{" "}
              <span className="font-serif italic font-normal text-white">
                {t.about.titleItalic}
              </span>
            </h2>

            <div
              className="space-y-4 text-[var(--color-muted-foreground)] 
                         animate-fade-in animation-delay-200"
            >
              <p>
                {t.about.paragraph1}
              </p>

              <p>
                {t.about.paragraph2}
              </p>
            </div>

            <div
              className="glass rounded-2xl p-6 glow-border 
                         animate-fade-in animation-delay-300"
            >
              <p
                className="text-lg font-medium italic 
                           text-[var(--color-foreground)]"
              >
                "{t.about.quote}"
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{
                  animationDelay: `${(index + 1) * 100}ms`,
                }}
              >
                <div
                  className="w-13 h-13 rounded-xl 
                             bg-[var(--color-primary)]/10 
                             flex items-center justify-center mb-4 
                             hover:bg-[var(--color-primary)]/20"
                >
                  <item.icon
                    className="w-6 h-6 text-[var(--color-primary)]"
                  />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-[var(--color-muted-foreground)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};