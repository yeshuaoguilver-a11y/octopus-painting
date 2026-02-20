"use client";

import { useState, useEffect } from "react";

type Question =
  | "property"
  | "project"
  | "timeline"
  | "city"
  | "phone"
  | "done";

const questions: Record<Question, string> = {
  property: "Is this residential or commercial?",
  project: "What type of project? (e.g., interior, exterior, cabinets)",
  timeline: "When are you looking to start?",
  city: "What city is the project located in?",
  phone: "What is the best phone number to reach you?",
  done: "",
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [currentQuestion, setCurrentQuestion] =
    useState<Question | null>("property");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [inputValue, setInputValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-open after 10 seconds
  useEffect(() => {
    if (hasAutoOpened) return;
    const timer = setTimeout(() => {
      setIsOpen(true);
      setHasAutoOpened(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, [hasAutoOpened]);

  const questionOrder: Question[] = [
    "property",
    "project",
    "timeline",
    "city",
    "phone",
  ];

  const handleNext = () => {
    if (!currentQuestion || currentQuestion === "done") return;

    const trimmed = inputValue.trim();
    if (!trimmed) return;

    setAnswers((prev) => ({ ...prev, [currentQuestion]: trimmed }));
    setInputValue("");

    const idx = questionOrder.indexOf(currentQuestion);
    if (idx === questionOrder.length - 1) {
      setCurrentQuestion("done");
      submitAnswers({ ...answers, [currentQuestion]: trimmed });
    } else {
      setCurrentQuestion(questionOrder[idx + 1]);
    }
  };

  const submitAnswers = async (finalAnswers: Record<string, string>) => {
    setIsSubmitting(true);
    try {
      await fetch("/api/chat-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          propertyType: finalAnswers.property,
          projectType: finalAnswers.project,
          timeline: finalAnswers.timeline,
          city: finalAnswers.city,
          phone: finalAnswers.phone,
        }),
      });
    } catch {
      // Silently fail for now
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleNext();
  };

  const isDone = currentQuestion === "done";
  const showThanks = isDone && !isSubmitting;

  return (
    <>
      {/* Toggle button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue text-white shadow-lg hover:bg-brand-blue-dark transition-colors"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <svg
          className={`h-6 w-6 transition-transform ${isOpen ? "rotate-90" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-full max-w-sm overflow-hidden rounded-xl bg-white shadow-xl border border-gray-200">
          <div className="bg-brand-blue px-4 py-3 text-white">
            <h3 className="font-semibold">Get a Free Estimate</h3>
            <p className="text-sm text-blue-100">
              Answer a few quick questions
            </p>
          </div>

          <div className="max-h-80 overflow-y-auto p-4 space-y-4">
            {/* Previous Q&A */}
            {questionOrder.map((q) => {
              if (!answers[q]) return null;
              return (
                <div key={q} className="space-y-1">
                  <p className="text-sm text-gray-600 font-medium">
                    {questions[q]}
                  </p>
                  <p className="text-sm text-gray-900">{answers[q]}</p>
                </div>
              );
            })}

            {/* Current question */}
            {currentQuestion && currentQuestion !== "done" && (
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {questions[currentQuestion]}
                </p>
                <div className="mt-2 flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your answer..."
                    className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                  />
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!inputValue.trim()}
                    className="rounded-md bg-brand-red px-4 py-2 text-sm font-medium text-white hover:bg-brand-red-dark disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Thanks message */}
            {showThanks && (
              <p className="text-gray-700 font-medium">
                Thanks — we&apos;ll contact you shortly.
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
