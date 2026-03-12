import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FeaturesSection } from './components/FeaturesSection';
import { MenuSection } from './components/MenuSection';
import { ContactSection } from './components/ContactSection';
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { Coffee, Heart, Star } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Menu Section */}
      <MenuSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-current text-yellow-400" />
                ))}
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl mb-6">
              Experience Moscow's Finest Café
            </h2>
            
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied guests who have made Café Pushkin their favorite 
              destination for exceptional dining and unforgettable moments in Moscow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Coffee className="w-5 h-5 mr-2" />
                Reserve Your Table
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Heart className="w-5 h-5 mr-2" />
                Gift a Friend
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Coffee className="w-8 h-8 text-primary" />
                <h3 className="text-2xl">Café Pushkin</h3>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Moscow's premier dining destination since 1999. Experience the perfect blend 
                of Russian tradition and international cuisine in the heart of the city.
              </p>
              <div className="flex gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">4.8/5 on Google</span>
              </div>
            </div>
            
            <div>
              <h4 className="mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#menu" className="hover:text-foreground">Menu</a></li>
                <li><a href="#reservations" className="hover:text-foreground">Reservations</a></li>
                <li><a href="#events" className="hover:text-foreground">Private Events</a></li>
                <li><a href="#about" className="hover:text-foreground">About Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Tverskoy Boulevard, 26А</li>
                <li>Moscow, 125009</li>
                <li>+7 (495) 739-0033</li>
                <li>info@cafepushkin.ru</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Café Pushkin. All rights reserved. Made with ❤️ in Moscow.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}