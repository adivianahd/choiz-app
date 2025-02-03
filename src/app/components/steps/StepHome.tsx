import React from "react"
import Image from 'next/image';
import IconoSVG from './../../../../public/choiz-white.svg';
import ClockSVG from './../../../../public/clock.svg';
import { Text } from "../Text";
import { Button } from "../Button";
import { Step } from "../StepLayout";


export function StepHome({ onSubmit }: Step) {
  const DotText = () => <div className="border-gray-300 bg-white border w-4 h-4 mr-2 rounded-full z-10" />
  const VerticalLine = () => <div className="absolute w-[1px] top-[10px] bottom-[10px] left-[15px] bg-gray-300 " />
  
  return (
    <div className="bg-purple-950 h-lvh bg-[url('/welcome-image.jpeg')] bg-[center_-200px]  bg-cover  relative">
      <div className="p-6">
        <Image src={IconoSVG} alt="Icono SVG" height={35} />
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-white p-8 rounded-t-3xl shadow-lg flex flex-col gap-4">
        <Text label="Bienvenido a Choiz!" color="text-violet-800" weight="font-semibold" size="text-3xl" />
        <Text label="Comienza tu tratamiento en tres pasos" size="text-xl" />
        <div className="flex flex-col pl-2 gap-4 relative">
          <VerticalLine />
          <div className="flex items-center">
            <DotText />
            <Text label="Completa tu expediente médico" />
            <div className="flex ml-4 gap-1">
              <Image src={ClockSVG} alt="Icono SVG" width={16}  />
              <Text label="2 min" color="text-violet-800" size="text-sm" />
            </div>
          </div>
          <div className="flex items-center">
            <DotText />
            <Text label="Explora las opciones de tratamiento" />
          </div>
          <div className="flex items-center">

            <DotText />
            <Text label="Paga y recibe tu tratamiento" />
          </div>
        </div>
        <div className="mt-12 mb-4">
          <Button label="Continuar" onClick={onSubmit} />
        </div>
      </div>
    </div >
  )
}
