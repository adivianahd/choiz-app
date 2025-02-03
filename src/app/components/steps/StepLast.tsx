import React from "react"
import { Step, StepLayout } from "../StepLayout"
import CollapsibleFAQ from "../CollapsibleFAQ"
import { QUESTIONS, STEPS } from "@/app/questions"

export function StepLast({ answers, step, onBack }: Step) {
  return (
    <StepLayout
      step={step}
      title="Respuestas previamente dadas en el formulario."
      onBack={onBack}
    >
      {[1, 2, 3, 4].map((_step) => (
        <CollapsibleFAQ
          key={_step}
          question={QUESTIONS[_step-1]}
          answer={answers[_step].map(a => STEPS[_step][a.id]).join(' - ')}
        />))
      }
    </StepLayout>
  )
}
