import { BookOpen, Mic, Rocket, ExternalLink, ArrowRight } from "lucide-react";

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
          
          {/* Substack Feature - Main Card */}
          <div className="mb-8">
            <a 
              href="#" 
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary/10 via-card to-card border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:glow"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="p-4 rounded-xl bg-primary/20 text-primary w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <BookOpen className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono uppercase tracking-wider">
                      Substack
                    </span>
                    <span className="text-muted-foreground text-sm">Active</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                    Electricity Markets Newsletter
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Deep dives into power market dynamics, trading strategies, and quantitative 
                    approaches to energy trading. Subscribe for regular insights.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span>Read on Substack</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          </div>
          
          {/* Secondary Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Seminar Card */}
            <a 
              href="#"
              className="group flex flex-col p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <Mic className="w-5 h-5" />
                </div>
                <div>
                  <span className="px-2 py-0.5 rounded-full bg-secondary text-xs font-mono text-muted-foreground mb-2 inline-block">
                    Speaking
                  </span>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    Seminar: Quantitative Approaches to Power Trading
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground text-sm flex-1">
                An educational seminar covering statistical methods and practical applications 
                in electricity market trading.
              </p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground">Conducted</span>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </a>

            {/* Future Projects Card */}
            <div className="group flex flex-col p-6 rounded-xl bg-card border border-dashed border-border hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-secondary text-muted-foreground shrink-0">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <span className="px-2 py-0.5 rounded-full bg-secondary text-xs font-mono text-muted-foreground mb-2 inline-block">
                    Coming Soon
                  </span>
                  <h3 className="text-lg font-semibold text-muted-foreground">
                    Future Projects
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground text-sm flex-1">
                More research, publications, and educational content in the pipeline. 
                Stay tuned for upcoming projects in energy trading and quantitative analysis.
              </p>
              <div className="flex items-center mt-4 pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground/60">Updates coming soon</span>
              </div>
            </div>
          </div>
          
          {/* Subscribe CTA */}
          <div className="mt-12 p-6 rounded-xl border-glow bg-secondary/30 text-center">
            <p className="text-muted-foreground">
              <span className="text-primary font-mono">Subscribe:</span> Follow the Substack for 
              regular insights on electricity markets and quantitative trading strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicDomain;
