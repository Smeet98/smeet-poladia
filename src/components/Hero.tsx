import { ArrowDown, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Animated glow orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-accent/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headshot */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 animate-fade-up">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 blur-xl" />
            <div className="relative w-full h-full rounded-full border-2 border-primary/50 overflow-hidden bg-secondary flex items-center justify-center">
              {/* Placeholder for headshot - replace src with actual image */}
              <div className="text-muted-foreground text-sm font-mono text-center p-4">
                Add<br />Headshot
              </div>
              {/* Uncomment and update when you have an actual image:
              <img 
                src="/headshot.jpg" 
                alt="Smeet Poladia"
                className="w-full h-full object-cover"
              />
              */}
            </div>
          </div>

          {/* Status indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/30 bg-secondary/50 backdrop-blur-sm animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-sm font-mono text-muted-foreground">
              Currently based in <span className="text-primary">Munich, Germany</span>
            </span>
          </div>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-foreground">Smeet</span>
            <br />
            <span className="text-gradient glow-text">Poladia</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 font-light animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Quantitative Trader specializing in{" "}
            <span className="text-primary font-medium">electricity markets</span>
            <br className="hidden md:block" />
            with global experience across three continents
          </p>
          
          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-3xl md:text-4xl font-bold font-mono text-primary">
                <Zap className="w-6 h-6" />
                <span>5+</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-mono text-foreground">3</div>
              <p className="text-sm text-muted-foreground mt-1">Countries</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-mono text-foreground">CMU</div>
              <p className="text-sm text-muted-foreground mt-1">Stats Graduate</p>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <a 
            href="#about" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-fade-up"
            style={{ animationDelay: '0.5s' }}
          >
            <span className="text-sm font-mono">scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
