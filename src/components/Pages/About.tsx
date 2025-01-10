import BubbleSection from "../Sections/BubbleSection";
import ImageTextSection from "../Sections/ImageTextSection";
import TextTitleSection from "../Sections/TextTitleSection";

const About: React.FC = () => {
  return (
    <main className="about">
      <TextTitleSection
        title="Ensuring your SaaS spend aligns with your business goals while providing expert IT
        leadership that fuels growth and mitigates risks."
      />
      <ImageTextSection
        paragraphs={[
          "I've had an amazing 20+ year career working in tech with companies like Oracle, Ancestry.com, Fusion-io, Instructure, Talkdesk, and Salsify.",
          "I've also had some incredible experiences working with Venture Capital, Private Equity, and going through 3 IPOs.",
          "Each experience has taught me an important lesson that I'm now looking to share and pass on to others in my passion for SaaS Management and working as a CIO."
        ]}
        image={{ src: "/images/gordon.png", alt: "Gordon Atkin" }}
      />
      <BubbleSection
        title="What is it like working together?"
        bubbles={[
          "Ensuring your long-term success is top of mind for me.",
          "Customer satisfaction drives me.",
          "I put a lot of value on openness and transparency."
        ]}
      />
      <ImageTextSection
        className="reverse space-bottom"
        paragraphs={[
          "Over 30 years ago, my wife and I met working in the Teton National Park at a place called Signal Mountain Lodge. The Tetons, the outdoors, skiing, and our Signal Mountain continue to hold a special place in our hearts. When we're not skiing (20 min from the resort), you might find me golfing, at a Raiders football game, or together with my wife enjoying time with our 3 kids, traveling, or enjoying each other's company as we settle into being empty nesters."
        ]}
        image={{ src: "/images/signal.png", alt: "Signal Mountain Loge" }}
      />
    </main>
  );
};

export default About;
