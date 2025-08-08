// BEGIN REPLACE (Hero.jsx)
import React, { useEffect, useRef } from 'react'
import { profile } from '../data/content'

function SoftBlob(){
  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10"
      style={{
        background:
          'radial-gradient(600px 300px at 20% 20%, rgba(59,130,246,.15), transparent 60%), radial-gradient(600px 300px at 80% 30%, rgba(14,165,233,.12), transparent 60%), radial-gradient(600px 300px at 50% 80%, rgba(99,102,241,.12), transparent 60%)'
      }}
    />
  )
}

export default function Hero(){
  useEffect(()=>{ setTimeout(()=>window.AOS && window.AOS.refreshHard(), 400) },[])
  return (
    <section className="relative overflow-hidden">
      <SoftBlob />
      <div className="container-prose pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: text */}
          <div data-aos="fade-up">
            <p className="text-sm font-medium tracking-wide text-slate-500 dark:text-slate-300">
              Portfolio • Data Science
            </p>
            <h1 className="mt-3 text-4xl sm:text-6xl font-bold leading-[1.05] tracking-tight">
              {profile.name}
              <span className="block text-sky-600 dark:text-sky-400">Data Scientist</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600 dark:text-slate-300">
              {profile.tagline} I build end-to-end analytics and ML that ship—clear,
              reliable, and explainable.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#projects" className="btn">See Projects</a>
              <a href="#contact" className="btn-secondary">Book a call</a>
            </div>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
              Trusted by teams and clubs I’ve worked with.
            </p>
          </div>

          {/* Right: visual card */}
          <div className="relative" data-aos="fade-left">
            <div className="card p-6 sm:p-8">
              <img src={profile.avatar} alt="Portrait" className="w-24 h-24 rounded-2xl object-cover border border-sky-300/50 shadow-soft" />
              <h3 className="mt-5 text-xl font-semibold">Evidence-driven work</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>• Clean data → strong baselines → careful experiments</li>
                <li>• Useful visuals and dashboards (Power BI, Python)</li>
                <li>• Explainable models + monitoring</li>
              </ul>
              <a href="#skills" className="btn-secondary mt-5 text-sm w-fit">Skills & Tools</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
// END REPLACE
