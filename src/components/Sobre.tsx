import type { Perfil } from '../types/portfolio'

type SobreProps = { perfil: Perfil }

export function Sobre({ perfil }: SobreProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
        <h3 className="text-lg font-bold text-slate-900">Um pouco sobre mim</h3>
        <p className="mt-4 leading-7 text-slate-600">{perfil.apresentacao}</p>
        <p className="mt-3 leading-7 text-slate-600">{perfil.interesse}</p>
        <p className="mt-3 leading-7 text-slate-600">{perfil.objetivo}</p>
      </div>
      <div className="rounded-2xl border border-teal-100 bg-teal-50 p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-teal-700">Formação</p>
        <h3 className="mt-4 text-xl font-bold text-slate-900">{perfil.curso}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{perfil.instituicao}</p>
        <span className="mt-7 inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-teal-800">Em formação</span>
      </div>
    </div>
  )
}
