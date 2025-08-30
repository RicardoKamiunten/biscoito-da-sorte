'use client'

import React, { useState } from 'react'
import { RefreshCcw, Sparkles } from 'lucide-react'

interface Fortune {
  text: string
  numbers: number[]
}

export default function FortuneCookieApp() {
  const [isOpened, setIsOpened] = useState(false)
  const [isOpening, setIsOpening] = useState(false)
  const [currentFortune, setCurrentFortune] = useState<Fortune | null>(null)

  const fortunes: Fortune[] = [
    {
      text: "Duas estradas divergiam em uma floresta, e eu peguei a menos percorrida, e isso fez toda a diferença.",
      numbers: [14, 28, 35, 49, 56, 63]
    },
    {
      text: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      numbers: [7, 21, 33, 42, 55, 68]
    },
    {
      text: "A única forma de fazer um excelente trabalho é amar o que você faz.",
      numbers: [3, 17, 29, 44, 51, 72]
    },
    {
      text: "Grandes coisas nunca vêm da zona de conforto.",
      numbers: [9, 23, 31, 46, 58, 69]
    },
    {
      text: "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
      numbers: [5, 18, 27, 41, 54, 67]
    },
    {
      text: "Cada dia é uma nova oportunidade para ser uma versão melhor de si mesmo.",
      numbers: [2, 16, 24, 38, 53, 71]
    },
    {
      text: "A persistência é o caminho do êxito.",
      numbers: [11, 25, 37, 43, 59, 66]
    },
    {
      text: "Acredite em si mesmo e todo o resto se encaixará.",
      numbers: [6, 19, 32, 47, 52, 74]
    },
    {
      text: "A vida é 10% do que acontece com você e 90% de como você reage a isso.",
      numbers: [1, 15, 26, 39, 57, 70]
    },
    {
      text: "O melhor momento para plantar uma árvore foi há 20 anos. O segundo melhor momento é agora.",
      numbers: [8, 22, 34, 45, 61, 73]
    }
  ]

  const handleCookieClick = () => {
    if (isOpened || isOpening) return
    
    setIsOpening(true)
    
    setTimeout(() => {
      setIsOpened(true)
      setIsOpening(false)
      const randomIndex = Math.floor(Math.random() * fortunes.length)
      setCurrentFortune(fortunes[randomIndex])
    }, 1200)
  }

  const handleNewFortune = () => {
    setIsOpened(false)
    setIsOpening(false)
    setCurrentFortune(null)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      position: 'relative'
    }}>
      
      {/* Estrelinhas de fundo */}
      <div style={{ position: 'absolute', top: '10%', left: '10%', color: '#f97316', animation: 'pulse 2s infinite' }}>
        <Sparkles size={20} />
      </div>
      <div style={{ position: 'absolute', top: '20%', right: '15%', color: '#f59e0b', animation: 'pulse 2s infinite', animationDelay: '0.5s' }}>
        <Sparkles size={16} />
      </div>
      <div style={{ position: 'absolute', bottom: '20%', left: '20%', color: '#f97316', animation: 'pulse 2s infinite', animationDelay: '1s' }}>
        <Sparkles size={18} />
      </div>
      <div style={{ position: 'absolute', bottom: '15%', right: '10%', color: '#f59e0b', animation: 'pulse 2s infinite', animationDelay: '1.5s' }}>
        <Sparkles size={22} />
      </div>

      <div style={{ textAlign: 'center', maxWidth: '600px', width: '100%' }}>
        
        {/* ESTADO: Biscoito fechado */}
        {!isOpened && !isOpening && (
          <div>
            {/* BISCOITO */}
            <div 
              onClick={handleCookieClick}
              style={{
                width: '240px',
                height: '150px',
                backgroundColor: '#fbbf24',
                borderRadius: '50%',
                margin: '0 auto 40px',
                cursor: 'pointer',
                border: '6px solid #f59e0b',
                boxShadow: '0 12px 30px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.2)',
                transform: 'rotate(12deg)',
                transition: 'all 0.3s ease',
                position: 'relative',
                animation: 'bounce 2s infinite'
              }}
              onMouseOver={(e) => {
                const target = e.target as HTMLDivElement;
                target.style.transform = 'rotate(12deg) scale(1.1)'
                target.style.boxShadow = '0 15px 35px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.2)'
              }}
              onMouseOut={(e) => {
                const target = e.target as HTMLDivElement;
                target.style.transform = 'rotate(12deg) scale(1)'
                target.style.boxShadow = '0 12px 30px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.2)'
              }}
            >
              {/* Decorações do biscoito */}
              <div style={{
                position: 'absolute',
                top: '25px',
                left: '50px',
                width: '24px',
                height: '24px',
                backgroundColor: '#fde68a',
                borderRadius: '50%',
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)'
              }}></div>
              
              <div style={{
                position: 'absolute',
                bottom: '30px',
                right: '45px',
                width: '18px',
                height: '18px',
                backgroundColor: '#fed7aa',
                borderRadius: '50%',
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)'
              }}></div>

              <div style={{
                position: 'absolute',
                top: '50px',
                right: '60px',
                width: '12px',
                height: '12px',
                backgroundColor: '#fef3c7',
                borderRadius: '50%',
                boxShadow: 'inset 0 1px 1px rgba(0,0,0,0.1)'
              }}></div>

              {/* Brilho */}
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '60px',
                width: '80px',
                height: '35px',
                backgroundColor: 'rgba(255,255,255,0.3)',
                borderRadius: '50%',
                transform: 'rotate(-30deg)'
              }}></div>
            </div>

            {/* TÍTULO */}
            <h1 style={{
              fontSize: '56px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #d97706, #f97316)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '25px'
            }}>
              🥠 Biscoito da Sorte
            </h1>
            
            {/* SUBTÍTULO */}
            <p style={{
              fontSize: '22px',
              color: '#92400e',
              marginBottom: '35px',
              fontWeight: '500'
            }}>
              Clique no biscoito para descobrir sua fortuna!
            </p>
            
            {/* BADGE */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
              color: '#92400e',
              padding: '15px 25px',
              borderRadius: '50px',
              fontWeight: 'bold',
              fontSize: '16px',
              boxShadow: '0 4px 15px rgba(245,158,11,0.3)',
              animation: 'pulse 2s infinite'
            }}>
              <Sparkles size={20} />
              A magia está esperando
              <Sparkles size={20} />
            </div>
          </div>
        )}

        {/* ESTADO: Abrindo biscoito */}
        {isOpening && (
          <div>
            <div style={{
              width: '240px',
              height: '150px',
              margin: '0 auto 40px',
              position: 'relative'
            }}>
              {/* Metade esquerda */}
              <div style={{
                position: 'absolute',
                left: '0',
                top: '0',
                width: '110px',
                height: '150px',
                backgroundColor: '#fbbf24',
                borderRadius: '110px 0 0 110px',
                border: '6px solid #f59e0b',
                transform: 'rotate(-25deg) translateX(-15px)',
                transition: 'all 1.2s ease-out',
                boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
              }}></div>
              
              {/* Metade direita */}
              <div style={{
                position: 'absolute',
                right: '0',
                top: '0',
                width: '110px',
                height: '150px',
                backgroundColor: '#fbbf24',
                borderRadius: '0 110px 110px 0',
                border: '6px solid #f59e0b',
                transform: 'rotate(25deg) translateX(15px)',
                transition: 'all 1.2s ease-out',
                boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
              }}></div>
            </div>
            
            <h2 style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#92400e',
              marginBottom: '25px'
            }}>
              Revelando sua fortuna...
            </h2>
            
            <RefreshCcw 
              size={40} 
              style={{
                color: '#f59e0b',
                animation: 'spin 1s linear infinite'
              }} 
            />
          </div>
        )}

        {/* ESTADO: Biscoito aberto com fortuna */}
        {isOpened && currentFortune && (
          <div>
            {/* Biscoito quebrado */}
            <div style={{
              width: '240px',
              height: '150px',
              margin: '0 auto 40px',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                left: '0',
                top: '0',
                width: '110px',
                height: '150px',
                backgroundColor: '#fbbf24',
                borderRadius: '110px 0 0 110px',
                border: '6px solid #f59e0b',
                transform: 'rotate(-45deg) translateX(-25px)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
              }}></div>
              
              <div style={{
                position: 'absolute',
                right: '0',
                top: '0',
                width: '110px',
                height: '150px',
                backgroundColor: '#fbbf24',
                borderRadius: '0 110px 110px 0',
                border: '6px solid #f59e0b',
                transform: 'rotate(45deg) translateX(25px)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
              }}></div>
              
              {/* Migalhas */}
              <div style={{
                position: 'absolute',
                top: '60px',
                left: '90px',
                width: '6px',
                height: '6px',
                backgroundColor: '#f59e0b',
                borderRadius: '50%',
                animation: 'bounce 1s infinite'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: '70px',
                right: '100px',
                width: '4px',
                height: '4px',
                backgroundColor: '#fbbf24',
                borderRadius: '50%',
                animation: 'bounce 1s infinite',
                animationDelay: '0.2s'
              }}></div>
            </div>

            {/* Card da fortuna */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15), 0 0 0 1px rgba(245,158,11,0.1)',
              padding: '40px 30px',
              maxWidth: '550px',
              margin: '0 auto',
              animation: 'fadeIn 0.8s ease-out'
            }}>
              
              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '70px',
                  height: '70px',
                  background: 'linear-gradient(135deg, #f97316, #f59e0b)',
                  borderRadius: '50%',
                  marginBottom: '20px',
                  boxShadow: '0 8px 25px rgba(245,158,11,0.3)'
                }}>
                  <Sparkles size={35} color="white" />
                </div>
                <h2 style={{
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: '#92400e'
                }}>✨ Sua Fortuna ✨</h2>
              </div>

              <blockquote style={{
                color: '#374151',
                fontSize: '20px',
                fontStyle: 'italic',
                lineHeight: '1.6',
                textAlign: 'center',
                marginBottom: '35px',
                padding: '0 15px'
              }}>
                "{currentFortune.text}"
              </blockquote>

              <div style={{ textAlign: 'center', marginBottom: '35px' }}>
                <h3 style={{
                  color: '#f59e0b',
                  fontWeight: 'bold',
                  marginBottom: '20px',
                  fontSize: '18px'
                }}>🍀 Seus Números da Sorte</h3>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '10px'
                }}>
                  {currentFortune.numbers.map((number, index) => (
                    <div 
                      key={index}
                      style={{
                        width: '50px',
                        height: '50px',
                        background: 'linear-gradient(135deg, #f97316, #f59e0b)',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '18px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 15px rgba(245,158,11,0.3)',
                        transition: 'transform 0.2s ease',
                        animation: 'fadeIn 0.6s ease-out',
                        animationDelay: `${index * 0.1}s`
                      }}
                      onMouseOver={(e) => {
                        const target = e.target as HTMLDivElement;
                        target.style.transform = 'scale(1.15)';
                      }}
                      onMouseOut={(e) => {
                        const target = e.target as HTMLDivElement;
                        target.style.transform = 'scale(1)';
                      }}
                    >
                      {number}
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handleNewFortune}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #f97316, #f59e0b)',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  padding: '18px 30px',
                  border: 'none',
                  borderRadius: '15px',
                  boxShadow: '0 8px 25px rgba(245,158,11,0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px'
                }}
                onMouseOver={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.transform = 'translateY(-2px)'
                  target.style.boxShadow = '0 12px 30px rgba(245,158,11,0.4)'
                }}
                onMouseOut={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.transform = 'translateY(0)'
                  target.style.boxShadow = '0 8px 25px rgba(245,158,11,0.3)'
                }}
              >
                <RefreshCcw size={22} />
                Nova Fortuna
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
          40%, 43% { transform: translateY(-30px); }
          70% { transform: translateY(-15px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}