import SectionProps from "./Section";

interface HeroSectionProps extends SectionProps {
  title: string;
  subtitle: string;
  buttons: { href: string; name: string; target?: string }[];
  image: {
    src: string;
    alt: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({
  className,
  title,
  subtitle,
  buttons,
  image
}) => {
  return (
    <section className={`hero ${className || ""}`}>
      <div className="section-content">
        <div className="hero-info">
          <h1>{title}</h1>
          <h3>{subtitle}</h3>
          <div className="button-container">
            {buttons.map((button) => (
              <a href={button.href} className="button" target={button.target}>
                {button.name}
              </a>
            ))}
          </div>
        </div>
        <img className="hero-img" src={image.src} alt={image.alt}></img>
      </div>
    </section>
  );
};

export default HeroSection;
