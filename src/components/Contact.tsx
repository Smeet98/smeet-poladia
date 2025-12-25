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
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:simplysmeet@zohomail.in"
              className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors glow"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">Get in Touch</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/smeet3084/"
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
            <span className="text-sm">Munich, Germany</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
