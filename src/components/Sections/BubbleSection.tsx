import SectionProps from "./Section";

interface BubbleSectionProps extends SectionProps {
  title: string;
  bubbles: string[];
}

const BubbleSection: React.FC<BubbleSectionProps> = ({ className, title, bubbles }) => {
  return (
    <section className={`bubble ${className || ""}`}>
      <div className="section-content">
        <h2>{title}</h2>
        <div className="bubble-container">
          {bubbles.map((bubble) => (
            <p className="bubble">{bubble}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BubbleSection;
