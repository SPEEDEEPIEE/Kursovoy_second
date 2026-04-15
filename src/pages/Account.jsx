import React, { useState } from 'react'

const Account = () => {
  const [activeTab, setActiveTab] = useState('profile')
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [form, setForm] = useState({ name: 'Кустов', surname: 'Алексей', dob: '1990-01-01', email: 'Admin@gmail.com', phone: '+7 950 999 99 99', tz: 'MSK+3' })
  const [passwords, setPasswords] = useState({ current: '', new: '', confirm: '' })
  const [notifications, setNotifications] = useState({ email: true, course: true, sms: false })

  const handlePassword = (e) => {
    e.preventDefault()
    if (passwords.new !== passwords.confirm) {
      alert('Пароли не совпадают')
      return
    }
    alert('Пароль успешно обновлён')
    setPasswords({ current: '', new: '', confirm: '' })
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-10 p-6 bg-white/5 border border-white/10 rounded-2xl">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-3xl font-bold border-2 border-white/20">
            А
          </div>
          <div>
            <h1 className="text-2xl font-bold">{form.name} {form.surname}</h1>
            <p className="text-slate-400">{form.email}</p>
            <button className="mt-2 text-sm text-cyan-400 hover:text-emerald-400 transition">Редактировать фото</button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 bg-white/5 p-1 rounded-xl w-fit">
          {['profile', 'security', 'courses', 'notifications'].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${activeTab === tab ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
              {{ profile: 'Учетные данные', security: 'Безопасность', courses: 'Мои курсы', notifications: 'Уведомления' }[tab]}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 min-h-[400px]">
          {activeTab === 'profile' && (
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div><label className="block text-sm text-slate-300 mb-1">Имя</label><input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-cyan-500/40 outline-none" /></div>
                <div><label className="block text-sm text-slate-300 mb-1">Фамилия</label><input value={form.surname} onChange={e=>setForm({...form,surname:e.target.value})} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-cyan-500/40 outline-none" /></div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div><label className="block text-sm text-slate-300 mb-1">Дата рождения</label><input type="date" value={form.dob} onChange={e=>setForm({...form,dob:e.target.value})} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-cyan-500/40 outline-none" /></div>
                <div><label className="block text-sm text-slate-300 mb-1">Email</label><input value={form.email} disabled className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-slate-400 cursor-not-allowed" /></div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div><label className="block text-sm text-slate-300 mb-1">Телефон</label><input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-cyan-500/40 outline-none" /></div>
                <div><label className="block text-sm text-slate-300 mb-1">Часовой пояс</label>
                  <select value={form.tz} onChange={e=>setForm({...form,tz:e.target.value})} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-cyan-500/40 outline-none">
                    <option>Москва (UTC+3)</option><option>Калининград (UTC+2)</option><option>Самара (UTC+4)</option><option>Екатеринбург (UTC+5)</option>
                  </select>
                </div>
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition">Сохранить данные</button>
            </form>
          )}

          {activeTab === 'security' && (
            <form onSubmit={handlePassword} className="max-w-md space-y-5">
              <h3 className="text-xl font-bold mb-4">Изменить пароль</h3>
              {['current','new','confirm'].map(f => (
                <div key={f}><label className="block text-sm text-slate-300 mb-1">{{current:'Текущий пароль',new:'Новый пароль',confirm:'Повторите новый пароль'}[f]}</label><input type="password" value={passwords[f]} onChange={e=>setPasswords({...passwords,[f]:e.target.value})} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-cyan-500/40 outline-none" required /></div>
              ))}
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition">Обновить пароль</button>
            </form>
          )}

          {activeTab === 'courses' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-4">Мои курсы</h3>
              {[
                { title: 'Python-разработчик', progress: 75, next: 'Модуль 5, Урок 3' },
                { title: 'Аналитика данных', progress: 40, next: 'Введение в SQL' }
              ].map((c, i) => (
                <div key={i} className="p-5 bg-white/5 border border-white/10 rounded-xl">
                  <h4 className="font-bold mb-2">{c.title}</h4>
                  <div className="w-full bg-white/10 rounded-full h-2 mb-3"><div className="bg-gradient-to-r from-cyan-500 to-emerald-500 h-2 rounded-full" style={{width:`${c.progress}%`}}></div></div>
                  <p className="text-sm text-slate-400 mb-4">Прогресс: {c.progress}% | Следующий урок: {c.next}</p>
                  <button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm hover:bg-cyan-500/20 transition">Продолжить</button>
                </div>
              ))}
              <a href="/kursi" className="text-cyan-400 hover:text-emerald-400 transition">Посмотреть каталог курсов →</a>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-4 max-w-md">
              <h3 className="text-xl font-bold mb-4">Настройки уведомлений</h3>
              {[
                { key:'email', label:'Email-уведомления о новостях' },
                { key:'course', label:'Уведомления об обновлениях курсов' },
                { key:'sms', label:'SMS-уведомления о важных событиях' }
              ].map(n => (
                <label key={n.key} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:bg-white/10 transition">
                  <span className="text-slate-300">{n.label}</span>
                  <div className={`w-12 h-6 rounded-full relative transition ${notifications[n.key] ? 'bg-emerald-500' : 'bg-slate-600'}`} onClick={()=>setNotifications({...notifications,[n.key]:!notifications[n.key]})}>
                    <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition ${notifications[n.key] ? 'translate-x-6' : ''}`}></div>
                  </div>
                </label>
              ))}
              <button className="mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition">Сохранить настройки</button>
            </div>
          )}
        </div>

        {/* Delete Account */}
        <div className="mt-8 p-6 border border-red-500/30 bg-red-500/5 rounded-2xl">
          <h3 className="text-lg font-bold text-red-400 mb-2">Удалить учетную запись</h3>
          <p className="text-slate-400 text-sm mb-4">Это действие нельзя отменить. Все данные и прогресс будут удалены.</p>
          <button onClick={()=>setShowDeleteModal(true)} className="px-5 py-2 bg-red-500/20 border border-red-500/40 text-red-400 rounded-lg hover:bg-red-500/30 transition">Удалить аккаунт</button>
        </div>
      </div>

      {/* Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={()=>setShowDeleteModal(false)}>
          <div className="bg-slate-900 border border-white/10 rounded-2xl p-8 max-w-md w-full text-center" onClick={e=>e.stopPropagation()}>
            <h3 className="text-2xl font-bold text-red-400 mb-4">Подтверждение удаления</h3>
            <p className="text-slate-300 mb-6">Вы действительно хотите удалить свой аккаунт?</p>
            <div className="flex gap-4 justify-center">
              <button onClick={()=>setShowDeleteModal(false)} className="px-6 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition">Отмена</button>
              <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition">Удалить</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default Account