interface HeroSectionProps {
  classes?: string;
  title: string;
  subtitle: string;
  buttons: { href: string; name: string; target?: string }[];
  image: {
    src: string;
    alt: string;
  };
  reverse?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  classes,
  title,
  subtitle,
  buttons,
  image,
  reverse
}) => {
  return (
    <section className={`hero ${classes}`}>
      <div className="section-content" style={{ flexDirection: reverse ? "row-reverse" : "row" }}>
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
