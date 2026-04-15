import React from 'react'

const Kontakts = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-codegrow-dark">Контакты</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Наши контакты</h3>
          <p className="mb-2"><i className="fas fa-map-marker-alt text-codegrow-primary mr-2"></i> г. Иркутск, ул. Ленина 5а</p>
          <p className="mb-2"><i className="fas fa-phone text-codegrow-primary mr-2"></i> +7 (950) 999-99-99</p>
          <p className="mb-2"><i className="fas fa-envelope text-codegrow-primary mr-2"></i> info@codegrow.ru</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Режим работы</h3>
          <p className="mb-2">Пн-Пт: 9:00 - 20:00</p>
          <p className="mb-2">Сб: 10:00 - 18:00</p>
          <p>Вс: Выходной</p>
        </div>
      </div>
    </div>
  )
}

export default Kontakts