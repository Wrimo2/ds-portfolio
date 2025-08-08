import React, { useState } from 'react'
import { projects } from '../data/content'

function CaseModal({project, onClose}){
  if (!project) return null
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="card max-w-3xl w-full p-6 relative">
        <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 text-xl">×</button>
        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
        <img src={project.image} alt="" className="rounded-xl mb-4" />
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="font-medium mb-1">Problem</div>
            <p className="muted text-sm">{project.caseStudy.problem}</p>
          </div>
          <div>
            <div className="font-medium mb-1">Approach</div>
            <ul className="list-disc list-inside text-sm">
              {project.caseStudy.approach.map((a,i)=>(<li key={i}>{a}</li>))}
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <div className="font-medium mb-1">Results</div>
          <ul className="list-disc list-inside text-sm">
            {project.caseStudy.results.map((r,i)=>(<li key={i}>{r}</li>))}
          </ul>
        </div>
        <a href={project.link} className="btn mt-6" target="_blank" rel="noreferrer">View on GitHub</a>
      </div>
    </div>
  )
}

export default function Projects(){
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="section">
      <h2 className="section-title mb-6">Projects</h2>
      <div className="masonry">
        {projects.map((p, i)=>(
          <article key={i} className="masonry-item card overflow-hidden" data-aos="fade-up" data-aos-delay={i*80}>
            <img src={p.image} alt="" className="w-full h-56 object-cover" />
            <div className="p-5">
              <div className="flex flex-wrap gap-2 mb-2">
                {p.tags.map((t, ti)=>(<span key={ti} className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">{t}</span>))}
              </div>
              <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
              <div className="flex gap-3">
                <button className="btn text-sm" onClick={()=>setActive(p)}>Case study</button>
                <a href={p.link} className="btn-secondary text-sm" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <CaseModal project={active} onClose={()=>setActive(null)} />
    </section>
  )
}
