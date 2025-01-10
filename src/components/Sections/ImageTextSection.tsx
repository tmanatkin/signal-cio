import SectionProps from "./Section";

interface ImageTextSectionProps extends SectionProps {
  paragraphs: string[];
  image: {
    src: string;
    alt: string;
  };
}

const ImageTextSection: React.FC<ImageTextSectionProps> = ({ className, paragraphs, image }) => {
  return (
    <section className={`image-text ${className || ""}`}>
      <div className="section-content">
        <img src={image.src} alt={image.alt} />
        <div className="image-text-body">
          {paragraphs.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;
