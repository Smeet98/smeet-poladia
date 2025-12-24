import { FileText, Mic, BookOpen, ExternalLink } from "lucide-react";

const publications = [
  {
    type: "paper",
    icon: FileText,
    title: "Volatility Clustering in European Power Markets",
    venue: "Energy Economics Journal",
    year: "2023",
    link: "#",
  },
  {
    type: "talk",
    icon: Mic,
    title: "Machine Learning in Electricity Price Forecasting",
    venue: "European Energy Trading Summit",
    year: "2023",
    link: "#",
  },
  {
    type: "article",
    icon: BookOpen,
    title: "The Future of Algorithmic Trading in Renewables",
    venue: "Energy Trader Magazine",
    year: "2022",
    link: "#",
  },
  {
    type: "paper",
    icon: FileText,
    title: "Statistical Arbitrage in Cross-Border Power Flows",
    venue: "Quantitative Finance",
    year: "2021",
    link: "#",
  },
];

const PublicDomain = () => {
  return (
    <section id="public-domain" className="py-24 md:py-32">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
              Publications
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              In the <span className="text-gradient">Public Domain</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Research papers, conference talks, and articles contributing to the 
              broader discourse on energy trading and quantitative methods.
            </p>
          </div>
          
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <a 
                key={index}
                href={pub.link}
                className="group flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <pub.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {pub.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        {pub.venue} • {pub.year}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-12 p-6 rounded-xl border-glow bg-secondary/30 text-center">
            <p className="text-muted-foreground">
              <span className="text-primary font-mono">Note:</span> Full publications and presentations 
              available upon request. Connect via the contact section below.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicDomain;
