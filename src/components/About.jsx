import React from 'react'
import { profile, milestones } from '../data/content'

export default function About(){
  return (
    <section id="about" className="section">
      <div className="grid md:grid-cols-[220px,1fr] gap-8 items-start" data-aos="fade-up">
        <img src={profile.avatar} alt="Portrait" className="w-40 h-40 rounded-2xl object-cover border border-emerald-400/50 shadow-soft mx-auto md:mx-0" />
        <div className="card p-6">
          <h2 className="section-title mb-4">About Me</h2>
          <p className="muted mb-6">{profile.summary}</p>
          <ul className="space-y-4">
            {milestones.map((m,i)=>(
              <li key={i} className="flex gap-4">
                <div className="w-16 text-emerald-500 font-semibold">{m.year}</div>
                <div>
                  <div className="font-medium">{m.title}</div>
                  <div className="muted">{m.detail}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
