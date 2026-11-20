import type { Perfil } from '../types/portfolio'

type CabecalhoProps = { perfil: Perfil }

const secoes = [
  { id: 'sobre', titulo: 'Sobre' },
  { id: 'habilidades', titulo: 'Habilidades' },
  { id: 'projetos', titulo: 'Projetos' },
  { id: 'contato', titulo: 'Contato' },
]

export function Cabecalho({ perfil }: CabecalhoProps) {
  return (
    <>
      <header className="border-b border-slate-200 bg-white/90">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <a href="#inicio" className="flex items-center gap-3 font-bold text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700" aria-label="Voltar ao início">
            <span className="flex size-10 items-center justify-center rounded-xl bg-teal-700 text-sm font-bold tracking-wide text-white">RB</span>
            <span className="text-sm tracking-tight sm:text-base">{perfil.nome}</span>
          </a>
          <nav aria-label="Navegação principal" className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-600">
            {secoes.map((secao) => (
              <a key={secao.id} href={`#${secao.id}`} className="transition hover:text-teal-700 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700">{secao.titulo}</a>
            ))}
          </nav>
        </div>
      </header>
      <section id="inicio" aria-label="Apresentação" className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 text-white sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute -right-20 -top-32 size-96 rounded-full border border-teal-300/20" />
        <div className="pointer-events-none absolute -bottom-52 right-4 size-96 rounded-full border border-teal-300/20" />
        <div className="relative flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">Portfólio acadêmico · TIAW</span>
            <h1 className="mt-2 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">{perfil.nome}<span className="text-teal-300">.</span></h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">Estudante de {perfil.curso} no {perfil.instituicao}.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projetos" className="rounded-xl bg-teal-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-teal-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300">Conhecer meus projetos</a>
              <a href="#contato" className="rounded-xl border border-slate-500 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Entrar em contato</a>
            </div>
          </div>
          <div className="shrink-0 self-center rounded-full border border-teal-300/30 bg-white/5 p-3 shadow-2xl">
            <img src={perfil.avatarUrl} alt="Ilustração tecnológica de servidores e equipamentos conectados em rede" className="size-44 rounded-full object-cover sm:size-52" />
          </div>
        </div>
      </section>
    </>
  )
}
