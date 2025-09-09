import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const SocialConnect = () => {
  return (
    <section className="py-20 px-4 bg-gradient-card">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Join the Adventure
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Follow my journey across highways and discover new destinations. Connect with me on social media for daily updates and behind-the-scenes content.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-background/50 border-border/50 hover:shadow-glow transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-3xl">📷</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Instagram</h3>
              <p className="text-muted-foreground mb-6">
                Daily stories, stunning road photography, and behind-the-scenes moments from my rides.
              </p>
              <Button 
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
                onClick={() => window.open('https://instagram.com/im_musafirrr', '_blank')}
              >
                Follow @im_musafirrr
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-background/50 border-border/50 hover:shadow-glow transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-3xl">▶️</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">YouTube</h3>
              <p className="text-muted-foreground mb-6">
                Epic ride vlogs, motorcycle reviews, and adventure documentaries from the road.
              </p>
              <Button 
                className="w-full bg-red-600 hover:bg-red-700 text-white border-0"
                onClick={() => window.open('https://www.youtube.com/@im_musafirrr', '_blank')}
              >
                Subscribe Now
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12">
          <p className="text-lg text-muted-foreground">
            Ready to hit the road together? Let's make every mile count! 🏍️
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialConnect;