import React from 'react'
import { skills } from '../data/content'

function Radial({pct}){
  const angle = Math.round(pct/100*360)
  const bg = `conic-gradient(#10b981 ${angle}deg, rgba(16,185,129,0.15) ${angle}deg)`
  return (
    <div className="relative w-24 h-24 rounded-full" style={{background:bg}} role="img" aria-label={`${pct}%`}>
      <div className="absolute inset-2 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-sm font-medium">{pct}%</div>
    </div>
  )
}

export default function Skills(){
  return (
    <section id="skills" className="section">
      <h2 className="section-title mb-6">Skills</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card p-6" data-aos="fade-up">
          <h3 className="font-semibold mb-4">Tooling & Languages</h3>
          <ul className="space-y-4">
            {skills.stacks.map((s,i)=>(
              <li key={i}>
                <div className="flex justify-between text-sm mb-1"><span>{s.label}</span><span className="muted">{s.level}%</span></div>
                <div className="w-full h-2 rounded bg-slate-200 dark:bg-slate-800">
                  <div className="h-2 rounded bg-emerald-500" style={{width:`${s.level}%`}}></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="card p-6" data-aos="fade-up" data-aos-delay="100">
          <h3 className="font-semibold mb-4">Competencies</h3>
          <div className="flex gap-6 flex-wrap">
            {skills.categories.map((c,i)=>(
              <div key={i} className="text-center">
                <Radial pct={c.pct} />
                <div className="mt-2 text-sm">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
