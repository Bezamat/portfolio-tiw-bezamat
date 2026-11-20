import type { Habilidade, NivelHabilidade } from '../types/portfolio'

type ListaHabilidadesProps = { habilidades: Habilidade[] }

const CLASSES_NIVEL: Record<NivelHabilidade, string> = {
  básico: 'bg-sky-50 text-sky-800 border-sky-200',
  intermediário: 'bg-teal-50 text-teal-800 border-teal-200',
  avançado: 'bg-amber-50 text-amber-800 border-amber-200',
}

export function ListaHabilidades({ habilidades }: ListaHabilidadesProps) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {habilidades.map((habilidade) => (
        <li key={habilidade.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-teal-300 hover:shadow-md">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">{habilidade.categoria}</p>
          <h3 className="mt-3 text-lg font-bold text-slate-900">{habilidade.nome}</h3>
          <span className={`mt-5 inline-block rounded-full border px-3 py-1 text-xs font-semibold capitalize ${CLASSES_NIVEL[habilidade.nivel]}`}>{habilidade.nivel}</span>
        </li>
      ))}
    </ul>
  )
}
