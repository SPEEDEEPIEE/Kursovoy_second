import React from 'react'

const steps = [
  { number: '1', color: 'bg-codegrow-primary', title: 'Выберите Курс', desc: 'Ознакомьтесь с нашим каталогом и выберите программу, которая подходит именно вам.' },
  { number: '2', color: 'bg-codegrow-secondary', title: 'Пройдите Обучение', desc: 'Изучайте материалы, выполняйте практические задания под руководством наставников.' },
  { number: '3', color: 'bg-codegrow-accent', title: 'Защитите Проект', desc: 'Создайте собственный проект, который станет частью вашего портфолио.' },
  { number: '4', color: 'bg-codegrow-primary', title: 'Начните Карьеру', desc: 'Получите наш сертификат и поддержку в трудоустройстве для старта вашей IT-карьеры.' },
]

const HowItWorks = () => {
  return (
    <section className="mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-codegrow-dark">Как это работает?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div key={step.number} className="bg-white p-6 rounded-xl shadow-md border border-border-primary text-center">
            <div className={`w-16 h-16 ${step.color} text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4`}>
              {step.number}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-codegrow-dark">{step.title}</h3>
            <p className="text-gray-700">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks