import React, { useEffect, useState } from 'react'

export default function ThemeToggle(){
  const [theme, setTheme] = useState('light')

  useEffect(()=>{
    const saved = localStorage.getItem('theme')
    setTheme(saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark':'light'))
  },[])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
    if (next === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }

  return (
    <button onClick={toggle} aria-label="Toggle dark mode" className="rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 text-sm">
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  )
}
