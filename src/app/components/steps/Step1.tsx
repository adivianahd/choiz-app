import React from "react"
import { LabelItem } from "../LabelItem"
import { Step, StepLayout } from "../StepLayout"
import { STEPS } from "@/app/questions";

export function Step1({ step, getValue, update, onBack, onSubmit }: Step) {
  const [ disabled, setDisabled ] = React.useState<boolean>(true)
  const onTextChange = (event: any) => {
    const value = event.target.value;
    update(step, 6, value)
  }
  const questions = STEPS[step]
  const isOtherSelected = Boolean(getValue(step, 4))
  const otherValue = String(getValue(step, 6) || '')
  const onSelect = (index: number) => (value: boolean) => {
    setDisabled(false)
    if (getValue(step, 5) && index != 5) {
      update(step, 5, false)
    }
    if (index === 5 && value) {
      update(step, 0, false)
      update(step, 1, false)
      update(step, 2, false)
      update(step, 3, false)
      update(step, 4, false)
      update(step, 5, true)
      return;
    }
    update(step, index, value)
  }

  return (
    <StepLayout
      step={step}
      title="¿Tienes algún problema en el cuero cabelludo?"
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
      {isOtherSelected && <textarea
        rows={5}
        className={`border-gray-200 border rounded-lg py-2 px-4 cursor-pointer hover:border-black transition duration-300 focus:outline-none resize-none`}
        value={otherValue}
        onChange={onTextChange}
      />}
    </StepLayout>
  )
}
