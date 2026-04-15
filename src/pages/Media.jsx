import React from 'react'

const Media = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-codegrow-dark">Медиа</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <i className="fas fa-video text-6xl text-gray-500"></i>
          </div>
          <div className="p-4">
            <h3 className="font-semibold">Видео-урок: Введение в Python</h3>
            <p className="text-gray-600 text-sm">Просмотров: 1 234</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <i className="fas fa-newspaper text-6xl text-gray-500"></i>
          </div>
          <div className="p-4">
            <h3 className="font-semibold">Статья: Как выбрать курс</h3>
            <p className="text-gray-600 text-sm">Дата: 10.04.2025</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-gray-300 h-48 flex items-center justify-center">
            <i className="fas fa-podcast text-6xl text-gray-500"></i>
          </div>
          <div className="p-4">
            <h3 className="font-semibold">Подкаст: Карьера в IT</h3>
            <p className="text-gray-600 text-sm">Длительность: 45 мин</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Media