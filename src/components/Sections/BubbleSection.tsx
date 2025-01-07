interface BubbleSectionProps {
  title: string;
  bubbles: string[];
}

const BubbleSection: React.FC<BubbleSectionProps> = ({ title, bubbles }) => {
  return (
    <section className="bubble">
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
