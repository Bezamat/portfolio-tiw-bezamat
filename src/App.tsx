import { Cabecalho } from './components/Cabecalho'
import { Contato } from './components/Contato'
import { GradeProjetos } from './components/GradeProjetos'
import { ListaHabilidades } from './components/ListaHabilidades'
import { Painel } from './components/Painel'
import { Rodape } from './components/Rodape'
import { Sobre } from './components/Sobre'
import { HABILIDADES, PERFIL_DADOS, PROJETOS } from './data/portifolioData'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Cabecalho perfil={PERFIL_DADOS} />
      <main className="mx-auto max-w-6xl px-5 pt-6 sm:px-8 sm:pt-8">
        <Painel id="sobre" titulo="Sobre mim" subtitulo="Minha formação, interesses e objetivos" numero="01">
          <Sobre perfil={PERFIL_DADOS} />
        </Painel>
        <Painel id="habilidades" titulo="Habilidades" subtitulo="Tecnologias e áreas que fazem parte da minha formação" numero="02">
          <ListaHabilidades habilidades={HABILIDADES} />
        </Painel>
        <Painel id="projetos" titulo="Projetos" subtitulo="Ideias e atividades acadêmicas em desenvolvimento" numero="03">
          <GradeProjetos projetos={PROJETOS} />
        </Painel>
        <Painel id="contato" titulo="Contato" subtitulo="Canais para conversar e trocar experiências" numero="04">
          <Contato email={PERFIL_DADOS.email} links={PERFIL_DADOS.links} />
        </Painel>
        <Rodape ano={new Date().getFullYear()} autor={PERFIL_DADOS.nome} />
      </main>
    </div>
  )
}
