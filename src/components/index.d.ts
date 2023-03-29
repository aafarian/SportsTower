export interface CardData {
  projID: string
  playerName: string
  projection: string
}

export interface PickCardProps extends CardData {
  onSelect: (props: CardData) => void
}
