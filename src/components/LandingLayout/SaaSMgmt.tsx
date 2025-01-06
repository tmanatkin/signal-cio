import FAQSection from "./Shared/FAQ/FAQSection";
import HeroSection from "./Shared/HeroSection";
import ProblemSection from "./Shared/ProblemSection";

const SaasMgmt: React.FC = () => {
  return (
    <main>
      <HeroSection
        title="Let's End Rising SaaS Costs and Renewal Chaos"
        subtitle="Strategic SaaS Management that drives growth and saves costs."
        buttons={[
          { href: "/", name: "Watch Demo" },
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
      <ProblemSection
        title="Companies are getting blindsided by rising costs and the overhead of managing a growing
        number of SaaS apps."
        bubbles={[
          "Overspending on unused licenses and poorly structured agreements",
          "Shadow IT and ungoverned apps exposing your organization to risks",
          "Teams losing hours to SaaS renewals instead of driving growth"
        ]}
      />
      <FAQSection
        faqs={[
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
