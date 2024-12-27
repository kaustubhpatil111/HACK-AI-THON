import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "Who can participate in Hack-AI-thon 2024?",
    answer:
      "Anyone with a passion for AI and programming can participate, whether you are a student, professional, or hobbyist.",
  },
  {
    question: "What is the cost of participating in Hack-AI-thon 2024?",
    answer:
      "Participation is free! There are no registration fees for Hack-AI-thon 2024.",
  },
  {
    question: "How do we know if our registration is confirmed?",
    answer:
      "You will receive a confirmation email upon successful registration. Make sure to check your spam folder too.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faqs-container">
      <h2>FAQs</h2>
      <div className="faqs">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="arrow">{activeIndex === index ? "▲" : "▼"}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
