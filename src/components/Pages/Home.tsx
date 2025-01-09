import CardSection from "../Sections/CardSection";
import HeroSection from "../Sections/HeroSection";
import BubbleSection from "../Sections/BubbleSection";
import ColumnSection from "../Sections/ColumnSection";

const Home: React.FC = () => {
  return (
    <main>
      <HeroSection
        classes="heading"
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
          "Lack of controls over IT spend drives inefficiency and rising costs.",
          "Fragmented systems and poor governance hinder effective scaling."
        ]}
      />
      <ColumnSection
        columns={[
          {
            title: "Growth-Ready IT Strategy",
            subtitle: "Optimize and Scale in 90 Days",
            items: [
              {
                title: "IT Spend and Alignment Assessment",
                body: "Optimize costs and ensure technology aligns with business goals.",
                icon: {
                  src: "/signal-cio/images/alignment.png",
                  alt: ""
                }
              },
              {
                title: "Scalable Governance Framework",
                body: "Implement controls to mitigate risks and drive efficiency.",
                icon: {
                  src: "/signal-cio/images/governance.png",
                  alt: ""
                }
              },
              {
                title: "Fractional IT Leadership",
                body: "Interim leadership to navigate growth and critical transitions.",
                icon: {
                  src: "/signal-cio/images/leadership.png",
                  alt: ""
                }
              }
            ]
          },
          {
            title: "SaaS Cost Control Framework",
            subtitle: "Streamline and Save in 60 Days",
            items: [
              {
                title: "SaaS Spend Assessment and Rationalization",
                body: "An audit of all SaaS applications, utilization, redundancies, and actionable cost-saving opportunities.",
                icon: {
                  src: "/signal-cio/images/rationalization.png",
                  alt: ""
                }
              },
              {
                title: "Shadow IT Risk Reduction",
                body: "Uncover ungoverned apps, identify control gaps, and mitigate security risks and threats.",
                icon: {
                  src: "/signal-cio/images/reduction.png",
                  alt: ""
                }
              },
              {
                title: "SaaS Management Optimizer",
                body: "Implement a sustainable framework for managing SaaS renewals, license utilization, and application lifecycle.",
                icon: {
                  src: "/signal-cio/images/optimize.png",
                  alt: ""
                }
              }
            ]
          }
        ]}
      />
      <HeroSection
        title="Let's End Rising SaaS Costs and Renewal Chaos"
        subtitle="Strategic SaaS Management that fuels growth and saves costs."
        buttons={[
          {
            href: "https://webforms.pipedrive.com/f/6N6NtLvdSHXfuxvaaI1SWQ1QTWnN4fUXf2gofWdMoVaToOZloveVeax2VSLDy3D4mn",
            name: "Learn More",
            target: "_blank"
          },
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
        shadowBackground
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

export default Home;
