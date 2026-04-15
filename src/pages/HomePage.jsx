import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const HomePage = ({ onOpenAuth }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [counters, setCounters] = useState({ students: 0, experts: 0, employment: 0, support: 0 })
  const [visibleSections, setVisibleSections] = useState({})
  const statsRef = useRef(null)
  const countersAnimated = useRef(false)

  // Эффекты наблюдения, мыши и авто-переключения отзывов
  useEffect(() => {
    // Intersection Observer для секций
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.15 }
    )
    document.querySelectorAll('section[id]').forEach((sec) => sectionObserver.observe(sec))

    // Observer для счётчиков (запускаем анимацию только один раз)
    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countersAnimated.current) {
          animateNumbers()
          countersAnimated.current = true
        }
      },
      { threshold: 0.3 }
    )
    if (statsRef.current) statsObserver.observe(statsRef.current)

    // Параллакс мыши
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Авто-смена отзывов
    const interval = setInterval(() => setActiveTestimonial((prev) => (prev + 1) % 3), 6000)

    return () => {
      clearInterval(interval)
      window.removeEventListener('mousemove', handleMouseMove)
      sectionObserver.disconnect()
      statsObserver.disconnect()
    }
  }, [])

  // Анимация цифр
  const animateNumbers = () => {
    const targets = { students: 5000, experts: 50, employment: 100, support: 24 }
    const duration = 2000
    const startTime = performance.now()

    const step = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3) // easeOutCubic

      setCounters({
        students: Math.floor(ease * targets.students),
        experts: Math.floor(ease * targets.experts),
        employment: Math.floor(ease * targets.employment),
        support: Math.floor(ease * targets.support),
      })

      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  const technologies = ['PYTHON', 'JAVASCRIPT', 'REACT', 'NODE.JS', 'TYPESCRIPT', 'DOCKER', 'KUBERNETES', 'AWS', 'MONGODB', 'POSTGRESQL']

  return (
    <div className="bg-slate-950 text-white overflow-x-hidden font-sans">
      {/* 🔹 HERO СЕКЦИЯ */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-emerald-900 opacity-90" />
        
        {/* Динамическое свечение, следующее за мышью */}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.12),transparent_60%)] pointer-events-none"
          style={{ transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`, transition: 'transform 0.15s ease-out' }}
        />
        
        {/* Плавающие фоновые элементы */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8 transition-all duration-700 ${visibleSections.hero ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-cyan-200/80 uppercase">Профессиональное IT-образование</span>
          </div>

          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tight transition-all duration-700 delay-200 ${visibleSections.hero ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">CodeGrow</span>
          </h1>

          <p className={`text-xl md:text-2xl text-blue-100/70 mb-4 max-w-3xl mx-auto transition-all duration-700 delay-400 ${visibleSections.hero ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Трансформация карьеры в мире технологий
          </p>
          <p className={`text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-600 ${visibleSections.hero ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Интенсивное обучение от экспертов индустрии. Практико-ориентированная программа с гарантией результата и карьерным ростом.
          </p>

          <div className={`flex flex-col sm:flex-row gap-5 justify-center transition-all duration-700 delay-800 ${visibleSections.hero ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <Link to="/kursi" className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-xl font-semibold tracking-wide overflow-hidden shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40">
              <span className="relative z-10">НАЧАТЬ ОБУЧЕНИЕ</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <button onClick={onOpenAuth} className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold tracking-wide hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105">
              ЛИЧНЫЙ КАБИНЕТ
            </button>
          </div>

          {/* Счётчики */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {[
              { value: counters.students, label: 'ВЫПУСКНИКОВ', suffix: '+' },
              { value: counters.experts, label: 'ЭКСПЕРТОВ', suffix: '+' },
              { value: counters.employment, label: 'ТРУДОУСТРОЙСТВА', suffix: '%' },
              { value: `24/${counters.support}`, label: 'ПОДДЕРЖКА', suffix: '' }
            ].map((stat, idx) => (
              <div key={idx} className="group p-5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  {typeof stat.value === 'number' ? `${stat.value}${stat.suffix}` : stat.value}
                </div>
                <div className="text-slate-400 text-xs tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-cyan-400 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* 🔹 ТЕХНОЛОГИИ */}
      <section id="tech" className="py-20 bg-slate-900/50 border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <p className="text-cyan-400/80 text-xs tracking-[0.3em] mb-10 font-mono">ТЕХНОЛОГИЧЕСКИЙ СТЕК</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {technologies.map((tech, idx) => (
              <div key={idx} className="group px-5 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-emerald-500/40 transition-all duration-300 cursor-default">
                <span className="text-slate-400 group-hover:text-emerald-400 font-mono text-sm tracking-wide transition-colors">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 ПРЕИМУЩЕСТВА */}
      <section id="advantages" className="py-24 bg-slate-950 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${visibleSections.advantages ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <span className="bg-gradient-to-r from-white via-blue-200 to-emerald-200 bg-clip-text text-transparent">Ключевые преимущества</span>
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full transition-all duration-700 delay-200 ${visibleSections.advantages ? 'scale-x-100' : 'scale-x-0'}`} />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Практический подход', desc: 'Реальные проекты и кейсы от индустрии', stat: '80% ПРАКТИКИ', icon: '💻' },
              { title: 'Экспертное менторство', desc: 'Индивидуальные сессии с техлидом', stat: '24/7 ПОДДЕРЖКА', icon: '👨‍🏫' },
              { title: 'Карьерный центр', desc: 'Помощь в трудоустройстве и стажировках', stat: '100+ КОМПАНИЙ', icon: '🚀' },
              { title: 'Актуальный контент', desc: 'Программа обновляется каждый квартал', stat: 'АВТОРСКИЕ МАТЕРИАЛЫ', icon: '📚' }
            ].map((item, idx) => (
              <div key={idx} className={`p-6 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-2 ${visibleSections.advantages ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">{item.desc}</p>
                <div className="text-xs font-mono tracking-wider text-cyan-400">{item.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 ОТЗЫВЫ */}
      <section id="testimonials" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-950/30 to-slate-900" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${visibleSections.testimonials ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <span className="bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent">Результаты выпускников</span>
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full transition-all duration-700 delay-200 ${visibleSections.testimonials ? 'scale-x-100' : 'scale-x-0'}`} />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative min-h-[300px] md:min-h-[350px]">
              {[
                { name: 'Александр Воронов', role: 'Senior Frontend Developer, Yandex', text: 'Программа превзошла ожидания. За 8 месяцев прошел путь от Junior до Middle. Особо отмечу менторство и карьерную поддержку.', rating: 5 },
                { name: 'Екатерина Морозова', role: 'Data Science Team Lead, Sber', text: 'Интенсивная программа с фокусом на практику. После курса получил оффер в топовую компанию. Рекомендую профессионалам.', rating: 5 },
                { name: 'Дмитрий Волков', role: 'Fullstack Architect', text: 'Лучшее вложение в карьеру. Материалы высшего качества, эксперты из индустрии. Результат - рост зарплаты на 200%', rating: 5 }
              ].map((testimonial, idx) => (
                <div key={idx} className={`absolute inset-0 transition-all duration-700 ease-in-out ${activeTestimonial === idx ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95 pointer-events-none'}`}>
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/20">
                    <div className="flex gap-1 mb-6 text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                    </div>
                    <p className="text-slate-200 text-lg md:text-xl leading-relaxed mb-8 italic">"{testimonial.text}"</p>
                    <div>
                      <div className="font-bold text-white text-lg">{testimonial.name}</div>
                      <div className="text-cyan-400 text-sm font-medium">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center gap-3 mt-8">
              {[0, 1, 2].map((idx) => (
                <button key={idx} onClick={() => setActiveTestimonial(idx)} className={`transition-all duration-500 rounded-full ${activeTestimonial === idx ? 'w-12 h-2 bg-gradient-to-r from-cyan-500 to-emerald-500' : 'w-3 h-3 bg-white/20 hover:bg-white/40'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 CTA СЕКЦИЯ */}
      <section id="cta" className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 opacity-90" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-700 ${visibleSections.cta ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Готовы к трансформации?
          </h2>
          <p className={`text-xl text-white/90 mb-12 max-w-2xl mx-auto transition-all duration-700 delay-200 ${visibleSections.cta ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Присоединяйтесь к сообществу профессионалов. Старт ближайшего потока через 2 недели.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-400 ${visibleSections.cta ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <Link to="/kontakts" className="px-10 py-4 bg-white text-blue-600 rounded-xl font-semibold tracking-wide hover:shadow-2xl transition-all duration-300 hover:scale-105 shadow-lg">
              ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
            </Link>
            <button onClick={onOpenAuth} className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold tracking-wide hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105">
              ЗАПИСАТЬСЯ НА КУРС
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage