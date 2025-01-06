export interface FAQCardProps {
  question: string;
  answer: string;
}

const FAQCard: React.FC<FAQCardProps> = ({ question, answer }) => {
  return (
    <div className="faq">
      <p className="question">{question}</p>
      <p className="answer">{answer}</p>
    </div>
  );
};

export default FAQCard;
