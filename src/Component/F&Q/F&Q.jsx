import React, { useState } from "react";
import "./F&Q.css";

const faqData = [
  {
    question: "What is your return policy?",
    answer: "➡You can return items within 30 days of purchase.",
  },
  {
    question: "How do I track my order?",
    answer: "➡You can track your order using the tracking number provided in your email.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "➡We accept Visa, Mastercard, PayPal, Google Pay, and Paytm.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => handleToggle(index)}>
            <span>{faq.question}</span>
            {activeIndex === index ? (
              <i className="fa fa-minus" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-plus" aria-hidden="true"></i>
            )}
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;