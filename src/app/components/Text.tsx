import React from "react"

type Color =
  | "text-violet-800"
  | "text-black"
  | "text-gray-400"
  | "text-gray-600"

type Weight =
  | "font-thin"
  | "font-normal"
  | "font-semibold"
  | "font-bold"

type Size =
  | "text-sm"
  | "text-base"
  | "text-xl"
  | "text-2xl"
  | "text-3xl"


interface TextProps {
  label: string
  color?: Color
  weight?: Weight
  size?: Size
  className?: string
}


export function Text({
  label,
  color = 'text-black',
  weight = 'font-normal',
  size = 'text-base',
  className 
}: TextProps) {
  return (
    <div className={`${className} ${color} ${weight} ${size}`}>
      {label}
    </div>
  )
}