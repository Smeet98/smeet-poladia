import { GraduationCap, Award, Rocket } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Statistics",
    institution: "Carnegie Mellon University",
    location: "Pittsburgh, Pennsylvania",
    period: "2019 - 2021",
    icon: GraduationCap,
    description: "Rigorous training in statistical theory, computational methods, and data analysis with focus on quantitative finance applications.",
    flag: "🇺🇸",
  },
  {
    degree: "Advanced Certification Programme in Space Technologies",
    institution: "Indian Institute of Science (IISc)",
    location: "Bangalore, India",
    period: "Certificate Program",
    icon: Rocket,
    description: "Specialized certification exploring advanced space technologies, satellite systems, and their applications.",
    flag: "🇮🇳",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 md:py-32 bg-secondary/20">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
              Education
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Academic <span className="text-gradient">Foundation</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu) => (
              <div 
                key={edu.institution}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                    <edu.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{edu.flag}</span>
                      <span className="font-mono text-sm text-primary">{edu.period}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-primary/80 font-medium text-sm mb-1">{edu.institution}</p>
                    <p className="text-muted-foreground text-xs">{edu.location}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
