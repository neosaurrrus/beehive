export interface Game {
  name: string
  admin: string
  is_revealed: boolean
  id: number
}

export interface Player {
  id: number
  name: string
  score: number
  is_admin: boolean
  game_id: number
}