import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Zap className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm">© 2024 Quantitative Trader</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Built with precision. Powered by data.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
