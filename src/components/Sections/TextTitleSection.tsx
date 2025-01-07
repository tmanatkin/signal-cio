interface TextTitleSectionProps {
  title: string;
}

const TextTitleSection: React.FC<TextTitleSectionProps> = ({ title }) => {
  return (
    <section className="text-title">
      <h1>{title}</h1>
    </section>
  );
};

export default TextTitleSection;
