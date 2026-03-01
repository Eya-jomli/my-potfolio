import { Code2, Users, Rocket, Lightbulb } from "lucide-react";
const highlights = [
  {
    icon: Code2,
    title: "Scalable Engineering",
    description: "Designing clean, maintainable architectures with a strong focus on long-term scalability."
  },
  {
    icon: Rocket,
    title: "Performance & Quality",
    description: "Optimizing performance while ensuring reliability through testing, monitoring, and best practices."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Collaborating in international, remote teams using Agile workflows and modern tooling."
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "Exploring new technologies across web, cloud, and AI to build smarter solutions."
  },
];

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
                    Engineering meaningful software{" "}
                    <span className="font-serif italic font-normal text-white">
                    with precision and purpose.
                    </span>

                </h2>
                <div className="space-y-4 text-[var(--color-muted-foreground)] animate-fade-in animation-delay-200 ">
                    <p>
                        I’m a driven software engineer with experience building meaningful, production-ready applications in international and remote team environments.

                    </p>
                    <p>
                        My background spans frontend, backend, data, and AI-driven systems — from scalable microservices and modern web interfaces to analytics dashboards and intelligent applications. I value clean architecture, collaboration, and continuous improvement in everything I build.

                    </p>
                </div>

                <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                    <p className="text-lg font-medium italic text-[var(--color-foreground)] ">
                        "My goal is to build software that is not only functional, but reliable, scalable, and enjoyable to use — systems that users trust and developers are proud to maintain."
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