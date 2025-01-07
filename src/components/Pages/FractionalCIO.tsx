import FAQSection from "../FAQ/FAQSection";
import HeroSection from "../HeroSection";
import ProblemSection from "../ProblemSection";

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
      <ProblemSection
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
      <FAQSection
        faqs={[
          {
            question: "What results can I expect?",
            answer:
              "Clients typically see up to a 30% reduction in IT costs and improved governance readiness."
          },
          {
            question: "How long does it take?",
            answer: "Our program delivers measurable results within 90 days."
          },
          {
            question: "Who is this program for?",
            answer:
              "Mid-sized tech companies scaling rapidly or preparing for an IPO or acquisition."
          },
          {
            question: "What makes your service different?",
            answer:
              "Over 20 years of experience and a tailored approach ensure actionable, high-impact results."
          },
          {
            question: "Is there a guarantee?",
            answer: "We guarantee measurable improvements in IT cost efficiency and alignment."
          },
          {
            question: "How do we get started?",
            answer:
              "Begin with our IT Spend and Alignment Assessment to identify immediate opportunities."
          },
          {
            question: "What kind of savings can we expect?",
            answer: "Our clients typically see a 10%-30% reduction in SaaS spend."
          },
          {
            question: "How long does the program take?",
            answer: "Just 60 days to implement the full framework and start saving."
          },
          {
            question: "What size companies do you work with?",
            answer: "We specialize in SaaS companies scaling beyond 1,000 employees."
          },
          {
            question: "What makes you different?",
            answer: "Over 10 years of experience and tailored solutions ensure high-impact results"
          },
          {
            question: "Is there a guarantee?",
            answer: "Yes, we guarantee a 10%-30% reduction in SaaS spend."
          },
          {
            question: "How do we get started?",
            answer: "Begin with a complimentary SaaS maturity assessment."
          }
        ]}
      />
    </main>
  );
};

export default SaasMgmt;
