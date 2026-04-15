import React, { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    { question: 'Как записаться на курс?', answer: 'Вы можете записаться через форму на сайте или позвонить нам по телефону.' },
    { question: 'Есть ли рассрочка?', answer: 'Да, мы предоставляем рассрочку на все курсы.' },
    { question: 'Выдают ли сертификат?', answer: 'Да, после успешного окончания курса выдается сертификат.' },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-codegrow-dark">Часто задаваемые вопросы</h1>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 bg-white rounded-xl shadow-md">
            <button
              className="w-full text-left p-4 font-semibold text-lg flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              <i className={`fas fa-chevron-${openIndex === index ? 'up' : 'down'} text-codegrow-primary`}></i>
            </button>
            {openIndex === index && (
              <div className="p-4 pt-0 text-gray-600 border-t">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ