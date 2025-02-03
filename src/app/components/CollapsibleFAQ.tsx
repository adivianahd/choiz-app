import React from "react"
import { useState } from "react";
import Image from 'next/image';
import DownArrow from './../../../public/down-arrow.svg'

export default function CollapsibleFAQ({ question, answer }: FAQ) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-[1px] p-4 last:border-b-0">
      <button className="relative w-full text-left font-semibold" onClick={() => setIsOpen((prev) => !prev)}>
        <div className={`transition-all  absolute right-0 top-1 ${isOpen &&  "rotate-180"}`}>
          <Image src={DownArrow} alt="arrow"  />
        </div>
        {question}
      </button>
      <div className={`${isOpen ? "block" : "hidden"} mt-2`}>{answer}</div>

    </div>
  );
}