// BEGIN NEW (Process.jsx)
import React from 'react'

const steps = [
  { n:'01', title:'Discover', body:'Clarify the question, define success, gather the right data.' },
  { n:'02', title:'Build', body:'Clean, explore, baseline. Model only when needed. Visuals that guide action.' },
  { n:'03', title:'Deliver', body:'Explain results, handoff dashboards, set up checks and monitoring.' },
]

export default function Process(){
  return (
    <section className="section">
      <div className="container-prose">
        <h2 className="section-title mb-8">How I work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s,i)=>(
            <div key={i} className="card p-6" data-aos="fade-up" data-aos-delay={i*80}>
              <div className="text-3xl font-bold text-slate-300 dark:text-slate-600">{s.n}</div>
              <div className="mt-2 font-semibold">{s.title}</div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
// END NEW
