import SectionProps from "./Section";

interface TextTitleSectionProps extends SectionProps {
  title: string;
}

const TextTitleSection: React.FC<TextTitleSectionProps> = ({ className, title }) => {
  return (
    <section className={`text-title ${className || ""}`}>
      <div className="section-content">
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default TextTitleSection;
