type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-7 w-full max-w-[21rem] text-center sm:mb-8 sm:max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">{eyebrow}</p>
      <h2 className="mx-auto mt-3 max-w-full break-words text-xl font-bold tracking-tight text-slate-950 sm:text-3xl">{title}</h2>
      {description ? <p className="mx-auto mt-3 max-w-full break-words text-sm leading-7 text-slate-600 sm:text-base">{description}</p> : null}
    </div>
  )
}
