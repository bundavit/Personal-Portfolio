import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navItems } from '../data/portfolio'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="flex min-w-0 items-center gap-3 font-semibold text-slate-950" onClick={() => setIsOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-xs font-bold text-white">VB</span>
          <span className="truncate">Vath Bundavit</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a key={item.href} className="rounded-md px-2.5 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950" href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-700 md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen ? (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="rounded-md px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
