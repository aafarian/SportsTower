export type Projection = [string, string]

export interface PlayerData {
  playerName: string
  projections: Projection[]
}

export interface CardData {
  projectionId: string
  playerName: string
  projection: string
}

export interface PickCardProps extends CardData {
  onSelect: (props: CardData) => void
}
