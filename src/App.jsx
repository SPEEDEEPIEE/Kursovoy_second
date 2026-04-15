import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AuthModal from './components/AuthModal'
import HomePage from './pages/HomePage'

// Страницы
import Kursi from './pages/Kursi'
import Kontakts from './pages/Kontakts'
import About from './pages/About'
import Teachers from './pages/Teachers'
import Otzivi from './pages/Otzivi'
import FAQ from './pages/FAQ'
import Media from './pages/Media'
import Account from './pages/Account'

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  const openAuthModal = () => setIsAuthModalOpen(true)
  const closeAuthModal = () => setIsAuthModalOpen(false)

  return (
    <div className="font-roboto-condensed bg-codegrow-light text-codegrow-dark">
      <Navbar onOpenAuth={openAuthModal} />
      
      <Routes>
        <Route path="/" element={<HomePage onOpenAuth={openAuthModal} />} />
        <Route path="/kursi" element={<Kursi />} />
        <Route path="/kontakts" element={<Kontakts />} />
        <Route path="/about" element={<About />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/otzivi" element={<Otzivi />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/media" element={<Media />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      
      <Footer />
      
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </div>
  )
}

export default App