import React from 'react'
import { useLocation } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	background: {
		position: 'absolute',
		left: '0px',
		top: '0px',
		fontSize: '24px',
		color: 'white',
		background: 'black',
		width: '100vw',
		height: '100vh',
	},
	header: {
		position: 'absolute',
		width: '100%',
        background: 'grey'
	},
    logo: {
        position: 'absolute',
        left: '1rem'
    },
    user: {
        position: 'absolute',
        right: '1rem'
    }
})

export const Picks = () => {
    const location = useLocation()
	const classes = useStyles()
	return (
		<div className={classes.background}>
			<div className={classes.header}>
				<span className={classes.logo}><h2>SPORTSTOWER</h2></span>
				<span className={classes.user}><h3>Logged in as {location.state.username}</h3></span>
			</div>
		</div>
	)
}
