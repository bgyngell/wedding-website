import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Music,
  Clock,
  Heart,
  Star,
  Mic,
  Volume2,
  User,
  Mail,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import BookingForm from "@/components/BookingForm";

const Pricing = () => {
  const [hasSubmittedForm, setHasSubmittedForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user has already submitted the form in this session
    const submitted = sessionStorage.getItem("pricing-form-submitted");
    if (submitted === "true") {
      setHasSubmittedForm(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Encode the form data for Netlify submission
    const encodedData = new URLSearchParams({
      "form-name": "pricing-access",
      ...formData,
    }).toString();

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodedData,
      });

      setHasSubmittedForm(true);
      sessionStorage.setItem("pricing-form-submitted", "true");

      toast({
        title: "Access Granted!",
        description: "Thank you! You can now view our pricing packages.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const packages = [
    {
      id: 1,
      name: "Ceremony Acoustic Package",
      duration: "1-3hrs",
      price: "$750",
      icon: Heart,
      color: "bg-card border-border",
      accentColor: "text-primary",
      features: [
        "Playing atmospheric background music from when guests begin to arrive to when they leave for reception",
        "Will learn 1 song guaranteed (as standard but happy to talk about others) for walking down the aisle",
        "Inclusive of background music during post ceremony photos if desired and at ceremony location, to entertain guests waiting",
      ],
    },
    {
      id: 2,
      name: "Reception Canapés Acoustic Package",
      duration: "1-3hrs",
      price: "$750",
      icon: Music,
      color: "bg-card border-border",
      accentColor: "text-primary",
      features: [
        "Post-ceremony background music from when guests arrive at reception location",
        "Will learn 1 song guaranteed for first dance",
        "Inclusive of live acoustic dance floor music for remainder of time (in absence of other entertainment) if desired",
      ],
    },
    {
      id: 3,
      name: "Ceremony + Reception Canapés Package",
      duration: "4-5hrs",
      price: "$1,300",
      icon: Star,
      color: "bg-card border-border",
      accentColor: "text-primary",
      features: [
        "Inclusive of all features from Ceremony acoustic package and Reception canapés acoustic package",
        "Will learn 2 songs guaranteed (aisle walk and first dance)",
        "Happy to relocate + set up at different location for ceremony and reception",
      ],
    },
    {
      id: 4,
      name: "All Day Acoustic Package",
      duration: "7-8hrs",
      price: "$2,100",
      icon: Clock,
      color: "bg-card border-border",
      accentColor: "text-primary",
      features: [
        "Inclusive of all acoustic package features",
        "Will learn 3 songs guaranteed",
        "Inclusive of up tempo acoustic covers of dance floor music for guests to dance to",
      ],
    },
    {
      id: 5,
      name: "All Day Acoustic + DJ (All Day All Night) Package",
      duration: "10hrs",
      price: "$2,500",
      icon: Volume2,
      color: "bg-card border-border",
      accentColor: "text-primary",
      popular: true,
      features: [
        "Additional DJ services for dance floor",
        "Flexible change over times from acoustic music",
        "Song / playlist requests happily taken",
      ],
    },
    {
      id: 6,
      name: "All Day All Night + MC Package",
      duration: "10hrs",
      price: "$3,000",
      icon: Mic,
      color: "bg-card border-border",
      accentColor: "text-primary",
      premium: true,
      features: [
        "Inclusive of all package features",
        "Addition of MC services from as early as the ceremony to the end of the night",
        "Liaising with couple and wedding planner etc on the running of the evening prior to the event",
        "Range of MC style as preferred (professional, humorous, charismatic, eloquent etc)",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-colour-2 pt-16 pb-4 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
            Wedding Music
            <span className="block text-primary">Packages</span>
          </h1>
          <p className="font-sans text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose the perfect musical experience for your special day. All
            packages include professional equipment and can be customized to
            your needs.
          </p>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="pb-16 pt-24 px-4 bg-background relative">
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

        <div className="container mx-auto mt-8">
          {!hasSubmittedForm ? (
            <Card className="max-w-2xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="font-serif text-3xl text-foreground mb-4">
                  View Pricing Information
                </CardTitle>
                <p className="font-sans text-muted-foreground max-w-md mx-auto">
                  To view our wedding music package pricing, please provide your
                  contact details below.
                </p>
              </CardHeader>
              <CardContent>
                <form
                  name="pricing-access"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Netlify needs this hidden input to map the submission */}
                  <input
                    type="hidden"
                    name="form-name"
                    value="pricing-access"
                  />
                  {/* Honeypot field for spam bots */}
                  <input type="hidden" name="bot-field" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="flex items-center gap-2 font-sans"
                      >
                        <User className="h-4 w-4" />
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="flex items-center gap-2 font-sans"
                      >
                        <Mail className="h-4 w-4" />
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full font-sans"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "View Pricing Packages"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center font-sans">
                    Your data will be handled in accordance with our{" "}
                    <Link
                      to="/privacy"
                      className="text-primary hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <Card
                  key={pkg.id}
                  className={`relative ${pkg.color} transition-all duration-300 hover:bg-secondary hover:shadow-lg`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-3 py-1 pointer-events-none">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  {pkg.premium && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-foreground text-background px-3 py-1 pointer-events-none">
                        Premium
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-4">
                    <pkg.icon
                      className={`h-12 w-12 ${pkg.accentColor} mx-auto mb-4`}
                    />
                    <CardTitle className="font-serif text-xl font-semibold text-foreground mb-2">
                      {pkg.name}
                    </CardTitle>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Clock className={`h-4 w-4 ${pkg.accentColor}`} />
                      <span className="font-sans text-sm text-muted-foreground">
                        {pkg.duration}
                      </span>
                    </div>
                    <div className={`text-3xl font-bold ${pkg.accentColor}`}>
                      {pkg.price}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start text-sm font-sans text-muted-foreground"
                        >
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="pt-16 pb-4 px-4 bg-colour-2">
        <div className="container mx-auto text-center">
          <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
            Need Something Custom?
          </h2>
          <p className="font-sans text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every wedding is unique. Let's discuss how we can tailor these
            packages to perfectly match your vision and create the soundtrack
            for your special day.
          </p>
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

export default Pricing;
