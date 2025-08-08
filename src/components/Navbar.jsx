import React, { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

const links = [
  {href:'#journey', label:'Journey'},
  {href:'#about', label:'About'},
  {href:'#education', label:'Education'},
  {href:'#experience', label:'Experience'},
  {href:'#projects', label:'Projects'},
  {href:'#skills', label:'Skills'},
  {href:'#certifications', label:'Certifications'},
  {href:'#blog', label:'Blog'},
  {href:'#contact', label:'Contact'},
]

export default function Navbar(){
  const [scrolled, setScrolled] = useState(false)
  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <header className={`fixed top-0 z-50 w-full transition-all ${scrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200/50 dark:border-slate-800/50' : 'bg-transparent'}`}>
      <nav className="container-prose flex items-center justify-between py-3">
        <a href="#" className="text-lg font-semibold">wrimo<span className="text-emerald-500">.ai</span></a>
        <ul className="hidden md:flex gap-6 text-sm">
          {links.map(l => (
            <li key={l.href}><a className="hover:opacity-80" href={l.href}>{l.label}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="#contact" className="btn-secondary text-sm hidden sm:inline-flex">Hire me</a>
        </div>
      </nav>
    </header>
  )
}
