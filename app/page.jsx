"use client"

import {useState } from 'react'

import Form from "@/components/Form"
import Result from "@/components/Result"
// import statement; do not need to extension
import { calculate } from "@/utility/helpers" // I added this function beforehand

export default function Home() {

  const [ score, setScore ] = useState(0);

  function calculateScore(name, major) {
    setScore(calculate(name, major))
  }
  return (
    <main style={{
      padding: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10
    }}>
      <img 
        src="/images/teddy.png" 
        alt="Insanely built teddy hauling an inordinately large domino (not the pizza)"
        style={{ width: 100 }} />
      <h1>Cuteness 👋</h1>
      {score == 0 && (
        <Form handleCalculate={calculateScore}/>
      )}
      {score != 0 && (
        <Result score={score}/>
      )}
    </main>
  )
}
