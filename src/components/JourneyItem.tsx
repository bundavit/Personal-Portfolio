import type { JourneyItem as JourneyItemType } from '../types/portfolio'

export function JourneyItem({ item }: { item: JourneyItemType }) {
  return (
    <article className="relative min-w-0 rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-blue-600">{item.organization}</p>
          <h3 className="mt-1 break-words text-lg font-bold text-slate-950 sm:text-xl">{item.title}</h3>
          {item.role ? <p className="mt-1 text-sm font-semibold text-slate-700">{item.role}</p> : null}
        </div>
        <span className="w-fit rounded-md bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">{item.date}</span>
      </div>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
        {item.description.map((line) => (
          <li key={line} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" aria-hidden="true" />
            <span className="min-w-0 break-words">{line}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}
