import FAQSection from "./Shared/FAQ/FAQSection";
import HeroSection from "./Shared/HeroSection";
import ProblemSection from "./Shared/ProblemSection";

const SaasMgmt: React.FC = () => {
  return (
    <main>
      <HeroSection
        title="Let's End IT Chaos and Fragmentation"
        subtitle="Strategic IT Leadership to Fuel Your Growth."
        buttons={[
          { href: "/", name: "Watch Demo" },
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
        title="Growing organizations struggle to manage IT costs and inefficiencies without strategic leadership, risking stunted growth and operational risks."
        bubbles={[
          "Misaligned technology investments waste money and erode margins.",
          "Lack of visibility over IT spend drives inefficiencies and rising costs.",
          "Fragmented systems and poor governance hinder effective scaling."
        ]}
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
          }
        ]}
      />
    </main>
  );
};

export default SaasMgmt;
