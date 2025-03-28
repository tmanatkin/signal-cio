import CardSection from "../Sections/CardSection";
import HeroSection from "../Sections/HeroSection";
import BubbleSection from "../Sections/BubbleSection";
import ColumnSection from "../Sections/ColumnSection";

const Home: React.FC = () => {
  return (
    <main>
      <HeroSection
        className="heading reverse"
        title="Transforming IT Uncertainty into Predictability, Reliability, and Efficiency"
        subtitle="Strategic IT Leadership to Fuel Your Growth."
        buttons={[
          {
            href: "https://docs.google.com/presentation/d/1v-TqWPe1dcQiJHRWul4za0IFhvwD2HZX0u1FXB_yB8w/edit?usp=sharing",
            name: "Learn More",
            target: "_blank"
          },
          {
            href: "https://calendly.com/gordon-signalcio/30min",
            name: "Book a Call",
            target: "_blank"
          }
        ]}
        image={{
          src: "/images/thinking.png",
          alt: "Businessman thinking about managing the chaos of IT"
        }}
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
        id="services"
        className="shadow-background bottom-shadow"
        columns={[
          {
            title: "Growth-Ready IT Strategy",
            subtitle: "Optimize and Scale in 90 Days",
            items: [
              {
                title: "IT Spend and Alignment Assessment",
                body: "Optimize costs and ensure technology aligns with business goals.",
                icon: {
                  src: "/images/alignment.png",
                  alt: ""
                }
              },
              {
                title: "Scalable Governance Framework",
                body: "Implement controls to mitigate risks and drive efficiency.",
                icon: {
                  src: "/images/governance.png",
                  alt: ""
                }
              },
              {
                title: "Fractional IT Leadership",
                body: "Interim leadership to navigate growth and critical transitions.",
                icon: {
                  src: "/images/leadership.png",
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
                  src: "/images/rationalization.png",
                  alt: ""
                }
              },
              {
                title: "Shadow IT Risk Reduction",
                body: "Uncover ungoverned apps, identify control gaps, and mitigate security risks and threats.",
                icon: {
                  src: "/images/reduction.png",
                  alt: ""
                }
              },
              {
                title: "SaaS Management Optimizer",
                body: "Implement a sustainable framework for managing SaaS renewals, license utilization, and application lifecycle.",
                icon: {
                  src: "/images/optimize.png",
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
            href: "https://docs.google.com/presentation/d/1RZFKYSq3gvd1UrnKfSNLV-aK6t4ILQ5U5W1Lfkff2zM/edit?usp=sharing",
            name: "Learn More",
            target: "_blank"
          },
          {
            href: "https://calendly.com/gordon-signalcio/30min",
            name: "Book a Call",
            target: "_blank"
          }
        ]}
        image={{
          src: "/images/filter.png",
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
        className="shadow-background"
        title="FAQs"
        cards={[
          {
            title: "Who are these services for?",
            body: "We specialize in working with executive-level roles in tech companies scaling beyond 500 employees."
          },
          {
            title: "What results can I expect?",
            body: "Streamlined IT operations, 10%-30% reduction in SaaS spend, and a governance framework that supports scalable growth and reduces risk."
          },
          {
            title: "When will I see results?",
            body: "The Growth-Ready IT Strategy delivers measurable outcomes within 90 days, including actionable roadmaps and implementation playbooks."
          },
          {
            title: "What makes you different?",
            body: "We focus exclusively on aligning IT with business objectives. With 20+ years of experience, we deliver high-impact strategies tailored to your unique growth challenges."
          },
          {
            title: "Do you guarantee results?",
            body: "We guarantee measurable improvements in IT alignment, cost efficiency, and operational readiness. If we don't deliver, we'll continue working with you until you see results."
          },
          {
            title: "How do I get started?",
            body: "Book a meeting and begin with one of our complimentary assessments for IT Efficiency or SaaS Maturity."
          }
        ]}
      />
    </main>
  );
};

export default Home;
