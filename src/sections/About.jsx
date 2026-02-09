import { Code2, Users, Rocket, Lightbulb } from "lucide-react";
const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description:"Writing maintainable, scalable code that stands the test of time."
    },
     {
        icon: Rocket,
        title: "Performance",
        description:"Optimizing for speed and delivering lightning-fast user experiences."
    },
     {
        icon: Users,
        title: "Collaboration",
        description:"Working Closely with teams to bring ideas to life."
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:"Staying ahead withh the latest technologies and best practices"
    },
]
export const About = () => {
    return (
    <section id="about" className="py-32 relative overflow-hidden">
         <div className="animate-fade-in text-center mb-16">
                <span className="text-[var(--color-secondary-foreground)] 
                                text-sm font-medium tracking-wider uppercase ">
                    About Me
                </span>
                </div>
        <div className="container mx-auto px-6 relative z-10">
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-8">
               

                <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-[var(--color-secondary-foreground)]">
                Building the future{" "}
                <span className="font-serif italic font-normal text-white">
                    one component at a time.
                </span>
                </h2>
                <div className="space-y-4 text-[var(--color-muted-foreground)] animate-fade-in animation-delay-200 ">
                    <p>
                      I'am a Driven software engineer with experience creating meaningful applications in international team settings.
                    </p>
                    <p>
                        Collaborative and adaptable, with a passion for continuous learning and improving software quality. Always eager to embrace new challenges and deliver reliable, maintainable solutions.
                    </p>
                </div>

                <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                    <p className="text-lg font-medium italic text-[var(--color-foreground)] ">
                        "My mission is to create digital experiences that that are not just functional, but truly delightful - products that users love to use and developers love to maintain."
                    </p>
                </div>
            </div>
            {/*Right column */}
            <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((item, index) => (
                    <div key={index} className="glass p-6 rounded-2xl animate-fade-in" 
                     style={{animationDelay: `${(index + 1 ) * 100}ms`}}>
                        <div className="w-13 h-13 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4 hover:bg-[var(--color-primary)]/20">
                            <item.icon className="w-6 h-6 text-[var(--color-primary)]"/>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{ item.title }</h3>
                        <p className="text-sm text-[var(--color-muted-foreground)]">{ item.description }</p>
                    </div>
                ))}
            </div>
          
        </div>
    </div>
    </section>

    )
};