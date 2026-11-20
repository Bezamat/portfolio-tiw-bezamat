export type NivelHabilidade = 'básico' | 'intermediário' | 'avançado'

export type Habilidade = {
  id: number
  nome: string
  categoria: string
  nivel: NivelHabilidade
}

export type StatusProjeto = 'concluído' | 'em andamento' | 'planejado'

export type Projeto = {
  id: number
  titulo: string
  descricao: string
  tecnologias: string[]
  status: StatusProjeto
  repositorioUrl?: string
}

export type LinkSocial = {
  rotulo: string
  url?: string
}

export type Perfil = {
  nome: string
  curso: string
  instituicao: string
  avatarUrl: string
  apresentacao: string
  interesse: string
  objetivo: string
  email?: string
  links: LinkSocial[]
}
