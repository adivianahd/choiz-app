"use client"

import React from "react"

export const useFetchFAQ = () => {
  const [faqs, setFaq] = React.useState<FAQ[]>([])

  const fetchFAQ = async () => {
    try {
      const response = await fetch("https://679938bebe2191d708b25ceb.mockapi.io/api/faqs")
      const data = await response.json()
      setFaq(data)
    } catch {
      setFaq([])
    }
  }

  return { faqs, fetchFAQ }
}