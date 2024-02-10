export interface Projection {
  playerName?: string
  playerImage?: string
  projectionId: string
  category: string
  value: number
}

export interface PlayerData {
  playerName: string
  playerImage: string
  projections: Projection[]
}

export interface CardData {
  projectionId: string
}

export interface PickCardProps extends CardData {
  onSelect: (props: CardData) => void
}
