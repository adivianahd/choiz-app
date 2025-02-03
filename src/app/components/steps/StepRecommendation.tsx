import React from "react"
import { Step, StepLayout } from "../StepLayout"
import { Text } from "../Text"
import { findFirstCondition } from "@/app/medicines"
import { Button } from "../Button"
import { useFetchFAQ } from "@/app/hooks/useFetchFAQ"
import CollapsibleFAQ from "../CollapsibleFAQ"

export function StepRecommendation({ answers, step, onBack, onSubmit }: Step) {
  const medicine = findFirstCondition(answers)
  const { faqs, fetchFAQ } = useFetchFAQ()

  React.useEffect(() => {
    fetchFAQ()
  }, [])
  if (!medicine) return;

  return (
    <StepLayout
      step={step}
      title="Tratamiento recomendado en base a tus respuestas."
      onBack={onBack}
    >
      <div className={"px-4 py-8 w-full rounded-3xl bg-white-full shadow-sm"}>
        <Text label={medicine.name} weight="font-bold" size="text-3xl" />
        <Text label={medicine.formula} weight="font-thin" size="text-xl" color="text-gray-400" />
        <div className={`${medicine.image} bg-no-repeat bg-center  bg-cover w-full h-[400px] mb-8`} />
        <Button label="Seleccionar" onClick={onSubmit}/>
      </div>
      <div className={"px-4 py-8 w-full rounded-3xl bg-white-full shadow-sm"}>
        {faqs.map(faq => <CollapsibleFAQ key={faq.question} question={faq.question} answer={faq.answer} />)}
      </div>
    </StepLayout>
  )
}
