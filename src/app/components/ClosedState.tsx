'use client'
import React from 'react'

export default function ClosedState({ onClick }: { onClick: () => void }) {
  return (
    <section id="closed-state" className="state" aria-label="Biscoito fechado">
      <button
        id="cookie"
        className="cookie"
        onClick={onClick}
        aria-label="Abrir biscoito da sorte"
      >
        <div className="cookie-decoration decoration-1"></div>
        <div className="cookie-decoration decoration-2"></div>
        <div className="cookie-decoration decoration-3"></div>
        <div className="cookie-shine"></div>
      </button>
      <header>
        <h1 className="main-title">🥠 Biscoito da Sorte</h1>
        <p className="subtitle">Clique no biscoito para descobrir sua fortuna!</p>
      </header>
      <footer>
        <div className="magic-badge">✨ A magia está esperando ✨</div>
      </footer>
    </section>
  )
}
