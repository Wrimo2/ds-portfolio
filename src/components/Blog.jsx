import React from 'react'
import { blogPosts } from '../data/content'

export default function Blog(){
  return (
    <section id="blog" className="section">
      <h2 className="section-title mb-6">Blog</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {blogPosts.map((p,i)=>(
          <article key={p.slug} className="card p-6" data-aos="fade-up" data-aos-delay={i*80}>
            <div className="text-sm muted">{new Date(p.date).toLocaleDateString()}</div>
            <h3 className="text-xl font-semibold mt-1 mb-2">{p.title}</h3>
            <p className="muted">{p.summary}</p>
            <a href="#" className="btn-secondary mt-4 text-sm" aria-label={`Read ${p.title}`}>Read</a>
          </article>
        ))}
      </div>
    </section>
  )
}
