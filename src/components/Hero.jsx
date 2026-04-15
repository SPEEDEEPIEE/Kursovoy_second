import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="hero-gradient rounded-xl shadow-lg text-white p-8 md:p-12 lg:p-16 mb-12 md:mb-16 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-3/5 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Откройте Ваш Потенциал в IT с <span className="text-codegrow-accent">CodeGrow</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Начните свой путь в мире программирования и технологий с нашими экспертными курсами.
          Получите практические навыки, востребованные в индустрии, и станьте частью IT-будущего.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link 
            to="/kursi" 
            className="btn-primary bg-codegrow-accent text-codegrow-dark px-8 py-3 rounded-lg text-lg font-semibold hover:bg-codegrow-primary hover:text-white transition-all text-center"
          >
            Изучить курсы
          </Link>
          <Link 
            to="/about" 
            className="btn-primary bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-codegrow-dark transition-all text-center"
          >
            Узнать больше о нас
          </Link>
        </div>
      </div>
      <div className="md:w-2/5 flex justify-center">
        <img 
          src="https://avatars.mds.yandex.net/i?id=5c54da625c8c13dd086425ebf156bade_l-12813659-images-thumbs&n=13" 
          alt="IT Learning" 
          className="rounded-lg shadow-xl max-w-full h-auto"
        />
      </div>
    </section>
  )
}

export default Hero