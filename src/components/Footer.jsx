import React from 'react'

export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="mt-20 py-10 border-t border-slate-200 dark:border-slate-800">
      <div className="container-prose text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>© {year} Wrimo Das. All rights reserved.</div>
        <div className="muted">Built with React + Tailwind. Deployed on the open web.</div>
      </div>
    </footer>
  )
}
