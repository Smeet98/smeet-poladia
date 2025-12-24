import { Mail, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-12">
            Open to discussing market opportunities, research collaborations, 
            or just exchanging ideas about energy markets.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:contact@example.com"
              className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors glow"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">Get in Touch</span>
            </a>
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
            >
              <Linkedin className="w-5 h-5 text-primary" />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Berlin, Germany</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
