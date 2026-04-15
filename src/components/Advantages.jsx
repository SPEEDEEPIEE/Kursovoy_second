import React from 'react'

const advantages = [
  { icon: 'fas fa-chalkboard-teacher', color: 'text-codegrow-primary', title: 'Опытные Преподаватели', desc: 'Обучение ведут практикующие специалисты из ведущих IT-компаний с многолетним опытом.' },
  { icon: 'fas fa-laptop-code', color: 'text-codegrow-secondary', title: 'Практический Подход', desc: 'Все курсы построены на реальных проектах, что позволяет сразу применять полученные знания.' },
  { icon: 'fas fa-handshake', color: 'text-codegrow-accent', title: 'Помощь с Трудоустройством', desc: 'Мы помогаем выпускникам составить резюме и пройти собеседования для успешного трудоустройства.' },
  { icon: 'fas fa-award', color: 'text-codegrow-primary', title: 'Сертификация', desc: 'По окончании курса выдается сертификат, подтверждающий вашу квалификацию.' },
  { icon: 'fas fa-headset', color: 'text-codegrow-secondary', title: 'Индивидуальная Поддержка', desc: 'Кураторы и преподаватели всегда готовы ответить на вопросы и помочь в обучении.' },
  { icon: 'fas fa-users-gear', color: 'text-codegrow-accent', title: 'Сообщество и Нетворкинг', desc: 'Доступ к активному сообществу студентов и выпускников для обмена опытом.' },
]

const Advantages = () => {
  return (
    <section className="mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-codegrow-dark">Почему выбирают CodeGrow?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {advantages.map((item, index) => (
          <div key={index} className="card-hover-effect bg-white p-6 rounded-xl shadow-md border border-border-primary text-center">
            <i className={`${item.icon} text-5xl ${item.color} mb-4`}></i>
            <h3 className="text-xl font-semibold mb-2 text-codegrow-dark">{item.title}</h3>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Advantages