import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="bg-codegrow-dark text-white rounded-xl shadow-lg p-8 md:p-12 lg:p-16 text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Готовы изменить свою карьеру?</h2>
      <p className="text-lg md:text-xl mb-8 opacity-90">
        Присоединяйтесь к тысячам успешных выпускников CodeGrow и начните свой путь в IT уже сегодня!
      </p>
      <Link 
        to="/kontakts" 
        className="btn-primary bg-codegrow-accent text-codegrow-dark px-10 py-4 rounded-lg text-xl font-semibold hover:bg-codegrow-primary hover:text-white transition-all inline-block"
      >
        Записаться на консультацию
      </Link>
    </section>
  )
}

export default CTA