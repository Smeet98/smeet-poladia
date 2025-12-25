import { TrendingUp, BarChart3, Brain } from "lucide-react";

const About = () => {
  const skills = [
    { icon: TrendingUp, label: "Electricity Trading", desc: "European power markets" },
    { icon: BarChart3, label: "Quantitative Analysis", desc: "Statistical modeling" },
    { icon: Brain, label: "Risk Management", desc: "Portfolio optimization" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left column - Text */}
            <div>
              <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
                About
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Bridging Statistics
                <br />
                <span className="text-muted-foreground">& Energy Markets</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm Smeet Poladia, a statistics graduate with hands-on experience 
                  in quantitative trading. I specialize in developing and implementing trading 
                  strategies for electricity markets.
                </p>
                <p>
                  My journey has taken me through diverse market environments—from SESCO Enterprises 
                  in Pittsburgh to the emerging markets of India, and now the sophisticated 
                  European power markets in Munich, Germany.
                </p>
                <p>
                  This global perspective, combined with rigorous statistical training, allows me 
                  to approach market challenges with both analytical precision and practical insight.
                </p>
              </div>
            </div>
            
            {/* Right column - Skills */}
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div 
                  key={skill.label}
                  className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <skill.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{skill.label}</h3>
                      <p className="text-muted-foreground">{skill.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
