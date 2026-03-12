import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { MapPin, Clock, Star, Coffee } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&h=1080&fit=crop"
          alt="Café Pushkin Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
          <Star className="w-3 h-3 mr-1 fill-current" />
          4.8 Rating • Premium Experience
        </Badge>
        
        <h1 className="text-5xl md:text-7xl mb-6 text-white">
          Café Pushkin
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Experience the elegance of 18th-century Russia in the heart of Moscow. 
          Exquisite cuisine, artisanal coffee, and timeless atmosphere.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-white/90">
            <MapPin className="w-5 h-5" />
            <span>Tverskoy Boulevard, Central Moscow</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <Clock className="w-5 h-5" />
            <span>Open Daily 8:00 - 23:00</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-black hover:bg-white/90">
            <Coffee className="w-5 h-5 mr-2" />
            Reserve a Table
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            View Menu
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}