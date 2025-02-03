"use client"

import { StepLast } from "./components/steps/StepLast";
import { Step1 } from "./components/steps/Step1";
import { Step2 } from "./components/steps/Step2";
import { Step3 } from "./components/steps/Step3";
import { Step4 } from "./components/steps/Step4";
import { StepHome } from "./components/steps/StepHome";
import { StepRecommendation } from "./components/steps/StepRecommendation";
import { useAnswer } from "./hooks/useAnswer";
import { useWizzard } from "./hooks/useWizzard"


export default function Home() {
  const answers = useAnswer()
  const { back, next, currentStep, CurrentComponent } = useWizzard([
    StepHome,
    Step1,
    Step2,
    Step3,
    Step4,
    StepRecommendation,
    StepLast
  ])

  return (
    <div>
      <CurrentComponent {...answers} step={currentStep} onBack={back} onSubmit={next} />
    </div>
  );
}
