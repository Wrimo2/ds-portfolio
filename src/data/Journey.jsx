// BEGIN NEW FILE (src/components/Journey.jsx)
import React, { useRef } from 'react'
import { journey } from '../data/content'

export default function Journey(){
  const scrollerRef = useRef(null)

  const scrollByCards = (dir) => {
    const el = scrollerRef.current
    if (!el) return
    const card = el.querySelector('[data-card]')
    const w = card ? card.getBoundingClientRect().width + 16 : 320
    el.scrollBy({ left: dir * w, behavior: 'smooth' })
  }

  return (
    <section id="journey" className="section saas-bg">
      <div className="container-prose">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Timeline</p>
            <h2 className="section-title">My Journey</h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scrollByCards(-1)}
              aria-label="Scroll left"
              className="btn-secondary px-3 py-2"
            >‹</button>
            <button
              onClick={() => scrollByCards(1)}
              aria-label="Scroll right"
              className="btn-secondary px-3 py-2"
            >›</button>
          </div>
        </div>

        {/* years row */}
        <div className="mb-4 flex gap-2 overflow-x-auto no-scrollbar">
          {journey.map((j,i)=>(
            <span key={i}
              className="shrink-0 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-sm">
              {j.date}
            </span>
          ))}
        </div>

        {/* scroll-snap cards */}
        <div
          ref={scrollerRef}
          className="relative overflow-x-auto snap-x snap-mandatory no-scrollbar"
        >
          <div className="flex gap-4 pr-2">
            {journey.map((j, i) => (
              <article
                key={i}
                data-card
                className="snap-start shrink-0 w-[88%] sm:w-[420px] card p-6"
                data-aos="fade-up"
                data-aos-delay={i*60}
              >
                <div className="text-sky-600 dark:text-sky-400 font-semibold">{j.date}</div>
                <h3 className="text-lg font-semibold mt-1">{j.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{j.blurb}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {j.tags?.map((t, ti)=>(
                    <span key={ti} className="text-xs px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/30">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* subtle timeline line under cards */}
          <div className="pointer-events-none absolute left-0 right-0 -bottom-4 h-px bg-slate-200 dark:bg-slate-800"></div>
        </div>

        {/* mobile arrows */}
        <div className="mt-4 sm:hidden flex justify-center gap-2">
          <button onClick={()=>scrollByCards(-1)} className="btn-secondary px-3 py-2">‹</button>
          <button onClick={()=>scrollByCards(1)} className="btn-secondary px-3 py-2">›</button>
        </div>
      </div>
    </section>
  )
}
// END NEW FILE
