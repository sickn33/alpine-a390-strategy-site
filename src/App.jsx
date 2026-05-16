import { useEffect, useMemo, useState } from 'react'
import {
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
    <header className="sticky top-0 z-40 border-b border-[var(--alpine-cyan)]/16 bg-[rgba(4,16,35,0.92)] shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1920px] items-center justify-between gap-6 px-8 py-0 2xl:px-12">
        <a
          href="#opening"
          onClick={(event) => {
            event.preventDefault()
            scrollToSection('opening')
          }}
          className="flex shrink-0 items-center gap-5"
        >
          <span className="flex h-[76px] overflow-hidden rounded border border-white/[0.14] bg-[rgba(7,22,44,0.82)]">
            <span className="grid h-full w-[240px] place-items-center bg-[rgba(4,16,35,0.96)] px-6">
              <img
                src="./assets/lumsa-logo-white.png"
                alt="LUMSA"
                className="h-[56px] w-full object-contain"
              />
            </span>
            <span className="grid h-full w-11 place-items-center border-x border-white/[0.16] text-sm font-black uppercase text-white/80">x</span>
            <span className="grid h-full w-[240px] place-items-center bg-[rgba(4,16,35,0.96)] px-6">
              <img
                src="./assets/alpine-logo-cropped.png"
                alt="Alpine"
                className="h-[54px] w-full object-contain"
              />
            </span>
          </span>
          <span className="h-12 w-px bg-white/[0.18]" />
          <span className="flex items-baseline gap-3">
            <span className="block text-4xl font-black uppercase leading-none text-white">A390</span>
            <span className="block text-sm font-black uppercase tracking-[0.22em] text-white/[0.64]">Strategia Italia</span>
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
                className={`flex min-w-[104px] items-center justify-center gap-2 rounded px-3 py-2 text-sm font-black uppercase transition ${
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
      </div>
    </section>
  )
}

function Problem() {
  return (
    <section id="problem" className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.08] bg-white/[0.02] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(70,91,180,0.18),transparent_32%),linear-gradient(110deg,rgba(4,17,39,0.96)_0%,rgba(6,33,59,0.78)_58%,rgba(10,58,81,0.48)_100%)]" />
      <div className="absolute inset-0 opacity-[0.42] [background-image:linear-gradient(rgba(82,205,242,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(82,205,242,0.08)_1px,transparent_1px)] [background-size:96px_96px]" />

      <div className="relative mx-auto max-w-[1920px] px-8 2xl:px-12">
        <SectionLabel number="2" label="Problema" />
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div className="relative pt-2">
            <div className="mb-8 h-px w-40 bg-[var(--alpine-cyan)]/55" />
            <h2 className="max-w-4xl text-7xl font-black uppercase leading-[0.88] text-white">
              Il punto non è far conoscere A390 a tutti.
            </h2>
            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-white/[0.72] pitch-body">
              È farla diventare credibile per chi potrebbe davvero sceglierla: persone con gusto, potere di spesa e bisogno di distinguersi senza sentirsi esposte.
            </p>
          </div>

          <div className="relative pl-8">
            <div className="absolute bottom-8 left-0 top-8 w-px bg-gradient-to-b from-[var(--alpine-cyan)] via-[var(--alpine-cyan)]/36 to-transparent" />
            {simpleProblems.map((item, index) => (
              <div key={item.title} className="group relative mb-5 grid grid-cols-[86px_1fr] gap-6 rounded border border-white/[0.1] bg-[rgba(4,17,39,0.58)] p-6 shadow-[0_18px_70px_rgba(0,0,0,0.18)] backdrop-blur-md last:mb-0">
                <span className="absolute left-[-38px] top-8 h-3 w-3 rounded-full border border-[var(--alpine-cyan)] bg-[var(--alpine-ink)] shadow-[0_0_22px_rgba(82,205,242,0.7)]" />
                <p className="font-mono text-4xl leading-none text-[var(--alpine-cyan)]">0{index + 1}</p>
                <div>
                  <p className="text-2xl font-black uppercase leading-tight text-white">{item.title}</p>
                  <p className="mt-3 max-w-4xl text-base leading-relaxed text-white/[0.7] pitch-body">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex items-center gap-5 text-[var(--alpine-cyan)]/50">
          <div className="h-px flex-1 bg-current" />
          <CaretRight size={24} weight="bold" />
          <div className="h-px flex-1 bg-current" />
        </div>

        <div className="mt-8 overflow-hidden rounded border border-[var(--alpine-cyan)]/24 bg-[rgba(85,200,240,0.07)] shadow-[0_26px_90px_rgba(0,0,0,0.2)]">
          <div className="grid lg:grid-cols-[0.58fr_1.42fr]">
            <div className="relative min-h-[320px]">
              <img src="./assets/phase-approfondire.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(4,19,39,0.2)] to-[rgba(4,19,39,0.74)]" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[rgba(4,19,39,0.84)] to-transparent" />
            </div>
            <div className="relative p-8 lg:p-12">
              <div className="absolute bottom-8 left-0 top-8 w-px bg-[var(--alpine-cyan)]/36" />
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--alpine-cyan)]">Piattaforma</p>
              <p className="mt-4 max-w-5xl text-6xl font-black uppercase leading-[0.95] text-white">Non basta raccontarla. Va fatta vivere.</p>
              <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/[0.72] pitch-body">{narrativeIntro.thesis}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Personas({ activePersona, selectedPersona, setActivePersona }) {
  return (
    <section id="personas" className="relative scroll-mt-24 overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(4,17,39,0.95)_0%,rgba(4,17,39,0.84)_54%,rgba(10,58,81,0.5)_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.36] [background-image:linear-gradient(rgba(82,205,242,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(82,205,242,0.08)_1px,transparent_1px)] [background-size:96px_96px]" />

      <div className="relative mx-auto max-w-[1920px] px-8 2xl:px-12">
        <SectionLabel number="3" label="Buyer personas" />
        <div className="max-w-6xl">
          <h2 className="text-7xl font-black uppercase leading-[0.9] text-white">Due profili. Una stessa barriera.</h2>
          <p className="mt-5 max-w-3xl text-xl leading-relaxed text-white/[0.68] pitch-body">
            Sergio e Laurent vogliono una scelta personale. La strategia funziona perché li accompagna con touchpoint diversi verso la stessa prova concreta.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[420px_minmax(0,1fr)] lg:items-stretch">
          <div className="relative min-h-[600px] overflow-hidden rounded border border-white/[0.12] bg-[rgba(2,11,26,0.58)] shadow-[0_24px_80px_rgba(0,0,0,0.26)]">
            <img src={selectedPersona.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,19,39,0.08)_0%,rgba(4,19,39,0.24)_46%,rgba(4,19,39,0.96)_100%)]" />
            <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-white/[0.1] bg-[rgba(4,17,39,0.58)] px-6 py-4 backdrop-blur-md">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--alpine-cyan)]">{selectedPersona.age}</p>
              <p className="font-mono text-sm text-white/45">{selectedPersona.id === 'sergio' ? '01' : '02'}</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-4xl font-black uppercase leading-none text-white 2xl:text-5xl">{selectedPersona.name}</p>
              <p className="mt-2 text-xl font-black uppercase text-white/[0.7]">{selectedPersona.role}</p>
            </div>
          </div>

          <div className="flex min-h-[600px] flex-col overflow-hidden rounded border border-[var(--alpine-cyan)]/18 bg-[rgba(4,17,39,0.58)] shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-md">
            <div className="flex items-center justify-between gap-6 border-b border-white/[0.1] bg-[rgba(85,200,240,0.055)] p-6">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--alpine-cyan)]">{selectedPersona.name}</p>
                <p className="mt-2 text-3xl font-black uppercase leading-none text-white">{selectedPersona.role}</p>
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

            <div className="grid flex-1 grid-rows-3 gap-px bg-white/[0.08]">
              {[
                ['Tensione', selectedPersona.tension],
                ['Come lo agganciamo', selectedPersona.hook],
                ['Come lo convinciamo', selectedPersona.proof],
              ].map(([label, text], index) => (
                <div key={label} className="grid grid-cols-[92px_220px_1fr] items-center gap-7 bg-[rgba(7,31,67,0.42)] p-6">
                  <p className="font-mono text-5xl leading-none text-[var(--alpine-cyan)]">0{index + 1}</p>
                  <div className="border-l border-[var(--alpine-cyan)]/45 pl-5">
                    <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--alpine-cyan)]">{label}</p>
                  </div>
                  <p className="text-3xl font-black uppercase leading-tight text-white 2xl:text-4xl">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FourPhases({ activePhase, selectedPhase, setActivePhase }) {
  return (
    <section id="phases" className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.08] bg-white/[0.02] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(85,200,240,0.12),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.025),transparent_42%)]" />
      <div className="mx-auto max-w-[1920px] px-8 2xl:px-12">
        <SectionLabel number="4" label="Il cuore della strategia" />
        <div className="relative grid gap-8 lg:grid-cols-[430px_minmax(0,1fr)] lg:items-stretch 2xl:grid-cols-[500px_minmax(0,1fr)]">
          <div className="sticky top-28 flex h-full min-h-[860px] flex-col rounded border border-white/[0.1] bg-[rgba(2,11,26,0.5)] p-5 backdrop-blur-md 2xl:min-h-[900px]">
            <h2 className="text-5xl font-black uppercase leading-[0.86] text-white 2xl:text-6xl">
              Quattro fasi. Un percorso continuo.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/[0.7] pitch-body 2xl:text-xl">
              Non è un media plan da leggere: è una sequenza. Prima intercettiamo, poi facciamo capire, poi invitiamo, infine facciamo provare.
            </p>

            <div className="mt-8 grid flex-1 grid-rows-4 gap-3">
              {strategyPhases.map((phase, index) => (
                <button
                  key={phase.id}
                  type="button"
                  onClick={() => setActivePhase(phase.id)}
                  className={`group relative min-h-0 overflow-hidden rounded border px-5 py-4 text-left transition ${
                    activePhase === phase.id
                      ? 'border-[var(--alpine-cyan)] bg-[var(--alpine-cyan)] text-[var(--alpine-ink)] shadow-[0_0_36px_rgba(85,200,240,0.22)]'
                      : 'border-white/[0.12] bg-white/[0.035] text-white hover:border-white/[0.28] hover:bg-white/[0.055]'
                  }`}
                >
                  <span className={`absolute left-0 top-0 h-full w-1 ${activePhase === phase.id ? 'bg-[var(--alpine-ink)]/24' : 'bg-[var(--alpine-cyan)]/55'}`} />
                  <span className="grid h-full grid-cols-[72px_1fr_auto] items-center gap-5">
                    <span className="font-mono text-4xl leading-none">{phase.number}</span>
                    <span>
                      <span className="block text-3xl font-black uppercase leading-none">{phase.label}</span>
                      <span className={`mt-3 block text-base font-black uppercase leading-tight ${activePhase === phase.id ? 'text-[var(--alpine-ink)]/70' : 'text-white/[0.48]'}`}>
                        {phase.short}
                      </span>
                    </span>
                    <CaretRight size={28} weight="bold" className={`transition ${activePhase === phase.id ? 'translate-x-1' : 'text-[var(--alpine-cyan)] group-hover:translate-x-1'}`} />
                  </span>
                  <span className={`absolute bottom-0 left-0 h-px transition-all ${activePhase === phase.id ? 'w-full bg-[var(--alpine-ink)]/25' : index === strategyPhases.length - 1 ? 'w-0' : 'w-full bg-white/[0.07]'}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="min-w-0">
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
    <div className="mt-10 overflow-hidden rounded border border-[var(--alpine-cyan)]/24 bg-[rgba(2,11,26,0.58)] shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-md">
      <div className="grid items-end gap-6 border-b border-white/[0.1] bg-[rgba(85,200,240,0.055)] p-6 lg:grid-cols-[1fr_auto]">
        <p className="text-3xl font-black uppercase leading-none text-white 2xl:text-4xl">Numeri chiave del percorso</p>
        <p className="font-mono text-5xl leading-none text-[var(--alpine-cyan)] 2xl:text-6xl">500.000 €</p>
      </div>
      <div className="grid grid-cols-4 gap-px bg-white/[0.08]">
        {appendixProof.map((item) => (
          <div key={item.phase} className="min-h-[210px] bg-[rgba(4,17,39,0.88)] p-6 transition hover:bg-[rgba(7,31,67,0.92)]">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[var(--alpine-cyan)]">{item.phase}</p>
              <p className="font-mono text-2xl leading-none text-white/[0.58]">{item.timing}</p>
            </div>
            <p className="mt-6 font-mono text-4xl leading-none text-[var(--alpine-cyan)] 2xl:text-5xl">{item.budget}</p>
            <p className="mt-5 text-3xl font-black uppercase leading-none text-white">{item.headline}</p>
            <p className="mt-4 text-base leading-relaxed text-white/[0.64] pitch-body 2xl:text-lg">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function PhaseDetail({ phase }) {
  return (
    <article className="flex h-full min-h-[860px] flex-col overflow-hidden rounded border border-[var(--alpine-cyan)]/28 bg-[rgba(85,200,240,0.065)] shadow-[0_24px_90px_rgba(0,0,0,0.22)] 2xl:min-h-[900px]">
      <div className="relative h-[460px] shrink-0">
        <img src={phase.image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,19,39,0.96)_0%,rgba(4,19,39,0.58)_50%,rgba(4,19,39,0.08)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--alpine-ink)] to-transparent" />
        <div className="absolute bottom-0 left-0 max-w-4xl p-8 2xl:p-10">
          <p className="font-mono text-5xl text-[var(--alpine-cyan)]">{phase.number}</p>
          <p className="mt-2 text-sm font-black uppercase tracking-[0.24em] text-[var(--alpine-cyan)]">{phase.label}</p>
          <h3 className="mt-3 text-6xl font-black uppercase leading-[0.92] text-white 2xl:text-7xl">{phase.title}</h3>
        </div>
      </div>
      <div className="grid flex-1 gap-px bg-white/[0.09] lg:grid-cols-[1fr_0.82fr]">
        <div className="h-full">
          <div className="h-full bg-[rgba(7,31,67,0.52)] p-8 2xl:p-10">
            <p className="text-xl leading-relaxed text-white/[0.78] pitch-body 2xl:text-2xl">{phase.narrative}</p>
            <div className="mt-7 flex items-start gap-3 rounded border border-white/[0.1] bg-[rgba(4,17,39,0.58)] p-5">
            <CheckCircle size={24} weight="fill" className="mt-1 shrink-0 text-[var(--alpine-cyan)]" />
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--alpine-cyan)]">Cosa deve succedere</p>
              <p className="mt-2 text-2xl font-black uppercase leading-tight text-white 2xl:text-3xl">{phase.outcome}</p>
            </div>
            </div>
          </div>
        </div>
        <div className="bg-[rgba(4,17,39,0.74)] p-8 2xl:p-10">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--alpine-cyan)]">Touchpoint</p>
          <div className="mt-5 grid gap-3">
            {phase.touchpoints.map((touchpoint) => (
              <div key={touchpoint} className="flex items-center gap-3 border-b border-white/[0.09] pb-4 last:border-0">
                <MapPin size={18} weight="fill" className="shrink-0 text-[var(--alpine-cyan)]" />
                <p className="text-xl font-black uppercase text-white 2xl:text-2xl">{touchpoint}</p>
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
            {closingStory.axes.map((axis, index) => (
              <div key={axis.title} className="min-h-[390px] rounded border border-white/[0.14] bg-[rgba(4,17,39,0.68)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-md">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-5xl leading-none text-[var(--alpine-cyan)]">0{index + 1}</p>
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--alpine-cyan)] shadow-[0_0_20px_rgba(78,205,241,0.9)]" />
                </div>
                <p className="mt-5 text-3xl font-black uppercase leading-none text-white">{axis.title}</p>
                <div className="mt-7 space-y-5">
                  {[
                    ['Idea', axis.idea],
                    ['Dove accade', axis.where],
                    ['Effetto', axis.effect],
                  ].map(([label, text]) => (
                    <div key={label} className="border-l border-[var(--alpine-cyan)]/45 pl-4">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--alpine-cyan)]">{label}</p>
                      <p className="mt-2 text-base leading-relaxed text-white/[0.74] pitch-body">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-[0.82fr_1.18fr] gap-8 border-t border-[var(--alpine-cyan)]/26 pt-8">
          <p className="text-5xl font-black uppercase leading-[0.92] text-white">
            La promessa Alpine diventa una sequenza verificabile.
          </p>
          <div className="grid grid-cols-3 gap-0 rounded border border-white/[0.12] bg-[rgba(4,17,39,0.64)] backdrop-blur-md">
            {closingStory.pipeline.map((step, index) => (
              <div key={step.title} className="relative min-h-[190px] p-6">
                {index < closingStory.pipeline.length - 1 && (
                  <CaretRight
                    size={26}
                    weight="bold"
                    className="absolute right-[-13px] top-8 z-10 rounded-full border border-[var(--alpine-cyan)]/35 bg-[var(--alpine-ink)] p-1 text-[var(--alpine-cyan)]"
                  />
                )}
                <p className="font-mono text-sm text-white/45">0{index + 1}</p>
                <p className="mt-3 text-2xl font-black uppercase leading-none text-[var(--alpine-cyan)]">{step.title}</p>
                <p className="mt-4 text-base leading-relaxed text-white/[0.72] pitch-body">{step.text}</p>
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
