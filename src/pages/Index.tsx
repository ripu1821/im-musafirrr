import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import SocialConnect from "@/components/SocialConnect";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="connect">
          <SocialConnect />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-card border-t border-border/50 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            im_musafirrr
          </div>
          <p className="text-muted-foreground mb-6">
            Adventure awaits on every road. Join the journey.
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://instagram.com/im_musafirrr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Instagram
            </a>
            <a 
              href="https://www.youtube.com/@im_musafirrr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              YouTube
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-border/30 text-sm text-muted-foreground">
            © 2024 im_musafirrr. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
