import React from 'react'

const Kursi = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-codegrow-dark">Наши курсы</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">Python разработчик</h3>
          <p className="text-gray-600">Полный курс по Python с нуля до профессионала</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">Веб-разработка</h3>
          <p className="text-gray-600">Frontend и Backend разработка на JavaScript</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">Аналитика данных</h3>
          <p className="text-gray-600">Анализ данных с использованием Python и SQL</p>
        </div>
      </div>
    </div>
  )
}

export default Kursi