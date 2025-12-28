import React from "react";
import { TrendingUp, BarChart3, Brain } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: TrendingUp,
      label: "Electricity Trading",
      desc: "European, US, and Indian wholesale power markets",
    },
    {
      icon: BarChart3,
      label: "Quantitative Research",
      desc: "Statistical modeling, machine learning & data analysis",
    },
    {
      icon: Brain,
      label: "Risk Management",
      desc: "Portfolio optimization & exposure control",
    },
  ];


  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left column - Text */}
          <div>
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
              About
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Bridging Statistics & Energy Markets
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm Smeet Poladia, a statistics graduate and quantitative trader specializing 
              in electricity markets across Europe, the US, and India. I use statistical modeling, 
              quantitative research, and optimization to design data-driven solutions for electricity market challenges.
            </p>
          </div>

          {/* Right column - Skills */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.label}
                className="group p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex items-start gap-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <skill.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{skill.label}</h3>
                  <p className="text-sm text-muted-foreground">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
