interface ImageTextSectionProps {
  paragraphs: string[];
  image: {
    src: string;
    alt: string;
  };
  reverse?: boolean;
}

const ImageTextSection: React.FC<ImageTextSectionProps> = ({ paragraphs, image, reverse }) => {
  return (
    <section className="image-text">
      <div className="section-content" style={{ flexDirection: reverse ? "row-reverse" : "row" }}>
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
