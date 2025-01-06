interface ProblemSectionProps {
  title: string;
  bubbles: string[];
}

const ProblemSection: React.FC<ProblemSectionProps> = ({ title, bubbles }) => {
  return (
    <section className="problem">
      <h2>{title}</h2>
      <div className="bubble-container">
        {bubbles.map((bubble) => (
          <p className="bubble">{bubble}</p>
        ))}
      </div>
    </section>
  );
};

export default ProblemSection;
