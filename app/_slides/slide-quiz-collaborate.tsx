import { QuizSlide } from "./quiz-slide";

export function SlideQuizCollaborate() {
  return (
    <QuizSlide
      eyebrow="Quiz 2 of 3"
      question="How can you collaborate with other people on an artifact or site you build with Claude Code, Codex, or Cursor?"
      options={[
        { text: "Screen-share and have them tell you what to change" },
        { text: "Zip the project and send it over Slack or email" },
        { text: "There isn't a real way for someone else to make changes on their own", correct: true },
      ]}
      explanation="Today, those three are basically it, and none of them let someone actually work on the project themselves. That's the exact gap a shared repo closes."
    />
  );
}
