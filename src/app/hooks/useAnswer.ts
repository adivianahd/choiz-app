import { useState } from "react";

export function useAnswer() {
  const [answers, setAnswers] = useState<Record<number, Answer[]>>({});
  const getValue = (step: number, id: Answer['id']) => {
    return answers[step]?.find((a) => a.id === id)?.value;
  };

  const update = (step: number, id: Answer['id'], value: AnswerValue) => {
    if (!answers[step]) {
      setAnswers((prev) => ({ ...prev, [step]: [{ id, value }] }));
      return;
    }

    setAnswers((prev) => ({
      ...prev,
      [step]: prev[step].some((a) => a.id === id)
        ? prev[step].map((a) => (a.id === id ? { ...a, value } : a))
        : [...prev[step], { id, value }],
    }));
  };

  return { answers, getValue, update };
}

export type UseAnswerReturns = ReturnType<typeof useAnswer>;
