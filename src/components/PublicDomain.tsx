import { BookOpen, Mic, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const publications = [
  {
    slug: "substack",
    title: "Electricity Markets Newsletter",
    description: "Deep dives into power market dynamics, trading strategies, and quantitative approaches to energy trading. Subscribe for regular insights.",
    icon: BookOpen,
    tag: "Substack",
    status: "Active",
  },
  {
    slug: "seminar",
    title: "Quantitative Approaches to Power Trading",
    description: "An educational seminar covering statistical methods and practical applications in electricity market trading.",
    icon: Mic,
    tag: "Speaking",
    status: "Recorded",
  },
  {
    slug: "future-projects",
    title: "Upcoming Projects",
    description: "More research, publications, and educational content in the pipeline. Stay tuned for upcoming projects in energy trading.",
    icon: Rocket,
    tag: "Coming Soon",
    status: "In Progress",
  },
];

const PublicDomain = () => {
  return (
    <section id="public-domain" className="py-24 md:py-32">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
              Publications
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              In the <span className="text-gradient">Public Domain</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sharing insights on energy trading, quantitative methods, and market dynamics 
              through writing, speaking, and ongoing projects.
            </p>
          </div>
          
          {/* Linear Grid - Same Size Tiles */}
          <div className="grid md:grid-cols-3 gap-6">
            {publications.map((pub) => (
              <Link 
                key={pub.slug}
                to={`/publication/${pub.slug}`}
                className="group flex flex-col p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                    <pub.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="px-2 py-0.5 rounded-full bg-secondary text-xs font-mono text-muted-foreground mb-2 inline-block">
                      {pub.tag}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {pub.title}
                </h3>
                
                <p className="text-muted-foreground text-sm flex-1 line-clamp-3">
                  {pub.description}
                </p>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">{pub.status}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
          
          {/* Subscribe CTA */}
          <div className="mt-12 p-6 rounded-xl border-glow bg-secondary/30 text-center">
            <p className="text-muted-foreground">
              <span className="text-primary font-mono">Explore:</span> Click on any card above to learn more about 
              each publication, including suggested readings and additional resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicDomain;
