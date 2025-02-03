import React from "react"
import { Text } from "./Text"
import Image from 'next/image';
import IconoSVG from './../../../public/check.svg'

interface LabelItemProps {
  checked: boolean
  hideCheck?: boolean
  label: string
  onChange: (value: boolean) => void
}

export function LabelItem({
  checked,
  label,
  onChange,
  hideCheck,
}: LabelItemProps) {
  return (
    <div
      className="flex items-center border-gray-200 border rounded-lg p-4 cursor-pointer hover:border-black transition duration-300 select-none"
      onClick={() => onChange(!checked)}
    >
      {!hideCheck &&
      <div className={`w-4 h-4 mr-2 rounded-full border border-gray-200 flex justify-center`}>
      {checked && <Image src={IconoSVG} alt="Icono SVG" width={10} height={10} />}
      </div>}
      <Text label={label} size="text-sm" weight="font-normal"/>
    </div>
  )
}