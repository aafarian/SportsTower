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
		display: 'flex',
		flexDirection: 'column'
	},
	header: {
		boxShadow: 'inset 0 0 0 .1rem white',
		padding: '1rem'
	},
	content: {
		width: '100%',
		flex: 1,
		boxShadow: 'inset 0 0 0 .1rem white',
        overflow: 'auto'
	},
    logo: {
        float: 'left',
		padding: '10px'
    },
    user: {
        float: 'right',
		padding: '10px'
    }
})

const Layout = (props: React.HTMLProps<HTMLElement>) => {
    const location = useLocation()
	const classes = useStyles()
	return (
		<div className={classes.background}>
			<div className={classes.header}>
				<span className={classes.logo}><h2>SPORTSTOWER</h2></span>
				<span className={classes.user}><h3>Logged in as {location.state?.username ?? "Tester"}</h3></span>
			</div>
			<div className={classes.content}>
				{props.children}
			</div>
		</div>
	)
}

export default Layout