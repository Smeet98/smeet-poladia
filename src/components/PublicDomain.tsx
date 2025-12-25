import React from "react";

const publications = [
  {
    date: "2025-11-12",
    title: "Wholesale Electricity Markets and ERCOT: A Quantitative Trading Perspective",
    description: "Introducing the fundamentals of wholesale electricity markets, with a focus on ERCOT—the independent system operator managing Texas's power grid. The discussion links market design to operational dynamics, highlighting how price formation and congestion management create opportunities for generators, traders, and load-serving entities.",
    links: [
      { label: "Event", url: "https://www.xkdr.org/event/wholesale-electricity-markets-and-ercot-a-quantitative-trading-perspective-by-smeet-poladia" },
      { label: "YouTube", url: "https://youtu.be/W7g04Rfa-AU?si=V61Dl9W-LJnz9Dj7" },
      { label: "Presentation", url: "https://papers.xkdr.org/PDF/Wholesale_Electricity_Markets_and_ERCOT.pdf" },
      { label: "Cited in Business Standard", url: "https://www.business-standard.com/opinion/columns/only-a-new-price-system-can-solve-the-complexity-of-modern-electricity-125122100675_1.html" },
    ],
    status: "Published",
  },
];

const PublicDomain: React.FC = () => {
  // Sort publications by date descending (TypeScript-safe)
  const sortedPublications = publications.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section id="public-domain" className="py-24 md:py-32">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
              Insights
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              In the <span className="text-gradient">Public Domain</span>
            </h2>
          </div>

          {/* Vertical publication list */}
          <div className="flex flex-col gap-6">
            {sortedPublications.map((pub) => (
              <div
                key={pub.title}
                className="flex flex-col p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow"
              >
                <h3 className="text-lg font-semibold mb-2">{pub.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{pub.description}</p>

                {/* Multiple links */}
                <div className="flex flex-wrap gap-3 mt-2">
                  {pub.links.map((linkItem) => (
                    <a
                      key={linkItem.label}
                      href={linkItem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary underline hover:text-primary/80"
                    >
                      {linkItem.label}
                    </a>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-2 pt-2 border-t border-border">
                  <span className="text-sm text-muted-foreground">{pub.status}</span>
                  <span className="text-sm text-muted-foreground">{new Date(pub.date).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicDomain;
