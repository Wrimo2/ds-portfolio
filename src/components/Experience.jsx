import React from 'react'
import { experiences } from '../data/content'

export default function Experience(){
  return (
    <section id="experience" className="section">
      <h2 className="section-title mb-10">Experience</h2>
      <div className="relative">
        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800"></div>
        <div className="space-y-8">
          {experiences.map((ex, idx)=>(
            <div key={idx} className="relative pl-12 sm:pl-16" data-aos="fade-up" data-aos-delay={idx*100}>
              <div className="absolute left-2.5 sm:left-4 top-2 w-3 h-3 rounded-full bg-emerald-500"></div>
              <div className="card p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="font-semibold">{ex.title} — {ex.company}</div>
                  <div className="muted">{ex.period}</div>
                </div>
                <ul className="list-disc list-inside space-y-1">
                  {ex.bullets.map((b,i)=>(<li key={i}>{b}</li>))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
