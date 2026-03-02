import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";


const projects = [
    {
        title: "Plant-disease-AI",
        description: "This project offers an AI-driven solution to help farmers detect plant diseases and manage their crops more efficiently. With cutting-edge machine learning models and an intuitive user interface, it ensures that farmers can quickly identify and respond to threats, minimizing losses and maximizing productivity.",
        image: "/projects/ai-plant.png",
        link :"https://github.com/Eya-jomli/Plant-disease-AI",
        tags: ["React", "Django", "Ai"],
    },
     {
        title: "CMS Word Phrase Manager",
        description: "A simple Content Management System (CMS) for managing words and phrases in a local SQLite database. This project allows administrators to view, edit, and update content easily, with features like pagination, search, and initial data loading from a JSON file.",
        image: "/projects/cms.png",
        link :"https://github.com/Eya-jomli/cms-word-phrase-manager",
        tags: ["React", "Django", "Ai"],
    },
   {
    title: "MultiStep Registration Form",
    description: "A 7-step multi-step registration form built with Laravel, featuring input validation at each step and database integration with MySQL. Fully responsive design.",
    image: "/projects/form.png",
    link: "https://github.com/Eya-jomli/MultiStep-Form",
    tags: ["PHP", "Laravel", "MySQL", "Multi-step Form", "Livewire"]
    },

];

export const Projects = () => {
    return( 
    <section id="projects" className="py-32 relative overflow-hidden">
        {/*bg glows */} 
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl"/>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[var(--color-highlight)]/5 rounded-full blur-3xl"/>
        <div className="container mx-auto px-6 relative z-10">
            {/*Section header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-[var(--color-secondary-foreground)] text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
                <h2 className="text-4xl md:text:5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-[var(--color-secondary-foreground)]">
                    Projects that 
                    <span className="font-serif italic font-normal text-white"> make impact.</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] animate-fade-in animation-delay-200">
                    From full-stack web platforms to AI-powered applications, these projects reflect my approach to clean architecture and thoughtful design.
                </p>
            </div>

            {/*Projects Grid */}
            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project,index) => (
                    <div key={index} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                    style={{animationDelay: `${(index + 1 ) * 100}ms`}}
                    >
                        {/*Image */}
                        <div className="relative overflow-hidden aspect-video">
                            <img src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"/>
                            {/*Overlay Links */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a href={project.link} className="p-3 rounded-full glass hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-foreground)] transition-all">
                                    <ArrowUpRight className="w-6 h-6" />
                                </a>
                                <a href={project.link} className="p-3 rounded-full glass hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-foreground)] transition-all">
                                    <Github className="w-5 h-5"/>
                                </a>
                            </div>
                        </div>
                        {/* Content */}
                        <div className="p-6 space-y-4">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl font-semibold group-hover:text-[var(--color-primary)] transition-colors">{project.title}</h3>
                                <ArrowUpRight 
                                className="w-6 h-6 text-[var(--color-muted-foreground)]
                                group-hover:text-[var(--color-primary)] group-hover:translate-x-1
                                group-hover:translate-y-1 transition-all"
                                 />
                            </div>
                            <p className="text-[var(--color-muted-foreground)] text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIdx) => (
                                    <span 
                                    key={tagIdx}
                                    className="px-4 py-1.5 rounded-full bg-[var(--color-surface)] text-xs font-medium border border-border/50 text-[var(--color-muted-foreground)] hover:border-[var(--color-primary)]/50 hover:text-[var(--color-primary)] trasition-all duration-300">{tag}</span>
                            ))}</div>
                        </div>
                    </div>
                
                ))}
            </div>
              {/* View all CTA */}
            <div className="text-center mt-12 animate-fade-in animation-delay-500">
                <AnimatedBorderButton>
                    View All Projects
                    <ArrowUpRight className="w-6 h-6" /> 
                </AnimatedBorderButton>
            </div>
        </div>

    </section>
);
};
