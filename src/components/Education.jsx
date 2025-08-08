import React, { useState } from 'react'
import { education } from '../data/content'

function Accordion({item, idx}){
  const [open, setOpen] = useState(false)
  return (
    <div className="card p-5" data-aos="fade-up" data-aos-delay={idx*80}>
      <button onClick={()=>setOpen(!open)} className="w-full text-left flex justify-between items-center">
        <div>
          <div className="font-semibold">{item.school}</div>
          <div className="muted">{item.period}</div>
        </div>
        <span aria-hidden>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <ul className="mt-4 list-disc list-inside space-y-1 text-sm">
          {item.details.map((d,i)=>(<li key={i}>{d}</li>))}
        </ul>
      )}
    </div>
  )
}

export default function Education(){
  return (
    <section id="education" className="section">
      <h2 className="section-title mb-6">Education</h2>
      <div className="grid gap-4">
        {education.map((e,i)=>(<Accordion key={i} idx={i} item={e} />))}
      </div>
    </section>
  )
}
