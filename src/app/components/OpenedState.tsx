'use client'
import React from 'react'

interface Fortune {
  text: string
  numbers: number[]
}

export default function OpenedState({
  fortune,
  onNewFortune,
}: {
  fortune: Fortune
  onNewFortune: () => void
}) {
  return (
    <section id="opened-state" className="state" aria-label="Biscoito aberto">
      <div
        className="opened-cookie"
        role="img"
        aria-label="Biscoito da sorte quebrado em duas partes"
      >
        <div className="broken-half broken-left"></div>
        <div className="broken-half broken-right"></div>
        <div className="crumb crumb-1"></div>
        <div className="crumb crumb-2"></div>
      </div>

      <article className="fortune-card">
        <header className="fortune-header">
          <div className="fortune-icon" aria-hidden="true">✨</div>
          <h2 className="fortune-title">✨ Sua Fortuna ✨</h2>
        </header>

        <blockquote className="fortune-quote">"{fortune.text}"</blockquote>

        <section className="numbers-section">
          <h3 className="numbers-title">🍀 Seus Números da Sorte</h3>
          <ul className="numbers-container">
            {fortune.numbers.map((num, idx) => (
              <li
                key={idx}
                className="lucky-number"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {num}
              </li>
            ))}
          </ul>
        </section>

        <footer>
          <button
            id="new-fortune-btn"
            className="new-fortune-btn"
            onClick={onNewFortune}
            aria-label="Gerar nova fortuna"
          >
            Nova Fortuna
          </button>
        </footer>
      </article>
    </section>
  )
}
