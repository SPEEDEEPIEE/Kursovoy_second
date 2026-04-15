import React from 'react'

const About = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-codegrow-dark">О нас</h1>
      <div className="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto">
        <p className="text-lg mb-4">
          CodeGrow - это современная образовательная платформа, созданная для тех, кто хочет освоить IT-профессии с нуля или повысить свою квалификацию.
        </p>
        <p className="text-lg mb-4">
          Наша миссия - сделать качественное IT-образование доступным для каждого.
        </p>
        <p className="text-lg">
          Мы гордимся нашими выпускниками, которые успешно работают в ведущих IT-компаниях.
        </p>
      </div>
    </div>
  )
}

export default About