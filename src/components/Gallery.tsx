import { Card } from "@/components/ui/card";

const Gallery = () => {
  const galleryItems = [
    {
      title: "Mountain Pass Adventure",
      description: "Conquering the highest peaks on two wheels",
      image: "🏔️"
    },
    {
      title: "Coastal Highway Cruise",
      description: "Following the shoreline to endless horizons",
      image: "🌊"
    },
    {
      title: "Desert Storm Rider",
      description: "Through dust and heat, the journey continues",
      image: "🏜️"
    },
    {
      title: "City Lights & Night Rides",
      description: "Urban exploration after midnight",
      image: "🌃"
    },
    {
      title: "Forest Trail Discovery",
      description: "Hidden paths through ancient woods",
      image: "🌲"
    },
    {
      title: "Sunrise Highway",
      description: "Chasing dawn on empty roads",
      image: "🌅"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Captured Moments
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every road has a story, every destination holds memories. Explore the highlights from my adventures across diverse landscapes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 group cursor-pointer overflow-hidden"
            >
              <div className="aspect-square bg-background/10 flex items-center justify-center text-6xl mb-4 group-hover:scale-105 transition-transform duration-300">
                {item.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            Want to see more? Follow my adventures on social media for the latest updates! 📸
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;