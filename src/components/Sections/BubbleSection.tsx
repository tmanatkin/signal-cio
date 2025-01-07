interface BubbleSectionProps {
  title: string;
  bubbles: string[];
}

const BubbleSection: React.FC<BubbleSectionProps> = ({ title, bubbles }) => {
  return (
    <section className="bubble">
      <h2>{title}</h2>
      <div className="bubble-container">
        {bubbles.map((bubble) => (
          <p className="bubble">{bubble}</p>
        ))}
      </div>
    </section>
  );
};

export default BubbleSection;
