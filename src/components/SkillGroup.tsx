import type { SkillGroup as SkillGroupType } from '../types/portfolio'

export function SkillGroup({ group }: { group: SkillGroupType }) {
  return (
    <section className="min-w-0 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="text-lg font-bold text-slate-950">{group.title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span key={skill} className="rounded-md border border-blue-100 bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
