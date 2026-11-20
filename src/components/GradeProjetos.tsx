import type { Projeto } from '../types/portfolio'
import { CardProjeto } from './CardProjeto'

type GradeProjetosProps = { projetos: Projeto[] }

export function GradeProjetos({ projetos }: GradeProjetosProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projetos.map((projeto, indice) => (
        <CardProjeto key={projeto.id} projeto={projeto} numero={indice + 1} />
      ))}
    </div>
  )
}
