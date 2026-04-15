import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full bg-codegrow-dark text-white mt-12 md:mt-16">
      <div className="container mx-auto px-4 py-8 md:py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 mb-8 md:mb-10">
          <div className="max-w-md mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">CodeGrow</h2>
            <p className="text-codegrow-light text-base">
              Образовательная платформа, на которой можно с нуля освоить востребованную IT-профессию,
              а также получить знания и навыки для перехода на новый уровень в карьере.
            </p>
          </div>

          <div className="grid gap-3 md:gap-5 mb-6 md:mb-0">
            <h3 className="text-xl md:text-2xl font-bold uppercase text-codegrow-primary">Контакты</h3>
            <div className="text-codegrow-light text-base">
              <p><i className="fas fa-map-marker-alt mr-2"></i> г. Иркутск, ул. Ленина 5а</p>
              <p><i className="fas fa-envelope mr-2"></i> Email: info@codegrow.ru</p>
              <p><i className="fas fa-phone mr-2"></i> Телефон: +7 950 999 99 99</p>
            </div>
          </div>

          <div className="grid gap-3 md:gap-5">
            <h3 className="text-xl md:text-2xl font-bold uppercase text-codegrow-primary">Социальные сети</h3>
            <div className="flex gap-4 md:gap-5">
              <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-codegrow-primary rounded-full flex items-center justify-center hover:bg-codegrow-accent transition-colors">
                <img src="logo/VK_Compact_Logo_(2021-present).svg.webp" alt="VK" className="w-6 h-6 md:w-7 md:h-7" />
              </a>
              <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-codegrow-primary rounded-full flex items-center justify-center hover:bg-codegrow-accent transition-colors">
                <img src="logo/Telegram_2019_Logo.svg.png" alt="Telegram" className="w-6 h-6 md:w-7 md:h-7" />
              </a>
              <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-codegrow-primary rounded-full flex items-center justify-center hover:bg-codegrow-accent transition-colors">
                <img src="logo/Instagram_logo_2022.svg.webp" alt="Instagram" className="w-6 h-6 md:w-7 md:h-7" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-10">
          <div>
            <h3 className="text-lg md:text-xl font-bold uppercase mb-3 md:mb-5 text-codegrow-primary">Курсы</h3>
            <ul className="space-y-2 text-codegrow-light text-base">
              <li><Link to="/kurs-python" className="hover:text-codegrow-accent transition-colors">Python-разработчик</Link></li>
              <li><Link to="/kurs-analytics" className="hover:text-codegrow-accent transition-colors">Аналитика данных</Link></li>
              <li><Link to="/kurs-web" className="hover:text-codegrow-accent transition-colors">Веб-разработка</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold uppercase mb-3 md:mb-5 text-codegrow-primary">Обучение</h3>
            <ul className="space-y-2 text-codegrow-light text-base">
              <li><Link to="/about" className="hover:text-codegrow-accent transition-colors">Формат обучения</Link></li>
              <li><Link to="/teachers" className="hover:text-codegrow-accent transition-colors">Преподаватели</Link></li>
              <li><Link to="/about" className="hover:text-codegrow-accent transition-colors">Трудоустройство</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold uppercase mb-3 md:mb-5 text-codegrow-primary">Поддержка</h3>
            <ul className="space-y-2 text-codegrow-light text-base">
              <li><Link to="/faq" className="hover:text-codegrow-accent transition-colors">FAQ</Link></li>
              <li><Link to="/otzivi" className="hover:text-codegrow-accent transition-colors">Отзывы</Link></li>
              <li><Link to="/kontakts" className="hover:text-codegrow-accent transition-colors">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold uppercase mb-3 md:mb-5 text-codegrow-primary">Компания</h3>
            <ul className="space-y-2 text-codegrow-light text-base">
              <li><Link to="/about" className="hover:text-codegrow-accent transition-colors">О нас</Link></li>
              <li><Link to="/teachers" className="hover:text-codegrow-accent transition-colors">Преподаватели</Link></li>
              <li><Link to="/vacancies" className="hover:text-codegrow-accent transition-colors">Вакансии</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-primary pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            <p className="text-codegrow-light text-sm md:text-base text-center md:text-left">© 2025 CodeGrow. Все права защищены</p>
            <div className="flex gap-4 md:gap-8 text-codegrow-light text-sm md:text-base">
              <a href="#" className="hover:text-codegrow-accent transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-codegrow-accent transition-colors">Договор оферты</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer