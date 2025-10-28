import { useState } from "react";
import { Calendar, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventDate: "",
    description: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Format the date from yyyy-mm-dd to "DD MMM YYYY" (e.g., "25 Dec 2025")
    let formattedDate = "";
    if (formData.eventDate) {
      const date = new Date(formData.eventDate + "T00:00:00");
      const day = date.getDate();
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const month = monthNames[date.getMonth()];
      const year = date.getFullYear();
      formattedDate = `${day} ${month} ${year}`;
    }

    // Encode the form data for Netlify submission
    const encodedData = new URLSearchParams({
      "form-name": "booking",
      ...formData,
      eventDate: formattedDate,
    }).toString();

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodedData,
      });

      toast({
        title: "Booking Request Sent!",
        description:
          "Thank you for your inquiry. I'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        eventDate: "",
        description: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="font-serif text-2xl text-foreground">
          Book Your Perfect Day
        </CardTitle>
        <p className="text-muted-foreground font-sans">
          Get in touch to discuss your event and confirm availability.
        </p>
      </CardHeader>
      <CardContent>
        <form
          name="booking"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* Netlify needs this hidden input to map the submission */}
          <input type="hidden" name="form-name" value="booking" />
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

          <div className="space-y-2">
            <Label
              htmlFor="eventDate"
              className="flex items-center gap-2 font-sans"
            >
              <Calendar className="h-4 w-4" />
              Event Date
            </Label>
            <Input
              id="eventDate"
              name="eventDate"
              type="date"
              value={formData.eventDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="font-sans">
              Tell me about your event
            </Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your wedding or event, preferred services (solo guitar & vocals, DJ, MC), venue details, and any special requests..."
              rows={4}
              required
            />
          </div>

          <Button type="submit" className="w-full font-sans">
            Send Booking Request
          </Button>

          <p className="text-xs text-muted-foreground text-center font-sans">
            By submitting this form, you agree to our{" "}
            <Link to="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;
