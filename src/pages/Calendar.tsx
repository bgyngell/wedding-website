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
import BookingForm from "@/components/BookingForm";
import { Helmet } from "react-helmet-async";

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

  return (
    <>
      <Helmet>
        <title>Availability Calendar | Robbie Gyngell</title>
        <meta
          name="description"
          content="Wedding planners and booking agents can view live availability and coordinate dates in the planner portal."
        />
        <link
          rel="canonical"
          href="https://robbiegyngellweddings.com/calendar"
        />
        <meta
          property="og:title"
          content="Availability Calendar | Robbie Gyngell"
        />
        <meta
          property="og:description"
          content="Wedding planners and booking agents can view live availability and coordinate dates in the planner portal."
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-colour-2 pt-16 pb-12 px-4">
          <div className="container mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
              Availability Calendar
            </h1>
            <p className="font-sans text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional calendar access for wedding planners and booking
              agents. View availability and coordinate bookings seamlessly.
            </p>
          </div>
        </section>

        {/* Calendar Integration */}
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
                {!isAuthenticated ? (
                  <div className="p-8 flex flex-col items-center justify-center min-h-[400px]">
                    <Lock className="h-16 w-16 text-primary mb-6" />
                    <h3 className="font-serif text-2xl text-foreground mb-4">
                      Calendar Access Required
                    </h3>
                    <p className="font-sans text-muted-foreground text-center mb-8 max-w-md">
                      This calendar is exclusively for wedding planners and
                      booking agents. Please enter the access password to view
                      availability.
                    </p>
                    <form
                      onSubmit={handleLogin}
                      className="space-y-4 w-full max-w-sm"
                    >
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
                  </div>
                ) : (
                  <>
                    <iframe
                      title="Live availability calendar"
                      src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Australia%2FSydney&showPrint=0&showTitle=0&showTabs=0&showCalendars=0&showTz=0&src=cm9iYmllLmcubXVzaWNzZXJ2aWNlc0BnbWFpbC5jb20&color=%23E8E2DB"
                      style={{ borderWidth: 0 }}
                      width="100%"
                      height="600"
                      frameBorder="0"
                      scrolling="no"
                    ></iframe>
                    <div className="p-4 bg-muted/50 border-t">
                      <p className="font-sans text-sm text-muted-foreground text-center">
                        <strong>Please note:</strong> Available dates shown on
                        this calendar do not guarantee availability. All
                        bookings must be confirmed through direct contact and
                        formal booking process.
                      </p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Professional Support */}
        <section className="py-16 px-4 bg-colour-2">
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
    </>
  );
};

export default Calendar;
