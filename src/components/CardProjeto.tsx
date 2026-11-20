import type { Projeto } from '../types/portfolio'

type CardProjetoProps = { projeto: Projeto; numero: number }

export function CardProjeto({ projeto, numero }: CardProjetoProps) {
  const emAndamento = projeto.status === 'em andamento'
  const concluido = projeto.status === 'concluído'
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-teal-300 hover:shadow-md">
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-sm font-semibold text-teal-700">PROJETO {String(numero).padStart(2, '0')}</span>
        <span className={`rounded-full px-3 py-1 text-xs font-bold ${emAndamento ? 'bg-amber-100 text-amber-800' : concluido ? 'bg-teal-100 text-teal-800' : 'bg-slate-100 text-slate-700'}`}>
          {emAndamento ? 'Em andamento' : concluido ? 'Concluído' : 'Planejado'}
        </span>
      </div>
      <h3 className="mt-6 text-xl font-bold text-slate-900">{projeto.titulo}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{projeto.descricao}</p>
      <div className="mt-6 flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
        {projeto.tecnologias.length > 0 ? projeto.tecnologias.map((tecnologia) => (
          <span key={tecnologia} className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-700">{tecnologia}</span>
        )) : <span className="text-xs text-slate-500">Tecnologias utilizadas no Projeto: React 19, TypeScript, Vite 8 e Tailwind CSS 4.</span>}
      </div>
      {projeto.repositorioUrl && (
        <a href={projeto.repositorioUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block border-t border-slate-100 pt-4 text-sm font-bold text-teal-800 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700">Ver repositório no GitHub →</a>
      )}
    </article>
  )
}
