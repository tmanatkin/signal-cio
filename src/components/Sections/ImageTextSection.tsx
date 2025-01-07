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
    <section className="image-text" style={{ flexDirection: reverse ? "row-reverse" : "row" }}>
      <img src={image.src} alt={image.alt} />
      <div>
        {paragraphs.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default ImageTextSection;
