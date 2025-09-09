import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            The Journey Begins
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every mile tells a story, every road leads to new adventures. Welcome to my world of endless highways and unforgettable moments.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏍️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Passion for Riding</h3>
              <p className="text-muted-foreground">
                Born to ride, living to explore. Every journey is a new chapter in the book of adventure.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📸</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Content Creation</h3>
              <p className="text-muted-foreground">
                Capturing the essence of freedom and sharing the beauty of the road with fellow travelers.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Endless Exploration</h3>
              <p className="text-muted-foreground">
                From mountain passes to coastal highways, discovering the world one mile at a time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;