type AnswerValue = boolean | number | string

interface Answer {
  id: number
  value: AnswerValue
}

interface Medicine {
  name: string
  formula: string
  image: string
  condition: (steps: Record<number, Answer[]>) => boolean
}

interface FAQ {
  answer: string
  question: string
}