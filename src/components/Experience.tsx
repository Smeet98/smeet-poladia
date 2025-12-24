import { MapPin } from "lucide-react";

const experiences = [
  {
    period: "2022 - Present",
    location: "Berlin, Germany",
    role: "Senior Quantitative Trader",
    company: "Energy Trading Firm",
    description: "Leading electricity trading strategies in European power markets. Developing algorithmic trading systems and risk management frameworks.",
    flag: "🇩🇪",
  },
  {
    period: "2019 - 2022",
    location: "Mumbai, India",
    role: "Quantitative Analyst",
    company: "Financial Services",
    description: "Built predictive models for emerging market dynamics. Collaborated with cross-functional teams on trading infrastructure.",
    flag: "🇮🇳",
  },
  {
    period: "2016 - 2019",
    location: "New York, USA",
    role: "Junior Trader / Analyst",
    company: "Investment Bank",
    description: "Started career in quantitative finance. Developed statistical models for market analysis and trading signals.",
    flag: "🇺🇸",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
              Experience
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Global <span className="text-gradient">Journey</span>
            </h2>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-1/2" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.period}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary glow transform -translate-x-1.5 md:-translate-x-2 mt-6" />
                  
                  {/* Content */}
                  <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                      <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span className="text-2xl">{exp.flag}</span>
                        <span className="font-mono text-sm text-primary">{exp.period}</span>
                      </div>
                      <div className={`flex items-center gap-2 text-muted-foreground text-sm mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                      <p className="text-primary/80 font-medium mb-3">{exp.company}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
