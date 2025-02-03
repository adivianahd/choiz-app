import React from "react"
import { LabelItem } from "../LabelItem"
import { Step, StepLayout } from "../StepLayout"
import { STEPS } from "@/app/questions"

export function Step2({ step, getValue, update, onBack, onSubmit }: Step) {
  const questions = STEPS[2]
  const onSelect = (index: number) => () => {
    update(step, 0, false)
    update(step, 1, false)
    update(step, 2, false)
    update(step, index, true)
    onSubmit()
  }

  return (
    <StepLayout
      step={step}
      title="¿Hay antecedentes de caída del cabello en tu familia?"
      onBack={onBack}
    >
      {questions.map((question, index) => (
        <LabelItem
          hideCheck
          key={index}
          checked={Boolean(getValue(step, index))}
          onChange={onSelect(index)}
          label={question}
        />
      ))}
    </StepLayout>
  )
}
