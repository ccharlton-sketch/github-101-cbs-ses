import { QuizSlide } from "./quiz-slide";

export function SlideQuizUndo() {
  return (
    <QuizSlide
      eyebrow="Quiz 3 of 3"
      question="You ask Claude Code or Cursor to make a change, and it turns out to be wrong. How do you get back to the version that worked?"
      options={[
        { text: "Ask it to undo the change, and hope it remembers what the old version looked like", correct: true },
        { text: "There's a \"restore previous version\" button built into the tool" },
        { text: "Manually rebuild the old version from memory" },
      ]}
      explanation="Right now, that's really it: you're hoping the AI's memory of your own project is good enough. There's no real safety net until every change is actually saved as its own checkpoint."
    />
  );
}
