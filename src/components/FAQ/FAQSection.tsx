import FAQCard from "./FAQCard";
import { FAQCardProps } from "./FAQCard";

interface FAQSectionProps {
  faqs: FAQCardProps[];
}

const FAQSection: React.FC<FAQSectionProps> = (faqs) => {
  return (
    <section className="faq">
      <h1>FAQs</h1>
      <div className="faq-container">
        {faqs.faqs.map((faq) => (
          <FAQCard question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
