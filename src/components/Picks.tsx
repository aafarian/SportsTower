import React from 'react'
import Layout from './Layout'
import PickCard from './PickCard'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container: {
    position: 'relative',
    // margin: 'auto',
    // padding: '1rem',
    display: 'flex',
    boxShadow: 'inset 0 0 0 .1rem white',
    overflow: 'hidden',
    height: '100%'
  },
  cart: {
    display: 'flex',
    flexDirection: 'column',
    width: '33%',
    boxShadow: 'inset 0 0 0 .1rem white',
    resize: 'horizontal',
    overflow: 'auto'
  },
  picks: {
    padding: '1rem',
    display: 'grid',
    flex: '1',
    gridTemplateColumns: 'repeat(3,1fr)',
    // gap: '1rem',
    boxShadow: 'inset 0 0 0 .1rem white',
    overflow: 'auto'
  }
})

interface Pick { name: string, proj: string[] }

// TODO: replace with processed data from API
const pickData: Pick[] = [
  {
    name: 'Hampig Beefcow',
    proj: [
      '100% not vegan',
      'Almost 50% pork',
      'Too old for veal',
      'Star quarterback'
    ]
  },
  {
    name: 'Skhtor Sandwich',
    proj: ['75% edible', 'Contains nuts', 'Raw or spread', 'Misunderstood']
  },
  {
    name: 'Barnaby Buzelian',
    proj: [
      'Old as dirt',
      'Alien conspiracist',
      'Bone enthusiast',
      'Snorts lint'
    ]
  },
  {
    name: 'Amo Overflow',
    proj: [
      'Upset at the Moon',
      'Absolutely zonked',
      'Genius wizard',
      'Smells burnt'
    ]
  }
]

const getPickCards = (data: Pick[]) => {
  return data.map((player, indexA) => {
    return player.proj.map((projection, indexB) => {
      return (
        <PickCard
          name={player.name}
          proj={projection}
          key={`${indexA}${indexB}`}
          onSelect={({ name, proj }) => {
            const cardData = { name, proj }
            console.log(cardData)
          }}
        />
      )
    })
  })
}

export const Picks = (props: React.HTMLProps<HTMLElement>) => {
  const classes = useStyles()
  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.cart} id="cart"></div>
        <div className={classes.picks}>
          {
            // inject picks into PickCards
            getPickCards(pickData)
          }
        </div>
      </div>
    </Layout>
  )
}
