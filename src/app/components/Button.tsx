"use client"
import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({ label = "", onClick = () => { }, disabled = false }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${disabled && "bg-slate-400"} w-full font-normal text-lg bg-black hover:bg-gray-700 text-white p-4 rounded-full`}
    >
      {label}
    </button>
  );
}