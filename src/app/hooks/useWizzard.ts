"use client"

import React from "react"

export function useWizzard(components: React.ElementType[]) {
  const [currentStep, setCurrentStep] = React.useState(0)

  const next = () => {
    if (!components[currentStep + 1]) return;
    setCurrentStep(currentStep + 1)
  }
  const back = () => {
    if (currentStep <= 0) return;
    setCurrentStep(currentStep - 1)
  }

  return {
    back,
    next,
    currentStep,
    CurrentComponent: components[currentStep]
  }
}

