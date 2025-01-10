interface CardProps {
  title: string;
  body: string;
}

interface CardSectionProps {
  title: string;
  shadowBackground?: boolean;
  cards: CardProps[];
}

const Card: React.FC<CardProps> = ({ title, body }) => {
  return (
    <div className="card">
      <div className="card-header">
        <p className="title">{title}</p>
      </div>
      <div className="card-body">
        <p className="body">{body}</p>
      </div>
    </div>
  );
};

const CardSection: React.FC<CardSectionProps> = ({ title, shadowBackground, cards }) => {
  return (
    <section className={`card ${shadowBackground ? "shadow-background" : ""}`}>
      <div className="section-content">
        <h1>{title}</h1>
        <div className="card-container">
          {cards.map((card) => (
            <Card title={card.title} body={card.body} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
