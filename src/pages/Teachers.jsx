import React from 'react'

const Teachers = () => {
  const teachers = [
    { name: 'Анна Смирнова', subject: 'Python разработка', experience: '5 лет' },
    { name: 'Дмитрий Иванов', subject: 'Веб-разработка', experience: '7 лет' },
    { name: 'Елена Петрова', subject: 'Аналитика данных', experience: '4 года' },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-codegrow-dark">Наши преподаватели</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((teacher, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-32 h-32 bg-codegrow-primary rounded-full mx-auto mb-4 flex items-center justify-center">
              <i className="fas fa-user text-white text-5xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">{teacher.name}</h3>
            <p className="text-codegrow-primary mb-1">{teacher.subject}</p>
            <p className="text-gray-600">Опыт: {teacher.experience}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Teachers