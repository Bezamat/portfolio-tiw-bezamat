type RodapeProps = { ano: number; autor: string }

export function Rodape({ ano, autor }: RodapeProps) {
  return (
    <footer className="flex flex-col justify-between gap-3 border-t border-slate-200 py-8 text-sm text-slate-500 sm:flex-row">
      <p>© {ano} {autor}. Portfólio Acadêmico.</p>
      <p>Desenvolvido para a matéria TIAW · React + TypeScript + Tailwind CSS</p>
    </footer>
  )
}
