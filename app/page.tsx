"use client";

import { useState, useEffect } from "react";
import { SlideHero } from "./_slides/slide-hero";
import { SlideQuizStorage } from "./_slides/slide-quiz-storage";
import { SlideQuizCollaborate } from "./_slides/slide-quiz-collaborate";
import { SlideQuizUndo } from "./_slides/slide-quiz-undo";
import { SlideStory } from "./_slides/slide-story";
import { SlideRepo } from "./_slides/slide-repo";
import { SlideCommit } from "./_slides/slide-commit";
import { SlidePush } from "./_slides/slide-push";
import { SlideClone } from "./_slides/slide-clone";
import { SlideConclusion } from "./_slides/slide-conclusion";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";

const slides = [
  { id: "hero", title: "Title", component: SlideHero },
  { id: "quiz-storage", title: "Quiz 1", component: SlideQuizStorage },
  { id: "quiz-collaborate", title: "Quiz 2", component: SlideQuizCollaborate },
  { id: "quiz-undo", title: "Quiz 3", component: SlideQuizUndo },
  { id: "story", title: "The Story", component: SlideStory },
  { id: "repo", title: "Repo", component: SlideRepo },
  { id: "commit", title: "Commit", component: SlideCommit },
  { id: "push", title: "Push", component: SlidePush },
  { id: "clone", title: "Clone", component: SlideClone },
  { id: "conclusion", title: "Recap & Demo", component: SlideConclusion },
];

export default function SlidesDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        if (currentSlide < slides.length - 1) {
          setCurrentSlide(currentSlide + 1);
        }
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        if (currentSlide > 0) {
          setCurrentSlide(currentSlide - 1);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const CurrentComponent = slides[currentSlide].component;

  return (
    <div className="fixed inset-0 flex bg-gray-50">
      {/* Sidebar Navigation */}
      <div
        className={`bg-white border-r border-gray-200 flex flex-col shrink-0 transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-0"
        }`}
      >
        <div className={`${sidebarOpen ? "block" : "hidden"}`}>
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div>
              <h2 className="font-bold text-sm text-gray-900">GitHub 101 (Story)</h2>
              <p className="text-xs text-gray-500 mt-1">
                {currentSlide + 1} / {slides.length}
              </p>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
              title="Hide sidebar"
            >
              <X className="h-4 w-4 text-gray-500" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                className={`w-full text-left px-4 py-3 text-sm border-l-4 transition-colors ${
                  index === currentSlide
                    ? "border-l-blue-600 bg-blue-50 text-blue-900 font-medium"
                    : "border-l-transparent hover:bg-gray-50 text-gray-700"
                }`}
              >
                <div className="flex items-start gap-2">
                  <span className="text-xs text-gray-400 mt-0.5">{index + 1}</span>
                  <span className="flex-1">{slide.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Slide Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Toggle Button (shows when sidebar is closed) */}
        {!sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="absolute top-4 left-4 z-10 p-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
            title="Show sidebar"
          >
            <Menu className="h-5 w-5 text-gray-700" />
          </button>
        )}
        {/* Slide Content - FIXED HEIGHT NO SCROLL */}
        <div className="flex-1 relative overflow-hidden">
          <div className={`absolute inset-0 ${currentSlide % 2 === 1 ? "bg-amber-50/40" : "bg-sky-50"}`}>
            <CurrentComponent />
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="border-t border-gray-200 bg-white px-6 py-4 shrink-0">
          <div className="flex items-center justify-between">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>

            <div className="text-sm text-gray-500">
              Use arrow keys or click to navigate
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
