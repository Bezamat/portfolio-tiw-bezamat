import type { ReactNode } from 'react'

type PainelProps = {
  id: string
  titulo: string
  subtitulo: string
  numero: string
  children: ReactNode
}

export function Painel({ id, titulo, subtitulo, numero, children }: PainelProps) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className="scroll-mt-28 border-t border-slate-200 py-12 sm:py-16">
      <div className="mb-8 flex flex-wrap items-start gap-4 sm:gap-6">
        <span className="mt-1 font-mono text-sm font-bold text-teal-700">/{numero}</span>
        <div>
          <h2 id={`${id}-titulo`} className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{titulo}</h2>
          <p className="mt-2 text-sm text-slate-500 sm:text-base">{subtitulo}</p>
        </div>
      </div>
      {children}
    </section>
  )
}
