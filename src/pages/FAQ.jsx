import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function FAQ() {
  // State to track which FAQ item is open
  const [openItem, setOpenItem] = useState(null);

  // Toggle function for FAQ items
  const toggleItem = (index) => {
    if (openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  };

  // FAQ data
  const faqItems = [
    {
      question: "What is BITSAT?",
      answer: "BITSAT (Birla Institute of Technology and Science Admission Test) is an online entrance examination for admission to undergraduate engineering programs at BITS Pilani, BITS Goa, and BITS Hyderabad."
    },
    {
      question: "How should I prepare for BITSAT?",
      answer: "Effective BITSAT preparation includes understanding the syllabus thoroughly, creating a study schedule, focusing on NCERT books for fundamentals, practicing with previous years' papers, and taking regular mock tests."
    },
    {
      question: "What is the exam pattern of BITSAT?",
      answer: "BITSAT consists of 130 questions to be completed in 3 hours. The sections include Physics (40 questions), Chemistry (40 questions), English Proficiency and Logical Reasoning (25 questions), and Mathematics/Biology (45 questions)."
    },
    {
      question: "How does your platform help in BITSAT preparation?",
      answer: "Our platform offers comprehensive BITSAT preparation through detailed study materials, video lectures, practice questions, previous years' papers with solutions, full-length mock tests, and personalized performance analytics."
    },
    {
      question: "Can I access the platform on mobile devices?",
      answer: "Yes, our platform is fully responsive and can be accessed on smartphones, tablets, laptops, and desktop computers. We also offer a dedicated mobile app for Android and iOS devices."
    },
    {
      question: "Do you provide refunds?",
      answer: "Yes, we offer a 7-day money-back guarantee for all our subscription plans. If you're not satisfied with our services, you can request a refund within 7 days of purchase."
    }
  ];

  return (
    <div>
      <Navbar/>
    <div className="container mx-auto pt-20 px-4 py-8 max-w-3xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h1>
        <p className="text-gray-600">Find answers to common questions about BITSAT preparation and our platform</p>
      </div>

      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              className="flex justify-between items-center w-full py-4 text-left font-medium focus:outline-none"
              onClick={() => toggleItem(index)}
            >
              <span className="text-amber-800">{item.question}</span>
              <svg
                className={`w-5 h-5 text-gray-500`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openItem === index && (
              <div className="pb-4 text-gray-600">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default FAQ;
