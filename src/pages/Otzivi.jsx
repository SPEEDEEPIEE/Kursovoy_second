import React from 'react'

const Otzivi = () => {
  const reviews = [
    { name: 'Михаил', text: 'Отличные курсы! После обучения нашел работу разработчиком.', rating: 5 },
    { name: 'Екатерина', text: 'Преподаватели очень понятно объясняют материал. Рекомендую!', rating: 5 },
    { name: 'Алексей', text: 'Хорошая программа обучения, много практики.', rating: 4 },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-codegrow-dark">Отзывы студентов</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-3">
              <i className="fas fa-user-circle text-3xl text-codegrow-primary mr-3"></i>
              <div>
                <h3 className="font-semibold text-lg">{review.name}</h3>
                <div className="text-yellow-500">
                  {'★'.repeat(review.rating)}{'☆'.repeat(5-review.rating)}
                </div>
              </div>
            </div>
            <p className="text-gray-700">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Otzivi