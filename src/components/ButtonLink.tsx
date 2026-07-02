import type { AnchorHTMLAttributes } from 'react'
import type { LucideIcon } from 'lucide-react'

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
  icon?: LucideIcon
}

const variants = {
  primary: 'bg-blue-600 text-white shadow-sm shadow-blue-200 hover:bg-blue-700 focus-visible:ring-blue-600',
  secondary:
    'border border-slate-200 bg-white text-slate-900 hover:border-blue-200 hover:bg-blue-50 focus-visible:ring-blue-600',
  ghost: 'text-slate-700 hover:bg-slate-100 focus-visible:ring-slate-500',
}

export function ButtonLink({ children, className = '', icon: Icon, variant = 'secondary', ...props }: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex min-h-10 items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:px-3.5 ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon ? <Icon aria-hidden="true" className="h-4 w-4 shrink-0" /> : null}
      <span>{children}</span>
    </a>
  )
}
