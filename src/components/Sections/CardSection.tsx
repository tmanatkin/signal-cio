interface CardProps {
  title: string;
  body: string;
}

interface CardSectionProps {
  title: string;
  cards: CardProps[];
}

const Card: React.FC<CardProps> = ({ title, body }) => {
  return (
    <div className="card">
      <p className="title">{title}</p>
      <p className="body">{body}</p>
    </div>
  );
};

const CardSection: React.FC<CardSectionProps> = ({ title, cards }) => {
  return (
    <section className="card">
      <h1>{title}</h1>
      <div className="card-container">
        {cards.map((card) => (
          <Card title={card.title} body={card.body} />
        ))}
      </div>
    </section>
  );
};

export default CardSection;
