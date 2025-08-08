// BEGIN NEW (ValueProps.jsx)
import React from 'react'

const items = [
  { title: 'Clear storytelling', body: 'Turn noisy data into crisp insights with clean visuals and plain language.' },
  { title: 'Fast iteration', body: 'Ship small, learn fast. Baselines, A/Bs, and tight feedback loops.' },
  { title: 'Reliable delivery', body: 'Tests, data contracts, and monitoring so work keeps working.' },
  { title: 'Explainers', body: 'Docs and walkthroughs so non-technical teammates can act on results.' },
]

export default function ValueProps(){
  return (
    <section className="section">
      <div className="container-prose">
        <h2 className="section-title mb-8">What you get</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i)=>(
            <div key={i} className="card p-6" data-aos="fade-up" data-aos-delay={i*60}>
              <div className="text-sky-600 dark:text-sky-400 font-semibold">{it.title}</div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
// END NEW
