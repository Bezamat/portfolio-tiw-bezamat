import type { LinkSocial } from '../types/portfolio'

type ContatoProps = { email?: string; links: LinkSocial[] }

export function Contato({ email, links }: ContatoProps) {
  const redesDisponiveis = links.filter((link) => link.url)
  return (
    <div className="grid gap-6 rounded-2xl bg-slate-900 p-7 text-white sm:p-10 md:grid-cols-2 md:items-center">
      <div>
        <h3 className="text-2xl font-bold">Contato</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">E-mail para contato:</p>
        <p className="mt-1 break-all text-sm font-semibold text-teal-200">{email}</p>
      </div>
      <div className="flex flex-wrap gap-3 md:justify-end">
        {redesDisponiveis.map((link) => (
          <a key={link.rotulo} href={link.url} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-slate-500 px-5 py-3 text-sm font-semibold transition hover:border-teal-300 hover:text-teal-200">{link.rotulo}</a>
        ))}
      </div>
    </div>
  )
}
