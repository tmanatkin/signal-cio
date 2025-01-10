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
            href: "https://webforms.pipedrive.com/f/73PgPZA0UApGsYfUL50AvJF3sGApBQXZX8AtUz2Agyvd3KqT3Cnk2g8XQJKQWdnSw3",
            name: "Learn More"
          },
          {
            href: "https://signalcio.pipedrive.com/scheduler/bEMjaPsQ/signalcio-intro-initial-consultation",
            name: "Book a Call",
            target: "_blank"
          }
        ]}
        image={{
          src: "/signal-cio/images/thinking.png",
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
