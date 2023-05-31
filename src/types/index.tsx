export interface Game {
  name: string
  admin: string
  id: number
}

export interface Player {
  id: number
  name: string
  score: number
  is_admin: boolean
  game_id: number
}