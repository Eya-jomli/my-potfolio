export const experiences = [
  {
    period: "09/2025 - Present",
    role: "Frontend Developer Intern",
    company: "Desion GmbH",
    description:
      "Reduced page load times by 25% across 3 projects by refactoring legacy HTML and transitioning to a reusable, optimized, component-based UI architecture.",
    technologies: ["React.js", "Tailwind CSS", "Python", "Chrome DevTools", "Lighthouse"],
    current: true,
  },
  {
    period: "12/2024 - 07/2025",
    role: "Frontend Developer Intern",
    company: "Ausbildungsbasis",
    description:
      "Redesigned and implemented a responsive, modern user interface using Laravel Blade and Livewire, cutting the go-live timeline and improving usability and maintainability.",
    technologies: ["Laravel", "Blade", "Livewire", "HTML", "CSS", "Jira"],
    current: false,
  },
  {
    period: "07/2024 - 09/2024",
    role: "Full Stack Developer Intern",
    company: "QuantStats",
    description:
      "Developed a football analytics platform implementing scalable microservices architecture. Enhanced football match analysis in Tunisia, enabling data-driven decisions.",
    technologies: ["Angular", "Spring Boot", "PostgreSQL"],
    current: false,
  },
  {
    period: "02/2022 - 06/2022",
    role: "Data Analyst Intern",
    company: "Poulina Group Holding",
    description:
      "Developed and implemented a sales dashboard using Power BI to centralize, transform, and visualize sales data, enhancing strategic decision-making.",
    technologies: ["Power BI", "SSIS", "SQL Server", "Excel"],
    current: false,
  },
  {
    period: "07/2023 - 09/2023",
    role: "Final Year Internship – ECG Signal Recognition",
    company: "Academic Project",
    description:
      "Preprocessed ECG data using filtering, peak detection, and segmentation. Extracted key features to improve classification accuracy using SVM models.",
    technologies: ["SVM", "MATLAB", "Matplotlib", "UML", "Agile"],
    current: false,
  },
];


export const Experience = () => {
    return (
    <section id="experience"
    className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="container mx-auto px-6 relative z-10">
            {/*Section Header */}
            <div className="max-w-3xl mb-16">
                <span className="text-[var(--color-secondary-foreground)] text-sm font-medium tracking-wider uppercase animate-fade-in">Career Job</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-[var(--color-secondary-foreground)]">Experience that 
                    <span className="font-serif italic font-normal text-white"> speaks volumes.</span>
                </h2>
                <p className="text-[var(--color-muted-foreground)] animate-fade-in animation-delay-200">
                    A timeline of my professional growth, from curious beginner to junior software engineer buiding products at scale.
                </p>
            </div>
            {/*Timeline */}
            <div className="relative">
                <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--color-primary)]/70 via-[var(--color-primary)]/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px0rgba(32,178,166,0.8)]"/>
                {/*Experience*/}
                <div className="space-y-12">
                    {experiences.map((exp, idx) => (
                        <div key={idx}
                        className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                        style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                        >
                            {/*timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-[var(--color-primary)] rounded-full -translate-x-1/2 ring-4 ring-[var(--color-background)] z-10">
                                {exp.current && <span className="absolute inset-0 rounded-full bg-[var(--color-primary)] animate-ping opacity-75" />}
                            </div>
                            {/*Content */}
                            <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                                <div className={`glass p-6 rounded-2xl border border-[var(--color-primary)]/30 hover:border-[var(--color-primary)]/50 transition-all duration-500`}>
                                    <span className="text-sm text-[var(--color-primary)] font-meduim">{exp.period}</span>
                                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                    <p className="text-[var(--color-muted-foreground)]">{exp.company}</p>
                                    <p className="text-sm text-[var(--color-muted-foreground)] mt-4">{exp.description}</p>
                                    <div className={`flex flex-wrap gap-2 mt-4 ${ idx % 2 === 0 ? "md:justify-end" : "" }`}>
                                        {exp.technologies.map((tech, idxTech) => (
                                        <span 
                                        className="px-3 py-1 bg-[var(--color-surface)] text-xs rounded-full text-[var(--color-muted-foreground)]"
                                        key={idxTech}
                                        >
                                         {tech}
                                        </span>
                                    ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    );
};