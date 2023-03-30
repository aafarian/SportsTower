export interface PlayerData {
  projectionId: string
  playerName: string
  projections: string[]
}

export interface CardData {
  projectionId: string
  playerName: string
  projection: string
}

export interface PickCardProps extends CardData {
  onSelect: (props: CardData) => void
}
