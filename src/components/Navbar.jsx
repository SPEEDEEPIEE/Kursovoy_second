import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ onOpenAuth }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 50)
    })
    return () => window.removeEventListener('scroll', () => {})
  }, [])

  const navLinks = [
    { to: '/kursi', label: 'КУРСЫ' },
    { to: '/about', label: 'О НАС' },
    { to: '/teachers', label: 'ЭКСПЕРТЫ' },
    { to: '/kontakts', label: 'КОНТАКТЫ' },
  ]

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <header className="flex items-center justify-between py-4">
          <Link to="/">
            <h1 className="text-2xl font-bold tracking-wider">
              <span className="text-white">CODE</span>
              <span className="text-codegrow-accent">GROW</span>
            </h1>
          </Link>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.to} 
                to={link.to} 
                className="text-gray-300 hover:text-codegrow-accent transition-colors text-sm tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <button 
              onClick={onOpenAuth}
              className="px-6 py-2 bg-codegrow-accent text-codegrow-dark rounded-md text-sm font-semibold tracking-wide hover:bg-opacity-90 transition-all"
            >
              ВОЙТИ
            </button>
          </nav>
        </header>

        {/* Мобильное меню */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="py-4 space-y-3">
            {navLinks.map((link) => (
              <Link 
                key={link.to} 
                to={link.to} 
                className="block text-gray-300 hover:text-codegrow-accent transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button 
              onClick={() => {
                onOpenAuth()
                setIsMobileMenuOpen(false)
              }}
              className="w-full px-6 py-2 bg-codegrow-accent text-codegrow-dark rounded-md text-sm font-semibold tracking-wide"
            >
              ВОЙТИ
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar