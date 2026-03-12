import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Coffee, Users, Award, Heart } from 'lucide-react';

export function AboutSection() {
  const highlights = [
    {
      icon: Coffee,
      title: "Artisanal Coffee",
      description: "Expertly roasted beans from the finest coffee regions"
    },
    {
      icon: Users,
      title: "Historic Atmosphere",
      description: "18th-century elegance meets modern comfort"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized as Moscow's finest dining experience"
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every dish crafted with passion and tradition"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge variant="outline" className="mb-4">
              Est. 1999
            </Badge>
            <h2 className="text-4xl md:text-5xl mb-6">
              A Timeless Moscow Institution
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nestled in the heart of Moscow's historic Tverskoy district, Café Pushkin has been 
              a beacon of Russian hospitality and culinary excellence for over two decades. Our 
              18th-century inspired interior, combined with contemporary culinary techniques, 
              creates an unforgettable dining experience.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From our signature Russian breakfast to our internationally acclaimed dinner menu, 
              every dish tells a story of tradition, innovation, and the timeless spirit of Moscow.
            </p>
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Card key={index} className="border-none shadow-none bg-muted/30">
                  <CardContent className="p-4">
                    <highlight.icon className="w-8 h-8 text-primary mb-2" />
                    <h4 className="mb-2">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&h=500&fit=crop"
                  alt="Café Interior"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=400&h=300&fit=crop"
                  alt="Coffee Preparation"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4 mt-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop"
                  alt="Delicious Food"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1442975631115-c4f7b05b8a2c?w=400&h=500&fit=crop"
                  alt="Cozy Atmosphere"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}