"use client";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const questions = [
  { id: 1, question: "What is your favorite color?", options: ["Red", "Blue", "Green", "Yellow"] },
  { id: 2, question: "Which pet do you prefer?", options: ["Dog", "Cat", "Bird", "Fish"] },
  { id: 3, question: "Favorite season?", options: ["Winter", "Spring", "Summer", "Fall"] },
  { id: 4, question: "Best programming language?", options: ["JavaScript", "Python", "C++", "Java"] },
  { id: 5, question: "Favorite drink?", options: ["Tea", "Coffee", "Juice", "Water"] },
];

export default function Questions({ onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleOptionClick = async (option) => {
    await addDoc(collection(db, "pollResponses"), {
      question: questions[currentQuestion].question,
      answer: option,
      timestamp: new Date(),
    });

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      onComplete(); // Switch to results page
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">{questions[currentQuestion].question}</h2>
        <div className="grid grid-cols-2 gap-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-700"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
