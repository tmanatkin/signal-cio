import CardSection from "../Sections/CardSection";
import HeroSection from "../Sections/HeroSection";
import BubbleSection from "../Sections/BubbleSection";

const SaasMgmt: React.FC = () => {
  return (
    <main>
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
      <BubbleSection
        title="Companies are getting blindsided by rising costs and the overhead of managing a growing
        number of SaaS apps."
        bubbles={[
          "Overspending on unused licenses and poorly structured agreements",
          "Shadow IT and ungoverned apps exposing your organization to risks",
          "Teams losing hours to SaaS renewals instead of driving growth"
        ]}
      />
      <CardSection
        title="FAQs"
        cards={[
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
