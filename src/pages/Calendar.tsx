import { useState, useEffect } from "react";
import { Lock, Calendar as CalendarIcon, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
            Booking Calendar
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
              <p className="font-sans text-muted-foreground">
                Integration with Calendly, Acuity Scheduling, or similar booking
                platform coming soon.
              </p>
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

      {/* Professional Features */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="font-serif text-3xl text-center text-foreground mb-12">
            Professional Booking Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <CalendarIcon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-serif text-lg font-semibold mb-2">
                  Live Availability
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  Real-time calendar showing available dates and time slots
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-serif text-lg font-semibold mb-2">
                  Instant Confirmation
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  Immediate booking confirmation with automated email receipts
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-serif text-lg font-semibold mb-2">
                  Client Management
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  Streamlined communication between planners, agents, and
                  clients
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Lock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-serif text-lg font-semibold mb-2">
                  Secure Access
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  Password-protected professional portal for Authorised users
                  only
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-colour-2">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-foreground mb-6">
              Professional Booking Support
            </h2>
            <p className="font-sans text-muted-foreground mb-8">
              For immediate assistance with booking coordination, contract
              details, or special arrangement discussions, please don't hesitate
              to reach out directly.
            </p>
            <div className="space-y-4 font-sans">
              <p className="text-muted-foreground">
                <strong>Direct Line:</strong> Available for wedding planners and
                agents
              </p>
              <p className="text-muted-foreground">
                <strong>Response Time:</strong> Within 2 hours during business
                hours
              </p>
              <p className="text-muted-foreground">
                <strong>Booking Window:</strong> 12-18 months advance booking
                recommended
              </p>
            </div>
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
