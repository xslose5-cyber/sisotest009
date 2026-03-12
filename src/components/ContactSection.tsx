import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Navigation,
  Calendar,
  Instagram,
  Facebook
} from 'lucide-react';

export function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Tverskoy Boulevard, 26А", "Moscow, 125009", "Russia"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+7 (495) 739-0033", "+7 (495) 739-0034"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["reservations@cafepushkin.ru", "info@cafepushkin.ru"]
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Monday - Sunday", "8:00 AM - 11:00 PM", "Last orders: 10:30 PM"]
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", handle: "@cafepushkin_moscow" },
    { icon: Facebook, name: "Facebook", handle: "Café Pushkin Moscow" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Visit Us
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-6">
            Location & Contact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Located in the heart of Moscow's Tverskoy district, we're easily accessible 
            by metro, taxi, or foot. We look forward to welcoming you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{info.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button size="lg" className="w-full">
                  <Calendar className="w-5 h-5 mr-2" />
                  Make Reservation
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  <Navigation className="w-5 h-5 mr-2" />
                  Get Directions
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4 justify-center md:justify-start">
                {socialLinks.map((social, index) => (
                  <Button key={index} variant="outline" size="sm">
                    <social.icon className="w-4 h-4 mr-2" />
                    {social.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-muted h-96 flex items-center justify-center relative">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground mb-4">
                    Click to view our location on Google Maps
                  </p>
                  <Button>
                    <Navigation className="w-4 h-4 mr-2" />
                    Open in Maps
                  </Button>
                </div>
                
                {/* Address overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <Card className="bg-white/95 backdrop-blur">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <div>
                          <p className="font-medium">Café Pushkin</p>
                          <p className="text-sm text-muted-foreground">
                            Tverskoy Boulevard, 26А, Moscow
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Metro Information */}
        <Card className="mt-12">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-xl mb-4">Public Transportation</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Badge variant="secondary" className="mb-2">Metro</Badge>
                  <p className="text-sm">Pushkinskaya Station (5 min walk)</p>
                </div>
                <div>
                  <Badge variant="secondary" className="mb-2">Bus</Badge>
                  <p className="text-sm">Routes 15, 31, 39 (Stop: Tverskoy Blvd)</p>
                </div>
                <div>
                  <Badge variant="secondary" className="mb-2">Taxi</Badge>
                  <p className="text-sm">Uber, Yandex, Gett available</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}