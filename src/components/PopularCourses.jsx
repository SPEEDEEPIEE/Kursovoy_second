import React from 'react'
import { Link } from 'react-router-dom'

const courses = [
  {
    id: 'python',
    img: 'https://via.placeholder.com/400x300?text=Python+Course',
    tag: 'Python - разработчик',
    price: '3600₽/мес.',
    title: 'Python-разработчик: от синтаксиса до веб-приложений',
    desc: 'Изучите Python с нуля и научитесь создавать мощные веб-приложения, автоматизировать задачи и работать с базами данных.',
    duration: '10 месяцев',
    level: 'Для начинающих',
    link: '/kurs-python'
  },
  {
    id: 'analytics',
    img: 'https://via.placeholder.com/400x300?text=Data+Analytics',
    tag: 'Аналитика данных',
    price: '3750₽/мес.',
    title: 'Аналитика данных: от Excel до Big Data',
    desc: 'Научитесь собирать, обрабатывать и интерпретировать данные. Курс охватывает инструменты от Excel до Python и SQL для анализа больших объемов информации.',
    duration: '8 месяцев',
    level: 'Средний',
    link: '/kurs-analytics'
  },
  {
    id: 'web',
    img: 'https://via.placeholder.com/400x300?text=Web+Development',
    tag: 'Веб-разработка',
    price: '3900₽/мес.',
    title: 'Веб-разработка: Frontend и Backend',
    desc: 'Создайте свой первый веб-сайт или веб-приложение. Вы изучите HTML, CSS, JavaScript, а также основы работы с базами данных и фреймворками.',
    duration: '9 месяцев',
    level: 'Для начинающих',
    link: '/kurs-web'
  }
]

const PopularCourses = () => {
  return (
    <section className="mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-codegrow-dark">Популярные Курсы</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {courses.map((course) => (
          <div key={course.id} className="card-hover-effect bg-white rounded-xl shadow-lg overflow-hidden border border-border-primary">
            <div className="relative h-48 md:h-56 overflow-hidden">
              <img src={course.img} alt={course.title} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-codegrow-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                {course.tag}
              </div>
              <div className="absolute bottom-4 left-4 bg-codegrow-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                {course.price}
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-codegrow-dark">{course.title}</h3>
              <p className="text-gray-600 mb-4 text-base">{course.desc}</p>
              <div className="flex items-center text-gray-700 text-sm mb-2">
                <i className="fas fa-clock mr-2 text-codegrow-primary"></i> <span>Длительность: {course.duration}</span>
              </div>
              <div className="flex items-center text-gray-700 text-sm mb-4">
                <i className="fas fa-chart-line mr-2 text-codegrow-primary"></i> <span>Уровень: {course.level}</span>
              </div>
              <Link to={course.link}>
                <button className="btn-primary w-full bg-codegrow-primary text-white font-medium py-3 px-4 rounded-lg shadow-md hover:bg-button-hover transition-all">
                  Подробнее
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/kursi" className="btn-primary bg-codegrow-secondary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-codegrow-primary transition-all inline-block">
          Все курсы
        </Link>
      </div>
    </section>
  )
}

export default PopularCourses