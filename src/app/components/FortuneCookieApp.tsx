'use client'

import React, { useState } from 'react'
import ClosedState from './ClosedState'
import OpeningState from './OpeningState'
import OpenedState from './OpenedState'

interface Fortune {
  text: string
  numbers: number[]
}

export default function FortuneCookieApp() {
  const [isOpened, setIsOpened] = useState(false)
  const [isOpening, setIsOpening] = useState(false)
  const [currentFortune, setCurrentFortune] = useState<Fortune | null>(null)

  const phrases: string[] = [
    "Duas estradas divergiam em uma floresta, e eu peguei a menos percorrida, e isso fez toda a diferença.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "A única forma de fazer um excelente trabalho é amar o que você faz.",
    "Grandes coisas nunca vêm da zona de conforto.",
    "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
    "Cada dia é uma nova oportunidade para ser uma versão melhor de si mesmo.",
    "A persistência é o caminho do êxito.",
    "Acredite em si mesmo e todo o resto se encaixará.",
    "A vida é 10% do que acontece com você e 90% de como você reage a isso.",
    "O melhor momento para plantar uma árvore foi há 20 anos. O segundo melhor momento é agora."
  ]

  function generateLuckyNumbers(quantity = 6, max = 99): number[] {
    const set = new Set<number>()
    while (set.size < quantity) {
      const n = Math.floor(Math.random() * max) + 1
      set.add(n)
    }
    return Array.from(set).sort((a, b) => a - b)
  }

  const handleCookieClick = () => {
    if (isOpened || isOpening) return

    setIsOpening(true)
    setTimeout(() => {
      setIsOpened(true)
      setIsOpening(false)
      const randomText = phrases[Math.floor(Math.random() * phrases.length)]
      const numbers = generateLuckyNumbers(6, 99)
      setCurrentFortune({ text: randomText, numbers })
    }, 1200)
  }

  const handleNewFortune = () => {
    setIsOpened(false)
    setIsOpening(false)
    setCurrentFortune(null)
  }

  return (
    <main id="app">
      {/* Estrelinhas decorativas */}
      <div className="sparkle sparkle-1">
        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24">
          <path d="M9.937 15.5A2..." />
        </svg>
      </div>
      <div className="sparkle sparkle-2">
        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24">
          <path d="M9.937 15.5A2..." />
        </svg>
      </div>
      <div className="sparkle sparkle-3">
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24">
          <path d="M9.937 15.5A2..." />
        </svg>
      </div>
      <div className="sparkle sparkle-4">
        <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24">
          <path d="M9.937 15.5A2..." />
        </svg>
      </div>

      <section className="container">
        {!isOpened && !isOpening && <ClosedState onClick={handleCookieClick} />}
        {isOpening && <OpeningState />}
        {isOpened && currentFortune && (
          <OpenedState fortune={currentFortune} onNewFortune={handleNewFortune} />
        )}
      </section>
    </main>
  )
}
