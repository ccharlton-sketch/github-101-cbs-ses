"use client";

import { useState } from "react";
import { Check, HelpCircle } from "lucide-react";

interface QuizOption {
  text: string;
  correct?: boolean;
}

interface QuizSlideProps {
  eyebrow: string;
  question: string;
  options: QuizOption[];
  explanation: string;
}

export function QuizSlide({ eyebrow, question, options, explanation }: QuizSlideProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="h-full flex items-center justify-center px-16 py-16">
      <div className="max-w-3xl w-full">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
            <HelpCircle className="h-5 w-5 text-[#0176D3]" />
          </div>
          <span className="text-sm font-semibold text-[#0176D3] uppercase tracking-wide">
            {eyebrow}
          </span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-10">{question}</h1>

        <div className="space-y-4">
          {options.map((option) => {
            const highlight = revealed && option.correct;
            return (
              <div
                key={option.text}
                className={`rounded-xl border px-6 py-4 flex items-center gap-4 transition-all ${
                  highlight
                    ? "border-green-500 bg-green-50"
                    : revealed
                      ? "border-gray-100 bg-white opacity-60"
                      : "border-gray-200 bg-white"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                    highlight ? "bg-green-500" : "bg-gray-100"
                  }`}
                >
                  {highlight && <Check className="h-4 w-4 text-white" />}
                </div>
                <p className="text-xl text-gray-800">{option.text}</p>
              </div>
            );
          })}
        </div>

        {!revealed ? (
          <button
            onClick={() => setRevealed(true)}
            className="mt-10 px-6 py-3 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 transition-colors"
          >
            Reveal Answer
          </button>
        ) : (
          <div className="mt-10 rounded-lg border-l-4 border-l-[#0176D3] bg-gray-50 p-5">
            <p className="text-lg text-gray-800">{explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
}
