import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";
import BookingForm from "@/components/BookingForm";

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Robbie Gyngell</title>
        <meta
          name="description"
          content="Find answers to common questions about wedding music services, equipment requirements, booking process, and performance details."
        />
        <link rel="canonical" href="https://robbiegyngellweddings.com/faq" />
        <meta
          property="og:title"
          content="Frequently Asked Questions | Robbie Gyngell"
        />
        <meta
          property="og:description"
          content="Find answers to common questions about wedding music services, equipment requirements, booking process, and performance details."
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-colour-2 pt-16 pb-12 px-4">
          <div className="container mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="font-sans text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about logistics, setup requirements,
              and performance details.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
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
                    and PA setups require two power points to prevent
                    overloading a single circuit. All equipment is
                    professionally maintained and electrically tested.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="shelter-weather">
                  <AccordionTrigger className="font-serif text-lg text-left">
                    Is shelter required for outdoor events?
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-muted-foreground">
                    Shelter is essential for outdoor performances to protect
                    equipment and maintain acoustic quality. A marquee, gazebo,
                    or covered area with wind protection is required. We can
                    organize our own gazebo if needed (potential additional
                    cost).
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="setup-time">
                  <AccordionTrigger className="font-serif text-lg text-left">
                    How much setup time is required?
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-muted-foreground">
                    Setup takes ~30 minutes for standard performances including
                    PA equipment and sound check. Arrival times are coordinated
                    with venue access.
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
                    Equipment includes PA speakers, DJ decks, Macbook laptop,
                    Vox AV60 amp, microphone, Tanglewood acoustic guitar, and a
                    range of electric guitars (Epiphone, Fender, Revolta).
                    Services are as outlined in the booking packages. All
                    equipment is professional-grade.
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
                    request and review. The repertoire spans pop, contemporary,
                    indie, folk, rock, soul, country and more.
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
                className="fill-background"
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

export default FAQ;
