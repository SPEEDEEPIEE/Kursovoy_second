import React from 'react'
import { Link } from 'react-router-dom'

const news = [
  {
    id: 1,
    img: 'https://avatars.mds.yandex.net/i?id=d99acb49dae7c5142a187cfe1c69bb3f12c5a521-5349316-images-thumbs&n=13',
    title: 'Открытие нового курса по DevOps',
    date: '15 мая 2025',
    desc: 'Мы рады объявить о запуске нового продвинутого курса по DevOps. Изучите инструменты и практики для автоматизации развертывания и управления инфраструктурой.'
  },
  {
    id: 2,
    img: 'https://avatars.mds.yandex.net/i?id=e71b97c2da0acf150ca8ca92f97620d0_l-5299999-images-thumbs&n=13',
    title: 'Вебинар: Карьера в Frontend-разработке',
    date: '10 мая 2025',
    desc: 'Приглашаем на бесплатный вебинар с нашим ведущим преподавателем о перспективах и трендах в Frontend-разработке. Зарегистрируйтесь сейчас!'
  },
  {
    id: 3,
    img: 'https://lindeal.com/ld/images/2022/12/26/plyusy-i-minusy-professii-programmist.png',
    title: 'CodeGrow стал партнером IT-конференции',
    date: '01 мая 2025',
    desc: 'Мы гордимся тем, что стали официальным партнером ежегодной IT-конференции "TechInnovate 2025". Приходите на наш стенд!'
  }
]

const News = () => {
  return (
    <section className="mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-codegrow-dark">Последние Новости и События</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item) => (
          <div key={item.id} className="card-hover-effect bg-white rounded-xl shadow-md overflow-hidden border border-border-primary">
            <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-codegrow-dark">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{item.date}</p>
              <p className="text-gray-700 text-base">{item.desc}</p>
              <a href="#" className="text-codegrow-primary hover:underline font-medium mt-4 inline-block">
                Читать далее <i className="fas fa-arrow-right ml-1"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/media" className="btn-primary bg-codegrow-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-button-hover transition-all inline-block">
          Больше новостей
        </Link>
      </div>
    </section>
  )
}

export default News