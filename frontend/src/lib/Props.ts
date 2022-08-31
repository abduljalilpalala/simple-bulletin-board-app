export type NavItem = {
  text: string
  path: string
}

export type Article = {
  id?: number
  title: string
  content: string
  date?: string
}

export type Fields = 'id' | 'title' | 'content' | 'date'
