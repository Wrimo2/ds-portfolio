import React from 'react'
import { certifications } from '../data/content'

export default function Certifications(){
  return (
    <section id="certifications" className="section">
      <h2 className="section-title mb-6">Certifications</h2>
      <div className="card p-6">
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2">
          {certifications.map((c,i)=>(
            <div key={i} className="min-w-[260px] snap-center border border-slate-200 dark:border-slate-800 rounded-2xl p-5">
              <div className="text-sm muted">{c.year}</div>
              <div className="font-semibold mt-1">{c.title}</div>
              <div className="text-sm">{c.org}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
