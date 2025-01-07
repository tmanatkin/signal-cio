import CardSection from "../Sections/CardSection";
import HeroSection from "../Sections/HeroSection";
import BubbleSection from "../Sections/BubbleSection";

const SaasMgmt: React.FC = () => {
  return (
    <main>
      <HeroSection
        title="Transforming IT Uncertainty into Predictability, Reliability, and Efficiency"
        subtitle="Strategic IT Leadership to Fuel Your Growth."
        buttons={[
          { href: "/signal-cio/", name: "Learn More" },
          {
            href: "https://signalcio.pipedrive.com/scheduler/lpKWaqfo/saas-management-consultation",
            name: "Book a Call",
            target: "_blank"
          }
        ]}
        image={{
          src: "/signal-cio/images/thinking.png",
          alt: "Businessman thinking about managing the chaos of IT"
        }}
        reverse
      />
      <BubbleSection
        title="Growing organizations struggle to manage IT costs and inefficiencies without strategic leadership, putting at risk growth and operational excellence."
        bubbles={[
          "Misaligned technology investments waste money and erode margins.",
          "Lack of visibility over IT spend drives inefficiencies and rising costs.",
          "Fragmented systems and poor governance hinder effective scaling."
        ]}
      />
      <HeroSection
        title="Let's End Rising SaaS Costs and Renewal Chaos"
        subtitle="Strategic SaaS Management that drives growth and saves costs."
        buttons={[
          { href: "/signal-cio/", name: "Watch Demo" },
          {
            href: "https://signalcio.pipedrive.com/scheduler/lpKWaqfo/saas-management-consultation",
            name: "Book a Call",
            target: "_blank"
          }
        ]}
        image={{
          src: "/signal-cio/images/filter.png",
          alt: "SaaS logos filtering into an organized system"
        }}
      />
      <CardSection
        title="FAQs"
        cards={[
          {
            title: "What results can I expect?",
            body: "Clients typically see up to a 30% reduction in IT costs and improved governance readiness."
          },
          {
            title: "How long does it take?",
            body: "Our program delivers measurable results within 90 days."
          },
          {
            title: "Who is this program for?",
            body: "Mid-sized tech companies scaling rapidly or preparing for an IPO or acquisition."
          },
          {
            title: "What makes your service different?",
            body: "Over 20 years of experience and a tailored approach ensure actionable, high-impact results."
          },
          {
            title: "Is there a guarantee?",
            body: "We guarantee measurable improvements in IT cost efficiency and alignment."
          },
          {
            title: "How do we get started?",
            body: "Begin with our IT Spend and Alignment Assessment to identify immediate opportunities."
          },
          {
            title: "What kind of savings can we expect?",
            body: "Our clients typically see a 10%-30% reduction in SaaS spend."
          },
          {
            title: "How long does the program take?",
            body: "Just 60 days to implement the full framework and start saving."
          },
          {
            title: "What size companies do you work with?",
            body: "We specialize in SaaS companies scaling beyond 1,000 employees."
          },
          {
            title: "What makes you different?",
            body: "Over 10 years of experience and tailored solutions ensure high-impact results"
          },
          {
            title: "Is there a guarantee?",
            body: "Yes, we guarantee a 10%-30% reduction in SaaS spend."
          },
          {
            title: "How do we get started?",
            body: "Begin with a complimentary SaaS maturity assessment."
          }
        ]}
      />
    </main>
  );
};

export default SaasMgmt;
