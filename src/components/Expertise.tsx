import { Zap, LineChart, Clock, Shield, Database, GitBranch } from "lucide-react";

const expertiseAreas = [
  {
    icon: Zap,
    title: "Power Markets",
    items: ["Day-ahead trading", "Intraday optimization", "Balancing markets"],
  },
  {
    icon: LineChart,
    title: "Statistical Methods",
    items: ["Time series analysis", "Machine learning", "Stochastic modeling"],
  },
  {
    icon: Clock,
    title: "Trading Systems",
    items: ["Algorithmic execution", "Real-time analytics", "Low-latency systems"],
  },
  {
    icon: Shield,
    title: "Risk Management",
    items: ["VaR modeling", "Stress testing", "Position limits"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    items: ["Market data pipelines", "SQL & Python", "Cloud infrastructure"],
  },
  {
    icon: GitBranch,
    title: "Strategy Development",
    items: ["Backtesting frameworks", "Signal generation", "Portfolio optimization"],
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
              Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Core <span className="text-gradient">Competencies</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized knowledge spanning the intersection of quantitative finance, 
              energy markets, and technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => (
              <div 
                key={area.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <area.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{area.title}</h3>
                </div>
                <ul className="space-y-2">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
