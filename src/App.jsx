import { useEffect, useMemo, useState } from 'react'
import {
  ArrowDown,
  CaretRight,
  CheckCircle,
  MapPin,
} from '@phosphor-icons/react'
import {
  appendixProof,
  closingStory,
  narrativeIntro,
  narrativeNav,
  personaStories,
  simpleProblems,
  strategyPhases,
} from './content'

function App() {
  const [activeSection, setActiveSection] = useState(narrativeNav[0].id)
  const [activePersona, setActivePersona] = useState(personaStories[0].id)
  const [activePhase, setActivePhase] = useState(strategyPhases[0].id)

  const scrollToSection = (id, behavior = 'auto') => {
    const el = document.getElementById(id)
    if (!el) return

    const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 96
    const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - headerHeight)

    window.scrollTo({ top, behavior })
    window.history.pushState(null, '', `#${id}`)
    setActiveSection(id)
  }

  useEffect(() => {
    const updateActive = () => {
      const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 96
      const readingLine = headerHeight + 24
      const current = narrativeNav.find((item) => {
        const el = document.getElementById(item.id)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= readingLine && rect.bottom >= readingLine
      })
      if (current) setActiveSection(current.id)
    }

    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)
    return () => {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [])

  useEffect(() => {
    const alignHash = () => {
      const id = window.location.hash.replace('#', '')
      if (!narrativeNav.some((item) => item.id === id)) return
      window.requestAnimationFrame(() => scrollToSection(id, 'auto'))
    }

    alignHash()
    window.addEventListener('hashchange', alignHash)
    return () => window.removeEventListener('hashchange', alignHash)
  }, [])

  const selectedPersona = useMemo(
    () => personaStories.find((persona) => persona.id === activePersona) ?? personaStories[0],
    [activePersona],
  )

  const selectedPhase = useMemo(
    () => strategyPhases.find((phase) => phase.id === activePhase) ?? strategyPhases[0],
    [activePhase],
  )

  return (
    <div className="min-h-screen bg-[var(--alpine-ink)] text-white selection:bg-[var(--alpine-cyan)] selection:text-[var(--alpine-ink)]">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_12%_8%,rgba(92,55,210,0.2),transparent_28%),linear-gradient(135deg,rgba(4,19,39,0.99),rgba(5,31,61,0.96)_48%,rgba(9,83,112,0.72))]" />
      <div className="fixed inset-0 pointer-events-none opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:72px_72px]" />

      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <main className="relative">
        <Hero scrollToSection={scrollToSection} />
        <Problem />
        <Personas activePersona={activePersona} selectedPersona={selectedPersona} setActivePersona={setActivePersona} />
        <FourPhases activePhase={activePhase} selectedPhase={selectedPhase} setActivePhase={setActivePhase} />
        <Closing />
      </main>
    </div>
  )
}

function Header({ activeSection, scrollToSection }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.1] bg-[rgba(4,16,35,0.9)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1920px] items-center justify-between gap-6 px-8 py-4 2xl:px-12">
        <a
          href="#opening"
          onClick={(event) => {
            event.preventDefault()
            scrollToSection('opening')
          }}
          className="flex shrink-0 items-center gap-4"
        >
          <span className="grid h-14 w-[260px] place-items-center overflow-hidden bg-transparent">
            <img src="./assets/lumsa-alpine-lockup.png" alt="LUMSA x Alpine" className="h-full w-full object-contain" />
          </span>
          <span>
            <span className="block text-2xl font-black uppercase leading-none text-white">A390</span>
            <span className="mt-1 block text-base uppercase text-white/[0.58]">Strategia Italia</span>
          </span>
        </a>

        <nav className="flex min-w-0 flex-1 items-center justify-end gap-1" aria-label="Sezioni principali">
          {narrativeNav.map((item, index) => {
            const active = activeSection === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => {
                  event.preventDefault()
                  scrollToSection(item.id)
                }}
                className={`flex min-w-[112px] items-center justify-center gap-2 rounded px-3 py-2 text-sm font-black uppercase transition ${
                  active
                    ? 'bg-[var(--alpine-cyan)] text-[var(--alpine-ink)]'
                    : 'text-white/[0.52] hover:bg-white/[0.06] hover:text-white'
                }`}
              >
                <span className="font-mono">{index + 1}</span>
                {item.label}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

function Hero({ scrollToSection }) {
  return (
    <section id="opening" className="relative isolate min-h-[calc(100vh-88px)] scroll-mt-24 overflow-hidden">
      <div className="relative mx-auto flex min-h-[calc(100vh-88px)] max-w-[1920px] flex-col px-9 py-14 2xl:px-12 2xl:py-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <img src="./assets/phase-provare.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--alpine-ink)_0%,rgba(4,19,39,0.94)_34%,rgba(4,19,39,0.5)_62%,rgba(4,19,39,0.88)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[var(--alpine-ink)] to-transparent" />
        </div>

        <div className="max-w-[1180px]">
          <p className="text-3xl font-black uppercase tracking-[0.18em] text-[var(--alpine-cyan)]">{narrativeIntro.eyebrow}</p>
          <h1 className="mt-5 max-w-[1160px] text-[6.15rem] font-black uppercase leading-[0.9] text-white 2xl:text-[6.7rem]">
            <span className="block">La leggerezza evolve,</span>
            <span className="block">la natura resta.</span>
          </h1>
          <p className="mt-8 max-w-4xl text-[2rem] font-black uppercase leading-tight text-[var(--alpine-ice)] 2xl:mt-10 2xl:text-4xl">
            Dal primo contatto all’Alpine Escape: ogni fase avvicina Sergio e Laurent alla scelta.
          </p>
          <p className="mt-7 max-w-3xl text-[1.35rem] leading-relaxed text-white/[0.76] pitch-body 2xl:text-2xl">{narrativeIntro.subtitle}</p>
        </div>

        <div className="mt-auto grid w-full max-w-[1660px] grid-cols-4 gap-4 pt-10">
          {strategyPhases.map((phase) => (
            <a
              key={phase.id}
              href="#phases"
              onClick={(event) => {
                event.preventDefault()
                scrollToSection('phases')
              }}
              className="group min-h-[160px] border-t border-[var(--alpine-cyan)]/50 bg-[rgba(4,17,39,0.72)] px-7 py-6 backdrop-blur-sm transition hover:bg-[rgba(85,200,240,0.12)] 2xl:min-h-[180px]"
            >
              <p className="font-mono text-4xl leading-none text-[var(--alpine-cyan)] 2xl:text-5xl">{phase.number}</p>
              <p className="mt-4 text-3xl font-black uppercase leading-none text-white 2xl:text-4xl">{phase.label}</p>
              <p className="mt-3 text-lg leading-snug text-white/[0.66] pitch-body 2xl:text-xl">{phase.short}</p>
            </a>
          ))}
        </div>

        <a
          href="#problem"
          onClick={(event) => {
            event.preventDefault()
            scrollToSection('problem')
          }}
          className="mt-7 inline-flex w-fit items-center gap-2 text-base font-black uppercase text-white/[0.55] transition hover:text-[var(--alpine-cyan)]"
        >
          Parti dal problema
          <ArrowDown size={16} weight="bold" />
        </a>
      </div>
    </section>
  )
}

function Problem() {
  return (
    <section id="problem" className="scroll-mt-24 border-t border-white/[0.08] bg-white/[0.02] py-24">
      <div className="mx-auto max-w-[1920px] px-8 2xl:px-12">
        <SectionLabel number="2" label="Problema" />
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <h2 className="max-w-4xl text-7xl font-black uppercase leading-[0.9] text-white">
              Il punto non è far conoscere A390 a tutti.
            </h2>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/[0.72] pitch-body">
              È farla diventare credibile per chi potrebbe davvero sceglierla: persone con gusto, potere di spesa e bisogno di distinguersi senza sentirsi esposte.
            </p>
          </div>

          <div className="grid gap-4">
            {simpleProblems.map((item, index) => (
              <div key={item.title} className="grid grid-cols-[72px_1fr] gap-5 rounded border border-white/[0.11] bg-[rgba(4,17,39,0.46)] p-5">
                <p className="font-mono text-4xl leading-none text-[var(--alpine-cyan)]">0{index + 1}</p>
                <div>
                  <p className="text-2xl font-black uppercase leading-tight text-white">{item.title}</p>
                  <p className="mt-2 text-base leading-relaxed text-white/[0.68] pitch-body">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded border border-[var(--alpine-cyan)]/24 bg-[rgba(85,200,240,0.06)]">
          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
            <div className="relative min-h-[300px]">
              <img src="./assets/phase-approfondire.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[rgba(4,19,39,0.6)]" />
            </div>
            <div className="p-8 lg:p-10">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--alpine-cyan)]">Piattaforma</p>
              <p className="mt-3 text-6xl font-black uppercase leading-none text-white">La leggerezza evolve, la natura resta.</p>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/[0.72] pitch-body">{narrativeIntro.thesis}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Personas({ activePersona, selectedPersona, setActivePersona }) {
  return (
    <section id="personas" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-[1920px] px-8 2xl:px-12">
        <SectionLabel number="3" label="Buyer personas" />
        <div className="flex items-end justify-between gap-8">
          <div>
            <h2 className="text-7xl font-black uppercase leading-[0.9] text-white">Due profili. Una stessa barriera.</h2>
            <p className="mt-5 max-w-3xl text-xl leading-relaxed text-white/[0.68] pitch-body">
              Sergio e Laurent vogliono una scelta personale. La strategia funziona perché li accompagna con touchpoint diversi verso la stessa prova concreta.
            </p>
          </div>
          <div className="flex shrink-0 gap-2">
            {personaStories.map((persona) => (
              <button
                key={persona.id}
                type="button"
                onClick={() => setActivePersona(persona.id)}
                className={`rounded-full border px-6 py-3 text-base font-black uppercase transition ${
                  activePersona === persona.id
                    ? 'border-[var(--alpine-cyan)] bg-[var(--alpine-cyan)] text-[var(--alpine-ink)]'
                    : 'border-white/[0.18] bg-white/[0.04] text-white/[0.55] hover:border-white/[0.35] hover:text-white'
                }`}
              >
                {persona.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[360px_1fr]">
          <div className="relative h-[520px] overflow-hidden rounded border border-white/[0.12]">
            <img src={selectedPersona.image} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--alpine-ink)] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--alpine-cyan)]">{selectedPersona.age}</p>
              <p className="mt-2 text-3xl font-black uppercase leading-none text-white">{selectedPersona.name}</p>
              <p className="mt-1 text-lg font-black uppercase text-white/[0.72]">{selectedPersona.role}</p>
            </div>
          </div>

          <div className="grid gap-4 content-center">
            {[
              ['Tensione', selectedPersona.tension],
              ['Come lo agganciamo', selectedPersona.hook],
              ['Come lo convinciamo', selectedPersona.proof],
            ].map(([label, text], index) => (
              <div key={label} className="grid grid-cols-[72px_1fr] gap-5 border-t border-white/[0.12] bg-white/[0.035] p-6">
                <p className="font-mono text-4xl leading-none text-[var(--alpine-cyan)]">0{index + 1}</p>
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--alpine-cyan)]">{label}</p>
                  <p className="mt-2 text-3xl font-black uppercase leading-tight text-white">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FourPhases({ activePhase, selectedPhase, setActivePhase }) {
  return (
    <section id="phases" className="scroll-mt-24 border-t border-white/[0.08] bg-white/[0.02] py-20">
      <div className="mx-auto max-w-[1920px] px-8 2xl:px-12">
        <SectionLabel number="4" label="Il cuore della strategia" />
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="sticky top-28 flex min-h-[860px] flex-col">
            <h2 className="text-5xl font-black uppercase leading-[0.86] text-white">
              Quattro fasi. Un percorso continuo.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/[0.7] pitch-body">
              Non è un media plan da leggere: è una sequenza. Prima intercettiamo, poi facciamo capire, poi invitiamo, infine facciamo provare.
            </p>

            <div className="mt-8 grid flex-1 grid-rows-4 gap-4">
              {strategyPhases.map((phase) => (
                <button
                  key={phase.id}
                  type="button"
                  onClick={() => setActivePhase(phase.id)}
                  className={`grid grid-cols-[72px_1fr_auto] items-center gap-5 rounded border px-6 py-5 text-left transition ${
                    activePhase === phase.id
                      ? 'border-[var(--alpine-cyan)] bg-[var(--alpine-cyan)] text-[var(--alpine-ink)]'
                      : 'border-white/[0.12] bg-white/[0.035] text-white hover:border-white/[0.28]'
                  }`}
                >
                  <span className="font-mono text-4xl leading-none">{phase.number}</span>
                  <span>
                    <span className="block text-3xl font-black uppercase leading-none">{phase.label}</span>
                    <span className={`mt-3 block text-base font-black uppercase leading-tight ${activePhase === phase.id ? 'text-[var(--alpine-ink)]/70' : 'text-white/[0.48]'}`}>
                      {phase.short}
                    </span>
                  </span>
                  <CaretRight size={28} weight="bold" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <PhaseDetail phase={selectedPhase} />
          </div>
        </div>
        <KeyNumbers />
      </div>
    </section>
  )
}

function KeyNumbers() {
  return (
    <div className="mt-12 rounded border border-[var(--alpine-cyan)]/24 bg-[rgba(4,17,39,0.72)] p-5 backdrop-blur-md">
      <div className="mb-4 flex items-end justify-between gap-8 border-b border-white/[0.1] pb-4">
        <p className="text-3xl font-black uppercase leading-none text-white">Numeri chiave del percorso</p>
        <p className="font-mono text-5xl leading-none text-[var(--alpine-cyan)]">500.000 €</p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {appendixProof.map((item) => (
          <div key={item.phase} className="min-h-[190px] rounded border border-white/[0.1] bg-[rgba(2,11,26,0.44)] p-5">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[var(--alpine-cyan)]">{item.phase}</p>
              <p className="font-mono text-2xl leading-none text-white/[0.58]">{item.timing}</p>
            </div>
            <p className="mt-5 font-mono text-4xl leading-none text-[var(--alpine-cyan)]">{item.budget}</p>
            <p className="mt-4 text-3xl font-black uppercase leading-none text-white">{item.headline}</p>
            <p className="mt-3 text-base leading-relaxed text-white/[0.64] pitch-body">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function PhaseDetail({ phase }) {
  return (
    <article className="overflow-hidden rounded border border-[var(--alpine-cyan)]/28 bg-[rgba(85,200,240,0.065)]">
      <div className="relative h-[430px]">
        <img src={phase.image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--alpine-ink)] via-[rgba(4,19,39,0.36)] to-transparent" />
        <div className="absolute bottom-0 left-0 max-w-3xl p-8">
          <p className="font-mono text-5xl text-[var(--alpine-cyan)]">{phase.number}</p>
          <p className="mt-2 text-sm font-black uppercase tracking-[0.24em] text-[var(--alpine-cyan)]">{phase.label}</p>
          <h3 className="mt-3 text-6xl font-black uppercase leading-[0.92] text-white">{phase.title}</h3>
        </div>
      </div>
      <div className="grid gap-8 p-8 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="text-xl leading-relaxed text-white/[0.78] pitch-body">{phase.narrative}</p>
          <div className="mt-6 flex items-start gap-3 rounded border border-white/[0.1] bg-[rgba(4,17,39,0.42)] p-5">
            <CheckCircle size={24} weight="fill" className="mt-1 shrink-0 text-[var(--alpine-cyan)]" />
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--alpine-cyan)]">Cosa deve succedere</p>
              <p className="mt-1 text-2xl font-black uppercase leading-tight text-white">{phase.outcome}</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--alpine-cyan)]">Touchpoint</p>
          <div className="mt-4 grid gap-3">
            {phase.touchpoints.map((touchpoint) => (
              <div key={touchpoint} className="flex items-center gap-3 border-b border-white/[0.09] pb-3 last:border-0">
                <MapPin size={18} weight="fill" className="shrink-0 text-[var(--alpine-cyan)]" />
                <p className="text-xl font-black uppercase text-white">{touchpoint}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

function Closing() {
  return (
    <section id="closing" className="relative scroll-mt-24 overflow-hidden border-t border-[var(--alpine-cyan)]/26 py-12">
      <img src="./assets/phase-provare.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-62" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,19,39,0.98)_0%,rgba(4,19,39,0.9)_42%,rgba(4,19,39,0.48)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-[var(--alpine-ink)] to-transparent" />

      <div className="relative mx-auto flex min-h-[calc(100vh-76px)] max-w-[1920px] flex-col px-8 2xl:px-12">
        <SectionLabel number="5" label="Conclusione" />

        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <h2 className="max-w-[9ch] text-8xl font-black uppercase leading-[0.84] text-white">{closingStory.title}</h2>
            <p className="mt-7 max-w-3xl text-3xl leading-snug text-white/[0.82] pitch-body">{closingStory.text}</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {closingStory.axes.map(([title, text], index) => (
              <div key={title} className="min-h-[260px] rounded border border-white/[0.13] bg-[rgba(4,17,39,0.62)] p-6 backdrop-blur-md">
                <p className="font-mono text-4xl leading-none text-[var(--alpine-cyan)]">0{index + 1}</p>
                <p className="mt-5 text-3xl font-black uppercase leading-none text-white">{title}</p>
                <p className="mt-5 text-lg leading-relaxed text-white/[0.7] pitch-body">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-[0.9fr_1.1fr] gap-6 border-t border-[var(--alpine-cyan)]/26 pt-8">
          <p className="text-5xl font-black uppercase leading-[0.92] text-white">
            La promessa Alpine diventa una sequenza verificabile.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              ['Selezione', 'Parliamo solo ai profili più coerenti.'],
              ['Relazione', 'Atelier e lounge trasformano attenzione in fiducia.'],
              ['Prova', 'Alpine Escape rende fisica la leggerezza.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded border border-white/[0.11] bg-[rgba(4,17,39,0.58)] p-5 backdrop-blur-md">
                <p className="text-xl font-black uppercase text-[var(--alpine-cyan)]">{title}</p>
                <p className="mt-3 text-base leading-relaxed text-white/[0.7] pitch-body">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionLabel({ number, label }) {
  return (
    <div className="mb-8 flex items-center gap-3 text-[var(--alpine-cyan)]">
      <span className="font-mono text-4xl leading-none">{number}</span>
      <span className="h-px w-16 bg-[var(--alpine-cyan)]/55" />
      <span className="text-3xl font-black uppercase tracking-[0.14em]">{label}</span>
    </div>
  )
}

export default App
