import { Shield, Mail, Lock, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-colour-grey to-colour-white py-16 px-4">
        <div className="container mx-auto text-center">
          <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="font-sans text-xl text-muted-foreground max-w-2xl mx-auto">
            Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            
            {/* Information We Collect */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl flex items-center gap-3">
                  <Eye className="h-6 w-6 text-primary" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-sans text-muted-foreground">
                <p>
                  When you submit a booking request through our website, we collect the following information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your full name</li>
                  <li>Email address</li>
                  <li>Event date and details</li>
                  <li>Description of your wedding or event requirements</li>
                  <li>Any special requests or preferences you share with us</li>
                </ul>
                <p>
                  We also automatically collect basic technical information such as your IP address, 
                  browser type, and pages visited to improve our website performance and user experience.
                </p>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-sans text-muted-foreground">
                <p>
                  Your personal information is used exclusively for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Responding to your booking inquiries and event planning needs</li>
                  <li>Coordinating wedding music services and event details</li>
                  <li>Sending contract information and booking confirmations</li>
                  <li>Providing customer support and answering your questions</li>
                  <li>Improving our services based on your feedback</li>
                </ul>
                <p>
                  We will never use your information for unsolicited marketing or share it with third parties 
                  for their marketing purposes without your explicit consent.
                </p>
              </CardContent>
            </Card>

            {/* Information Protection */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl flex items-center gap-3">
                  <Lock className="h-6 w-6 text-primary" />
                  How We Protect Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-sans text-muted-foreground">
                <p>
                  We take the security of your personal information seriously and implement appropriate measures to protect it:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Secure data transmission using industry-standard encryption</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                  <li>Regular security reviews and updates to our systems</li>
                  <li>Secure storage of all client information and communications</li>
                </ul>
                <p>
                  While we strive to protect your personal information, no method of transmission over the internet 
                  is 100% secure. We encourage you to contact us with any security concerns.
                </p>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">
                  Information Sharing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-sans text-muted-foreground">
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following limited circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>When required by law or legal process</li>
                  <li>To protect our rights, property, or safety, or that of others</li>
                  <li>With trusted service providers who assist in operating our website or conducting our business, under strict confidentiality agreements</li>
                  <li>With wedding planners or venue coordinators when you explicitly request us to do so for your event</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cookies and Tracking */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">
                  Cookies and Website Analytics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-sans text-muted-foreground">
                <p>
                  Our website may use cookies and similar tracking technologies to enhance your browsing experience:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Essential cookies for website functionality</li>
                  <li>Analytics cookies to understand how visitors use our site</li>
                  <li>Performance cookies to improve loading times and user experience</li>
                </ul>
                <p>
                  You can control cookie preferences through your browser settings. Disabling cookies may affect some website functionality.
                </p>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">
                  Your Privacy Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-sans text-muted-foreground">
                <p>
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Request access to the personal information we hold about you</li>
                  <li>Request correction of any inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information (subject to legal obligations)</li>
                  <li>Withdraw consent for processing your information at any time</li>
                  <li>Request a copy of your information in a portable format</li>
                </ul>
                <p>
                  To exercise any of these rights, please contact us using the information provided below.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-sans text-muted-foreground">
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-medium text-foreground">Robbie Gyngell - Wedding Musician</p>
                  <p>Email: Available through booking form submission</p>
                  <p>Response Time: Within 24 hours</p>
                </div>
                <p className="text-sm">
                  This Privacy Policy was last updated on {new Date().toLocaleDateString()} and may be updated periodically to reflect changes in our practices or legal requirements.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;