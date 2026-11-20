import type { Habilidade, Perfil, Projeto } from '../types/portfolio'

export const PERFIL_DADOS: Perfil = {
  nome: 'RAFAEL SOUZA BEZAMAT',
  curso: 'ADS — 3º período',
  instituicao: 'IFTM UPT',
  avatarUrl: '/avatar.webp',
  apresentacao: 'Sou estudante de Análise e Desenvolvimento de Sistemas e estou concluindo o 3º período.',
  interesse: 'Quero concluir a faculdade e focar na área de Redes e CyberSegurança, pois foi a área que sempre gostei.',
  objetivo: 'Além disso, também quero aprender as demais áreas para aprofundar e entender melhor sobre a área da computação/programação, adquirindo experiência para encontrar as oportunidades perfeitas!',
  email: 'rafael.bezamat@estudante.iftm.edu.br',
  links: [
    { rotulo: 'GitHub', url: 'https://github.com/Bezamat' },
    { rotulo: 'LinkedIn', url: 'https://www.linkedin.com/in/rafael-bezamat/' },
  ],
}

export const HABILIDADES: Habilidade[] = [
  { id: 1, nome: 'React', categoria: 'Desenvolvimento web', nivel: 'básico' },
  { id: 2, nome: 'TypeScript', categoria: 'Desenvolvimento web', nivel: 'básico' },
  { id: 3, nome: 'Angular', categoria: 'Desenvolvimento web', nivel: 'básico' },
  { id: 4, nome: 'HTML', categoria: 'Desenvolvimento web', nivel: 'intermediário' },
  { id: 5, nome: 'CSS', categoria: 'Desenvolvimento web', nivel: 'intermediário' },
  { id: 6, nome: 'Tailwind CSS', categoria: 'Desenvolvimento web', nivel: 'básico' },
  { id: 7, nome: 'C', categoria: 'Programação', nivel: 'intermediário' },
  { id: 8, nome: 'Java', categoria: 'Programação', nivel: 'intermediário' },
  { id: 9, nome: 'Banco de dados', categoria: 'Dados', nivel: 'intermediário' },
  { id: 10, nome: 'MySQL', categoria: 'Dados', nivel: 'intermediário' },
  { id: 11, nome: 'Oracle Database', categoria: 'Dados', nivel: 'intermediário' },
]

export const PROJETOS: Projeto[] = [
  {
    id: 1,
    titulo: 'Sistema de Controle do JIF',
    descricao: 'Projeto de extensão desenvolvido para apoiar a organização, análise e o gerenciamento dos jogos do Instituto Federal. A plataforma centraliza informações sobre as partidas e facilita o acompanhamento da competição. O trabalho conquistou o 2º lugar na competição.',
    tecnologias: ['JavaScript', 'Firebase (banco de dados)', 'HTML', 'CSS'],
    status: 'concluído',
  },
  {
    id: 2,
    titulo: 'Lista de Tarefas/Calculadora de IMC',
    descricao: 'Aplicação acadêmica feita para a mesma matéria do professor para calcular o Índice de Massa Corporal (IMC) a partir dos dados informados pelo usuário.',
    tecnologias: ['Angular', 'TypeScript'],
    status: 'concluído',
  },
  {
    id: 3,
    titulo: 'Algoritmos de Caminhos',
    descricao: 'Projeto acadêmico de estudo de algoritmos para encontrar caminhos em grafos, incluindo A* e Dijkstra.',
    tecnologias: ['Java', 'Grafos'],
    status: 'concluído',
  },
]