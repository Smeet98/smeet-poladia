import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, BookOpen, Mic, Rocket, Calendar, MapPin, Clock, Play } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const publications = {
  substack: {
    type: "substack",
    title: "Electricity Markets Newsletter",
    subtitle: "Substack Publication",
    icon: BookOpen,
    description: "Deep dives into power market dynamics, trading strategies, and quantitative approaches to energy trading.",
    content: `This newsletter explores the intersection of quantitative methods and electricity trading, offering insights from years of hands-on experience in power markets across three continents.

Topics covered include:
• Statistical models for electricity price forecasting
• Risk management frameworks for energy portfolios
• Market microstructure in European power exchanges
• Renewable energy integration and its impact on trading strategies
• Quantitative approaches to weather-driven demand forecasting`,
    externalUrl: "#", // Replace with actual Substack URL
    suggestedReadings: [
      { title: "Energy Trading & Investing", author: "Davis W. Edwards" },
      { title: "Quantitative Finance with Python", author: "Chris Kelliher" },
      { title: "Power System Economics", author: "Steven Stoft" },
    ],
  },
  seminar: {
    type: "seminar",
    title: "Wholesale Electricity Markets and ERCOT: A Quantitative Trading Perspective",
    subtitle: "Educational Seminar",
    icon: Mic,
    description: "Introducing the fundamentals of wholesale electricity markets, with a focus on ERCOT—the independent system operator managing Texas's power grid. The discussion links market design to operational dynamics, highlighting how price formation and congestion management create opportunities for generators, traders, and load-serving entities.",
    forum: "XKDR Forum",
    date: "2025",
    duration: "1 Hour",
    content: `This seminar provides a comprehensive overview of how quantitative methods are applied in real-world electricity trading scenarios.

Key Topics Covered:
• Introduction to electricity market structures
• Time series analysis for price prediction
• Statistical arbitrage opportunities in power markets
• Risk metrics and portfolio optimization
• Real-world case studies from US and European markets

The presentation draws from practical experience at SESCO Enterprises and insights gained from working across multiple geographies in the energy trading space.`,
    videoUrl: "https://youtu.be/W7g04Rfa-AU?si=FFWuphkxRNY7d-Kn",
    suggestedReadings: [
      { title: "Analysis of Financial Time Series", author: "Ruey S. Tsay" },
      { title: "Options, Futures, and Other Derivatives", author: "John C. Hull" },
      { title: "Electricity Markets: Theories and Applications", author: "Chris Harris" },
    ],
  },
  "future-projects": {
    type: "future",
    title: "Upcoming Projects",
    subtitle: "In Development",
    icon: Rocket,
    description: "Research, publications, and educational content currently in the pipeline.",
    content: `Several exciting projects are currently in development:

• Research paper on machine learning applications in short-term electricity price forecasting
• Educational video series on quantitative trading fundamentals
• Open-source toolkit for energy market data analysis
• Collaborative research on renewable energy integration impacts

Stay tuned for updates on these initiatives. Subscribe to the newsletter to be notified when new content is released.`,
    suggestedReadings: [
      { title: "Machine Learning for Asset Managers", author: "Marcos López de Prado" },
      { title: "Advances in Financial Machine Learning", author: "Marcos López de Prado" },
    ],
  },
};

const PublicationDetail = () => {
  const { slug } = useParams();
  const publication = publications[slug as keyof typeof publications];

  if (!publication) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container px-6 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Publication Not Found</h1>
          <Link to="/#public-domain" className="text-primary hover:underline">
            Back to Publications
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const IconComponent = publication.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <Link 
              to="/#public-domain" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-mono text-sm">Back to Publications</span>
            </Link>

            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-xl bg-primary/20 text-primary">
                  <IconComponent className="w-8 h-8" />
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono uppercase tracking-wider">
                    {publication.subtitle}
                  </span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {publication.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {publication.description}
              </p>

              {/* Meta info for seminar */}
              {'forum' in publication && (
                <div className="flex flex-wrap gap-4 mt-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{publication.forum}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{publication.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{publication.duration}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Video embed for seminar */}
            {'videoUrl' in publication && publication.videoUrl && (
              <div className="mb-12">
                <a 
                  href={publication.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative rounded-xl overflow-hidden bg-secondary border border-border hover:border-primary/50 transition-all"
                >
                  <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <Play className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors ml-1" />
                      </div>
                      <span className="text-muted-foreground group-hover:text-primary transition-colors font-mono text-sm">
                        Watch on YouTube
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            )}

            {/* Content */}
            <div className="prose prose-invert max-w-none mb-12">
              <div className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-semibold mb-4 text-foreground">Overview</h2>
                <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                  {publication.content}
                </div>
              </div>
            </div>

            {/* External link for substack */}
            {'externalUrl' in publication && (
              <div className="mb-12">
                <a 
                  href={publication.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  <span>Visit Substack</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}

            {/* Suggested Readings */}
            {publication.suggestedReadings && publication.suggestedReadings.length > 0 && (
              <div className="p-6 rounded-xl bg-secondary/30 border border-border">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Suggested Readings
                </h2>
                <ul className="space-y-3">
                  {publication.suggestedReadings.map((reading, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary font-mono text-sm mt-0.5">{String(index + 1).padStart(2, '0')}</span>
                      <div>
                        <p className="font-medium text-foreground">{reading.title}</p>
                        <p className="text-sm text-muted-foreground">by {reading.author}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PublicationDetail;
