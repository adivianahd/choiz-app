
export const MEDICINES: Medicine[] = [
  {
    name: 'DUTAX Capsula',
    formula: 'Dutasterida 0.5 + 123 1+23 123',
    image: "bg-[url('/medicine-1.png')]",
    condition: (steps) => steps[3]?.some(answer => answer?.id === 7 && answer.value)
  },
  {
    name: 'Minoxidil Capsulas',
    formula: '',
    image: "bg-[url('/medicine-3.png')]",
    condition: (steps) => steps[3]?.some(answer =>
      answer?.id === 0 && answer.value ||
      answer?.id === 1 && answer.value
    )
  },
  {
    name: 'DUTAX GEL',
    formula: '',
    image: "bg-[url('/medicine-2.png')]",
    condition: () => true
  },
]

export const findFirstCondition = (steps: Record<number, Answer[]>): Medicine => {
  return MEDICINES.find(medicine => medicine.condition(steps)) || MEDICINES[2]
}