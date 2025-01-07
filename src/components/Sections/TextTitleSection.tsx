interface TextTitleSectionProps {
  title: string;
}

const TextTitleSection: React.FC<TextTitleSectionProps> = ({ title }) => {
  return (
    <section className="text-title">
      <div className="section-content">
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default TextTitleSection;
