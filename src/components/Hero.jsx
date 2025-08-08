import React, { useEffect, useRef } from 'react'
import { profile } from '../data/content'

function Particles(){
  const canvasRef = useRef(null)
  useEffect(()=>{
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let w, h, rafId
    const DPR = window.devicePixelRatio || 1
    const particles = Array.from({length: 60}).map(()=>({x:Math.random(), y:Math.random(), vx:(Math.random()-0.5)/200, vy:(Math.random()-0.5)/200, r: Math.random()*2+0.5}))
    const resize = ()=>{
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * DPR
      canvas.height = h * DPR
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
    }
    const draw = ()=>{
      ctx.clearRect(0,0,w,h)
      for (const p of particles){
        p.x += p.vx; p.y += p.vy
        if (p.x<0||p.x>1) p.vx*=-1
        if (p.y<0||p.y>1) p.vy*=-1
        const px = p.x * w, py = p.y * h
        ctx.beginPath()
        ctx.arc(px, py, p.r, 0, Math.PI*2)
        ctx.fillStyle = 'rgba(16,185,129,0.8)'
        ctx.fill()
      }
      rafId = requestAnimationFrame(draw)
    }
    resize()
    draw()
    const obs = new ResizeObserver(resize)
    obs.observe(canvas)
    return ()=>{ cancelAnimationFrame(rafId); obs.disconnect() }
  },[])
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full"></canvas>
}

export default function Hero(){
  useEffect(()=>{
    const init = () => window.AOS && window.AOS.refreshHard()
    setTimeout(init, 500)
  },[])

  return (
    <section className="relative min-h-[86vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-20"></div>
      <Particles />
      <div className="relative container-prose text-center pt-24">
        <h1 className="hero-headline text-4xl sm:text-6xl font-bold tracking-tight mb-6">
          {profile.name} — <span className="text-emerald-500">Data Scientist</span>
        </h1>
        <p className="muted max-w-2xl mx-auto text-lg">{profile.tagline}</p>
        <div className="hero-cta mt-8 flex gap-4 justify-center">
          <a href="#projects" className="btn">View Projects</a>
          <a href="#contact" className="btn-secondary">Contact</a>
        </div>
      </div>
    </section>
  )
}
