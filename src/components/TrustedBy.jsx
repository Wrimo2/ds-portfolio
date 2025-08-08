// BEGIN NEW (TrustedBy.jsx)
import React from 'react'

const logos = ['Hanging Bulb', 'Toastmasters', 'IIT Madras', 'TCS', 'Curiosity Stream', 'Side Projects']

export default function TrustedBy(){
  return (
    <section className="py-10 sm:py-12 border-y border-slate-200/70 dark:border-slate-800/70 bg-white/60 dark:bg-slate-900/40 backdrop-blur">
      <div className="container-prose">
        <p className="text-center text-sm text-slate-500 dark:text-slate-400 mb-6">Trusted by</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center text-center">
          {logos.map((name, i) => (
            <div key={i} className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-sm">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
// END NEW
