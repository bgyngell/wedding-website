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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare form data for Netlify Forms
      const formDataForSubmission = new FormData();
      formDataForSubmission.append("form-name", "booking-request");
      formDataForSubmission.append("name", formData.name);
      formDataForSubmission.append("email", formData.email);
      formDataForSubmission.append("eventDate", formData.eventDate);
      formDataForSubmission.append("description", formData.description);
      formDataForSubmission.append(
        "subject",
        `New booking inquiry from ${formData.name}`
      );

      // Submit to Netlify Forms
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataForSubmission as any).toString(),
      });

      if (response.ok) {
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
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description:
          "There was a problem sending your request. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
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
    <>
      {/* Hidden form for Netlify form detection */}
      <form
        name="booking-request"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        style={{ display: "none" }}
      >
        <input type="hidden" name="form-name" value="booking-request" />
        <input type="hidden" name="subject" />
        <input name="name" type="text" />
        <input name="email" type="email" />
        <input name="eventDate" type="date" />
        <textarea name="description"></textarea>
        <input name="bot-field" type="text" />
      </form>

      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="font-serif text-2xl text-foreground">
            Book Your Perfect Day
          </CardTitle>
          <p className="text-muted-foreground font-sans">
            Let's create magical moments together. Tell me about your special
            event.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Hidden inputs for Netlify Forms */}
            <input type="hidden" name="form-name" value="booking-request" />
            <input
              type="hidden"
              name="subject"
              value={`New booking inquiry from ${formData.name}`}
            />

            {/* Honeypot field for spam protection */}
            <div style={{ display: "none" }}>
              <label>
                Don't fill this out if you're human:
                <input name="bot-field" type="text" />
              </label>
            </div>

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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              />
            </div>

            <Button
              type="submit"
              className="w-full font-sans"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Booking Request"}
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
    </>
  );
};

export default BookingForm;
