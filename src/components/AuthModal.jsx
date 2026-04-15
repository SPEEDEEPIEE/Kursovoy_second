import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('login')
  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '', confirmPassword: '' })
  const navigate = useNavigate()

  // Блокировка скролла при открытом модальном окне
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  if (!isOpen) return null

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    if (loginData.email === 'Admin@gmail.com' && loginData.password === 'admin') {
      alert('Вы успешно вошли в аккаунт!')
      onClose()
      navigate('/account')
    } else {
      alert('Неверный email или пароль. Попробуйте еще раз.')
    }
  }

  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    if (registerData.password !== registerData.confirmPassword) {
      alert('Пароли не совпадают! Пожалуйста, проверьте.')
      return
    }
    alert('Регистрация успешна! Теперь вы можете войти.')
    setLoginData({ email: registerData.email, password: registerData.password })
    setActiveTab('login')
    setRegisterData({ name: '', email: '', password: '', confirmPassword: '' })
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  // Переиспользуемый компонент поля ввода для чистоты кода
  const InputField = ({ label, type, value, onChange, placeholder, id }) => (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-slate-300 ml-1">{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500 transition-all duration-200"
        placeholder={placeholder}
        required
      />
    </div>
  )

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      onClick={handleOverlayClick}
    >
      <div className="relative w-full max-w-md bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200 z-10"
          aria-label="Закрыть"
        >
          ✕
        </button>

        {/* Заголовок */}
        <div className="px-6 pt-8 pb-4 text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            {activeTab === 'login' ? 'Вход в аккаунт' : 'Создать аккаунт'}
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            {activeTab === 'login' ? 'Введите данные для доступа к платформе' : 'Заполните форму для начала обучения'}
          </p>
        </div>

        {/* Табы переключения */}
        <div className="flex px-6 mb-6">
          <div className="flex w-full bg-white/5 rounded-xl p-1">
            {['login', 'register'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab === 'login' ? 'Вход' : 'Регистрация'}
              </button>
            ))}
          </div>
        </div>

        {/* Формы */}
        <div className="px-6 pb-8">
          {activeTab === 'login' ? (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <InputField 
                label="Email" type="email" 
                value={loginData.email} 
                onChange={(e) => setLoginData({...loginData, email: e.target.value})} 
                placeholder="name@example.com" id="authEmail" 
              />
              <InputField 
                label="Пароль" type="password" 
                value={loginData.password} 
                onChange={(e) => setLoginData({...loginData, password: e.target.value})} 
                placeholder="••••••••" id="authPassword" 
              />
              <button 
                type="submit" 
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 mt-2"
              >
                Войти
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <InputField 
                label="Имя" type="text" 
                value={registerData.name} 
                onChange={(e) => setRegisterData({...registerData, name: e.target.value})} 
                placeholder="Ваше имя" id="regName" 
              />
              <InputField 
                label="Email" type="email" 
                value={registerData.email} 
                onChange={(e) => setRegisterData({...registerData, email: e.target.value})} 
                placeholder="name@example.com" id="regEmail" 
              />
              <InputField 
                label="Пароль" type="password" 
                value={registerData.password} 
                onChange={(e) => setRegisterData({...registerData, password: e.target.value})} 
                placeholder="Минимум 6 символов" id="regPassword" 
              />
              <InputField 
                label="Подтвердите пароль" type="password" 
                value={registerData.confirmPassword} 
                onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})} 
                placeholder="Повторите пароль" id="regConfirmPassword" 
              />
              <button 
                type="submit" 
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 mt-2"
              >
                Зарегистрироваться
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default AuthModal