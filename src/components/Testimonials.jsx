import React from 'react'
import { testimonials } from '../data/content'

export default function Testimonials(){
  return (
    <section className="section">
      <h2 className="section-title mb-6">Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t,i)=>(
          <figure key={i} className="card p-6" data-aos="fade-up" data-aos-delay={i*80}>
            <blockquote className="italic">“{t.quote}”</blockquote>
            <figcaption className="mt-3 text-sm muted">— {t.name}, {t.role}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
