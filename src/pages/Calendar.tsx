import { useState, useEffect } from "react";
import {
  Lock,
  Calendar as CalendarIcon,
  Users,
  Clock,
  Phone,
  Settings,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BookingForm from "@/components/BookingForm";

const Calendar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if already authenticated in this session
    const authenticated = sessionStorage.getItem("calendar-authenticated");
    if (authenticated === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === import.meta.env.VITE_CALENDAR_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("calendar-authenticated", "true");
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-colour-2 flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
            <CardTitle className="font-serif text-2xl">
              Calendar Access
            </CardTitle>
            <p className="font-sans text-muted-foreground">
              This calendar is exclusively for wedding planners and booking
              agents. Please enter the access password to continue.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={error ? "border-destructive" : ""}
                />
                {error && (
                  <p className="text-destructive text-sm mt-1 font-sans">
                    {error}
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full font-sans">
                Access Calendar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-colour-2 pt-16 pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
            Planner Portal
          </h1>
          <p className="font-sans text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional calendar access for wedding planners and booking
            agents. View availability and coordinate bookings seamlessly.
          </p>
        </div>
      </section>

      {/* Calendar Integration Placeholder */}
      <section className="pb-16 pt-24 px-4 relative">
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[60px]"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              className="fill-colour-2"
            ></path>
          </svg>
        </div>
        <div className="container mx-auto">
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="font-serif text-3xl text-foreground mb-4">
                Live Availability Calendar
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Australia%2FSydney&showPrint=0&showTitle=0&showTabs=0&showCalendars=0&showTz=0&src=MWM2YTc5NWEzODIyNzhmMmRiMjNhNzMwM2MzNzAwYzQzN2U0YzMzOWIxNWFlYTA2N2E1ZDkxZTg0ZjRkZDJjYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23E8E2DB"
                style={{ borderWidth: 0 }}
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Professional Support */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="font-serif text-3xl text-center text-foreground mb-12">
            Professional Booking Support
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-serif text-lg font-semibold mb-2">
                  Planner Collaboration
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  Seamless, reliable co-ordination with planners and other
                  vendors
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-serif text-lg font-semibold mb-2">
                  Responsive Communication
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  Correspondence via email, phone and SMS for quick responses
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Settings className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-serif text-lg font-semibold mb-2">
                  Flexible Logistics
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  Floor space footprint configurable for almost any venue
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Package className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-serif text-lg font-semibold mb-2">
                  One Stop Shop
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  Options to include PA, microphone, mixer and more
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-colour-2">
        <div className="container mx-auto">
          <h2 className="font-serif text-3xl text-center text-foreground mb-12">
            Frequently Asked Questions
          </h2>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="space-requirements">
                <AccordionTrigger className="font-serif text-lg text-left">
                  What are the floor space requirements?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground">
                  A minimum of 2m x 2m flat floor space is required for
                  performances. The area must be level and accessible for
                  equipment transport.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="power-requirements">
                <AccordionTrigger className="font-serif text-lg text-left">
                  What power and electrical requirements are needed?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground">
                  One power point is sufficient for acoustic performances. DJ
                  and PA setups require two power points to prevent overloading
                  a single circuit. All equipment is professionally maintained
                  and electrically tested.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="shelter-weather">
                <AccordionTrigger className="font-serif text-lg text-left">
                  Is shelter required for outdoor events?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground">
                  Shelter is essential for outdoor performances to protect
                  equipment and maintain acoustic quality. A marquee, gazebo, or
                  covered area with wind protection is required. We can organize
                  our own gazebo if needed (potential additional cost).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="setup-time">
                <AccordionTrigger className="font-serif text-lg text-left">
                  How much setup time is required?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground">
                  Setup takes 45-60 minutes for standard performances, or 90
                  minutes for PA systems and complex logistics. Sound checks are
                  included in setup time. Arrival times are coordinated with
                  venue access.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="break-requirements">
                <AccordionTrigger className="font-serif text-lg text-left">
                  What break and refreshment arrangements are needed?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground">
                  Break arrangements are very flexible and open for discussion
                  based on what the couple prefers. We're experienced with
                  playing for extended periods and can accommodate various
                  scheduling preferences. Water and light refreshments are
                  welcomed but not required.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="equipment-included">
                <AccordionTrigger className="font-serif text-lg text-left">
                  What equipment and services are included?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground">
                  Equipment includes PA speakers, Vox AV60 amp, microphone,
                  Tanglewood acoustic guitar, and a range of electric guitars
                  (Epiphone, Fender, Revolta). Services are as outlined in the
                  booking packages. All equipment is professional-grade.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="booking-timeline">
                <AccordionTrigger className="font-serif text-lg text-left">
                  How far in advance should bookings be made?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground">
                  Bookings are recommended at least 3 months in advance to
                  secure preferred dates and allow time for planning. However,
                  we can be flexible with later bookings and accommodate
                  last-minute requests when possible. A deposit confirms the
                  booking.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="song-customization">
                <AccordionTrigger className="font-serif text-lg text-left">
                  Can specific songs be learned for events?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground">
                  We're happy to learn a number of songs as outlined in the
                  package options, and open to learning additional songs upon
                  request and review. The repertoire spans classical,
                  contemporary, jazz standards, and popular music.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="pt-24 pb-16 px-4 bg-foreground relative">
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[60px]"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              className="fill-colour-2"
            ></path>
          </svg>
        </div>
        <div className="container mx-auto">
          <BookingForm />
        </div>
      </section>
    </div>
  );
};

export default Calendar;
