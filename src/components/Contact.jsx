import React from 'react'
import { profile } from '../data/content'

export default function Contact(){
  return (
    <section id="contact" className="section">
      <h2 className="section-title mb-6">Contact</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card p-6" data-aos="fade-up">
          <div className="space-y-2 text-sm">
            <div><strong>Email:</strong> <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a></div>
            <div><strong>Phone:</strong> <a className="underline" href={`tel:${profile.phone}`}>{profile.phone}</a></div>
            <div><strong>Location:</strong> {profile.location}</div>
            <div className="flex gap-3 pt-2">
              {profile.social.map(s => (<a key={s.label} href={s.href} className="btn-secondary text-sm" target="_blank" rel="noreferrer">{s.label}</a>))}
            </div>
            <div className="pt-3">
              <a className="btn text-sm" href="/wrimo.vcf" download>Download vCard</a>
            </div>
          </div>
        </div>
        <form className="card p-6" name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <label className="block text-sm mb-2">Name
            <input name="name" required className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" />
          </label>
          <label className="block text-sm mb-2">Email
            <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" />
          </label>
          <label className="block text-sm mb-2">Message
            <textarea name="message" rows="5" required className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2"></textarea>
          </label>
          <button className="btn mt-2">Send</button>
          <p className="muted text-xs mt-2">Form works out-of-the-box on Netlify. For other hosts, connect Formspree or similar.</p>
        </form>
      </div>
    </section>
  )
}
