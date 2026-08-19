import { QuizSlide } from "./quiz-slide";

export function SlideQuizStorage() {
  return (
    <QuizSlide
      eyebrow="Quiz 1 of 3"
      question="When you build something with Claude Code, Codex, or Cursor, where does it actually live?"
      options={[
        { text: "In the Salesforce file system" },
        { text: "Only on your own computer", correct: true },
        { text: "In the AI tool's own cloud" },
      ]}
      explanation="It's just a folder on your laptop until you put it in a repo and push it. Salesforce and the AI tool have nothing to do with where it's stored."
    />
  );
}
