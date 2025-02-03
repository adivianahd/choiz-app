import React from "react"
import { LabelItem } from "../LabelItem"
import { Step, StepLayout } from "../StepLayout"
import { STEPS } from "@/app/questions"

export function Step3({ step, getValue, update, onBack, onSubmit }: Step) {
  const [ disabled, setDisabled ] = React.useState<boolean>(true)
  const questions = STEPS[3]
  const onSelect = (index: number) => (value: boolean) => {
    setDisabled(false)
    if (getValue(step, 7) && index != 7) {
      update(step, 7, false)
    }
    if (index === 7 && value) {
      update(step, 0, false)
      update(step, 1, false)
      update(step, 2, false)
      update(step, 3, false)
      update(step, 4, false)
      update(step, 5, false)
      update(step, 6, false)
      update(step, 7, true)
      return;
    }
    update(step, index, value)
  }

  return (
    <StepLayout
      step={step}
      title="¿Tienes o has tenido alguna de las siguientes condiciones médicas?"
      subtitle="Selecciona todas las opciones que apliquen."
      onBack={onBack}
      onNext={onSubmit}
      disabled={disabled}
    >
      {questions.map((question, index) => (
        <LabelItem
          key={index}
          checked={Boolean(getValue(step, index))}
          onChange={onSelect(index)}
          label={question}
        />
      ))}
    </StepLayout>
  )
}
