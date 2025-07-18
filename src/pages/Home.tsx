import { Play, Music, Mic, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BookingForm from "@/components/BookingForm";

const Home = () => {
  const services = [
    {
      icon: Music,
      title: "Solo Guitar & Vocals",
      description: "Intimate acoustic performances with heartfelt vocals, perfect for ceremonies and cocktail hours. Available with or without PA system.",
      features: ["Acoustic guitar", "Professional vocals", "Song requests welcome", "Optional PA system"]
    },
    {
      icon: Users,
      title: "DJ Services",
      description: "Curated playlists and seamless mixing to keep your celebration flowing. From dinner background music to dance floor anthems.",
      features: ["Professional sound system", "Custom playlists", "Requests on the night", "Seamless transitions"]
    },
    {
      icon: Mic,
      title: "MC Services",
      description: "Professional hosting to guide your special day. Warm, engaging, and perfectly timed announcements and introductions.",
      features: ["Professional hosting", "Timeline coordination", "Microphone provision", "Seamless event flow"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dusty-rose via-cream-white to-dusty-rose py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
            Your Perfect Wedding
            <span className="block text-primary">Soundtrack</span>
          </h1>
          <p className="font-sans text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Creating magical musical moments for your special day with professional guitar, vocals, DJ sets, and MC services.
          </p>
          <Button size="lg" className="font-sans text-lg px-8 py-3">
            Book Your Date
          </Button>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-semibold text-foreground mb-4">
              Experience the Magic
            </h2>
            <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
              Watch Robbie perform and see why couples choose him for their most important day.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Play className="h-20 w-20 text-primary mx-auto mb-4" />
                <p className="font-sans text-muted-foreground">
                  Performance video coming soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-semibold text-foreground mb-6">
                Meet Robbie
              </h2>
              <div className="space-y-4 font-sans text-muted-foreground">
                <p>
                  Born and raised in the coastal town of Thirroul, Robbie discovered his passion for music at an early age. The sound of waves and the laid-back beach culture deeply influenced his musical style, creating a unique blend of warmth and sophistication.
                </p>
                <p>
                  After completing his Music Degree at the University of Wollongong, Robbie embarked on a professional musical journey that has spanned over a decade. His experience ranges from intimate solo performances to dynamic band collaborations, giving him the versatility to adapt to any wedding atmosphere.
                </p>
                <p>
                  As both a solo artist and accomplished band member, Robbie has performed at hundreds of weddings and events throughout Australia. His deep understanding of how music shapes special moments makes him the perfect choice for couples seeking that magical soundtrack to their love story.
                </p>
                <p className="font-medium text-foreground">
                  "Music has the power to transform moments into memories. I'm honored to be part of your special day."
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/60395de9-eb19-46f9-81c3-375ca13b178b.png" 
                alt="Robbie Gyngell performing with guitar and microphone"
                className="aspect-square object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-semibold text-foreground mb-4">
              Wedding Services
            </h2>
            <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
              Choose any combination of services to create your perfect wedding soundtrack. 
              All services available with or without professional PA system.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="font-sans text-muted-foreground mb-4 flex-grow">
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-sm font-sans text-muted-foreground">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-dusty-rose to-cream-white">
        <div className="container mx-auto">
          <BookingForm />
        </div>
      </section>
    </div>
  );
};

export default Home;