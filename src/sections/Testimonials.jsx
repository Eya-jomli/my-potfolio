import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
export const testimonials = [
  {
    quote:
      "Eya contributed significantly to our football analytics platform. Her technical skills and quick learning made her an invaluable team member.",
    author: "T. Nabil",
    color: "from-rose-500 to-pink-500",
  },

  {
    quote:
      "Eya consistently demonstrates dedication and attention to detail. She quickly adapts to challenges and delivers high-quality work.",
    author: "S. Dirk",
    color: "from-emerald-500 to-teal-500",
  },
];

export const Testimonials = () => {
    const [activeIdx, setActiveIdx] = useState(0);
    const next = () => {
        setActiveIdx((prev) => (prev + 1) % testimonials.length);
    };

    const previous = () => {
        setActiveIdx((prev) => (prev -1 + testimonials.length) % testimonials.length);
    };

  return (
    <section
      id="testimonials"
      className="py-32 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[var(--color-primary)]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium tracking-wider uppercase animate-fade-in text-[var(--color-secondary-foreground)]">
            What People Say
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-[var(--color-secondary-foreground)]">
            Kind Words From{" "}
            <span className="font-serif italic font-normal text-white">
              amazing people
            </span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="glass p-8 md:p-12 rounded-3xl glow-border animate-fade-in animation-delay-200 overflow-visible">
              
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Quote Text */}
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                “{testimonials[activeIdx].quote}”
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                
                {/* Letter Avatar */}
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center
                  bg-gradient-to-br ${testimonials[activeIdx].color}
                  text-white font-bold text-xl ring-2 ring-white/20`}
                >
                  {testimonials[activeIdx].author.charAt(0)}
                </div>

                <div>
                  <div className="font-semibold">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-[var(--color-muted-foreground)]">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>

            </div>
            {/*Testimpnials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
                <button className="p-3 rounded-full glass hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition-all"
                onClick={previous}>
                    <ChevronLeft />
                </button>

                 <div className="flex gap-2">
                    {testimonials.map((_, idx) => (
                         <button 
                         onClick={() => setActiveIdx(idx)}
                         className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIdx ? "w-8 bg-[var(--color-primary)]" : "bg-[var(--color-muted-foreground)]/30 hover:bg-[var(--color-muted-foreground)]/50"}`}/>
                    ))}
                  </div>
                <button className="p-3 rounded-full glass hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition-all"
                 onClick={next}>
                    <ChevronRight />
                </button>
                
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
