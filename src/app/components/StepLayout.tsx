import React from "react"
import { Button } from "./Button"
import { HeaderProgress } from "./HeaderProgress"
import { Text } from "./Text"
import { UseAnswerReturns } from "../hooks/useAnswer"


export interface Step extends UseAnswerReturns {
  step: number
  onBack: () => void
  onSubmit: () => void
}

export interface StepLayoutProps extends React.PropsWithChildren{
  title?:string
  subtitle?:string
  step: number
  onBack: () => void
  onNext?: () => void
  disabled?: boolean
}
export function StepLayout({ step, title, subtitle, onBack, onNext, children, disabled }: StepLayoutProps) {
  return (
    <div className="flex flex-col pb-8 px-8">
      <HeaderProgress step={step} onBack={onBack} />
      <div className="flex flex-col flex-grow gap-4">
        <div className="flex justify-center flex-col">
          <Text size="text-xl" weight="font-bold" label={title || ''} />
          <Text className="ml-1 mt-4" size="text-base" weight="font-normal" color="text-gray-600" label={subtitle || ''} />
        </div>
        {children}
      </div>
      {Boolean(onNext) &&
      <div className="flex mt-12">
        <Button disabled={disabled} label="continuar" onClick={onNext} />
      </div>
      }
    </div>
  )
}
