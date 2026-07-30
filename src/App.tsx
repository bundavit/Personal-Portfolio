import { ArrowDown, Code2, MapPin, Network } from 'lucide-react'
import { ButtonLink } from './components/ButtonLink'
import { JourneyItem } from './components/JourneyItem'
import { Navbar } from './components/Navbar'
import { ProjectCard } from './components/ProjectCard'
import { SectionHeading } from './components/SectionHeading'
import { SkillGroup } from './components/SkillGroup'
import { journeyItems, projects, skillGroups, socialLinks } from './data/portfolio'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Navbar />

      <main className="pt-[49px]">
        <section id="home" className="relative overflow-hidden">
          <div className="mx-auto grid w-full max-w-[23rem] items-start gap-8 px-4 py-8 sm:max-w-5xl sm:px-6 md:py-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-6">
            <div className="min-w-0 max-w-2xl overflow-hidden">
              <p className="inline-flex max-w-full items-center rounded-md bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                Software Engineering Internship Candidate
              </p>
              <h1 className="mt-4 max-w-full text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                Hi, I&apos;m Vath Bundavit
              </h1>
              <p className="mt-3 max-w-[21rem] text-base font-semibold leading-7 text-slate-800 sm:max-w-lg sm:text-xl">
                Full-Stack Developer & Information Technology Engineering Student
              </p>
              <p className="mt-3 max-w-[21rem] text-base leading-7 text-slate-600 sm:max-w-xl">
                I build practical web and mobile applications that solve real-world problems.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
                <ButtonLink href="#projects" icon={ArrowDown} variant="primary">
                  View Projects
                </ButtonLink>
                <ButtonLink href="https://github.com/bundavit" target="_blank" rel="noreferrer" icon={Code2} variant="ghost">
                  GitHub
                </ButtonLink>
                <ButtonLink href="https://linkedin.com/in/vath-bundavit" target="_blank" rel="noreferrer" icon={Network} variant="ghost">
                  LinkedIn
                </ButtonLink>
              </div>
            </div>

            <div className="min-w-0 w-full max-w-full justify-self-center rounded-lg border border-slate-200 bg-slate-50 p-3 shadow-sm sm:max-w-sm lg:justify-self-end">
              <div className="grid gap-2.5">
                <div className="rounded-lg bg-white p-3.5 text-center shadow-sm">
                  <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-blue-50 bg-blue-500 shadow-md">
                    <img
                      className="h-full w-full object-cover object-center"
                      src="/profile-avatar.jpg"
                      alt="Professional portrait of Vath Bundavit"
                      width="512"
                      height="512"
                    />
                  </div>
                  <p className="mt-3 text-lg font-bold text-slate-950">Vath Bundavit</p>
                  <p className="mt-1 text-sm font-semibold text-blue-600">Full-Stack Developer</p>
                </div>
                <div className="min-w-0 rounded-lg bg-white p-3.5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">Current Focus</p>
                  <p className="mt-2 max-w-[17rem] break-words text-base font-bold leading-6 text-slate-950 sm:max-w-full sm:text-lg">Full-stack web and Android development</p>
                  <p className="mt-2 max-w-[17rem] break-words text-sm leading-6 text-slate-600 sm:max-w-full">
                    Laravel, Kotlin, MySQL, REST APIs, deployment, and practical product workflows.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="min-w-0 rounded-lg bg-white p-3.5 shadow-sm">
                    <p className="text-2xl font-bold text-slate-950">3</p>
                    <p className="mt-1 break-words text-xs font-semibold leading-5 text-slate-600 sm:text-sm">Featured projects</p>
                  </div>
                  <div className="min-w-0 rounded-lg bg-white p-3.5 shadow-sm">
                    <p className="text-2xl font-bold text-slate-950">2027</p>
                    <p className="mt-1 break-words text-xs font-semibold leading-5 text-slate-600 sm:text-sm">Expected graduation</p>
                  </div>
                </div>
                <div className="min-w-0 rounded-lg bg-blue-600 p-3.5 text-white shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">Based in</p>
                  <p className="mt-2 flex min-w-0 items-center gap-2 text-base font-bold sm:text-lg">
                    <MapPin aria-hidden="true" className="h-4 w-4" />
                    <span className="min-w-0 break-words">Phnom Penh, Cambodia</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-slate-50 py-10 sm:py-14">
          <div className="mx-auto w-full max-w-[23rem] px-4 sm:max-w-5xl sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="About"
              title="I turn practical ideas into usable applications."
              description="My work is shaped by real problems, clear user flows, and the discipline of getting software running outside the classroom."
            />
            <div className="mx-auto max-w-[21rem] rounded-lg border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-600 shadow-sm sm:max-w-3xl sm:p-6">
              <p>
                I am a final-year Information Technology Engineering student at the Royal University of Phnom Penh. I enjoy turning practical ideas into usable applications, from web platforms to native Android experiences.
              </p>
              <p className="mt-4">
                Campus Found started from the need to organize lost-and-found reports on campus instead of relying on scattered chat messages. DearYou began as a private letter idea and grew into a multi-user platform with sharing, media, recipient interactions, and admin controls.
              </p>
              <p className="mt-4">
                I am looking for a Software Engineering Internship where I can contribute to production-quality software, learn from experienced engineers, and keep growing as a full-stack developer.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="py-10 sm:py-14">
          <div className="mx-auto w-full max-w-[23rem] px-4 sm:max-w-6xl sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Projects"
              title="Featured work with real product shape"
              description="Three projects that show full-stack delivery, mobile architecture, deployment, and practical user-centered workflows."
            />
            <div className="grid gap-5 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="bg-slate-50 py-10 sm:py-14">
          <div className="mx-auto w-full max-w-[23rem] px-4 sm:max-w-5xl sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Skills"
              title="Tools I use to build and ship"
              description="A practical stack covering backend, frontend, Android, databases, deployment, and API testing."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {skillGroups.map((group) => (
                <SkillGroup key={group.title} group={group} />
              ))}
            </div>
          </div>
        </section>

        <section id="journey" className="py-10 sm:py-14">
          <div className="mx-auto w-full max-w-[23rem] px-4 sm:max-w-5xl sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Journey"
              title="Education and leadership experience"
              description="A mix of engineering study, volunteer logistics, liaison work, and event technology support."
            />
            <div className="mx-auto grid max-w-4xl gap-4">
              {journeyItems.map((item) => (
                <JourneyItem key={`${item.title}-${item.date}`} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-950 py-10 text-white sm:py-14">
          <div className="mx-auto w-full max-w-[23rem] px-4 sm:max-w-5xl sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-300">Contact</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Let&apos;s build something useful.</h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                I am open to software engineering internship opportunities and conversations about full-stack web or Android projects.
              </p>
            </div>

            <div className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-3 sm:gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="rounded-lg border border-white/10 bg-white/5 p-4 text-left transition hover:border-sky-300/60 hover:bg-white/10"
                  >
                    {Icon ? <Icon aria-hidden="true" className="h-5 w-5 text-sky-300" /> : null}
                    <p className="mt-4 font-semibold">{link.label}</p>
                    <p className="mt-1 break-words text-sm text-slate-300">{link.href.replace('mailto:', '')}</p>
                  </a>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-4 py-6 text-center text-sm text-slate-600">
        &copy; 2026 Vath Bundavit. Built with React, TypeScript, and Tailwind CSS.
      </footer>
    </div>
  )
}

export default App
