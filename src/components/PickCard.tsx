import React from 'react'

import { createUseStyles } from 'react-jss'
import { useLocation } from 'react-router-dom'

const useStyles = createUseStyles({
	card: {
		background: 'grey',
		margin: '1rem',
		padding: '1rem',
		maxWidth: 'fit-content',
		textAlign: 'center',
	},
})

const PickCard = (props: {
	name: string,
	proj: string,
	callback: React.MouseEventHandler<HTMLDivElement>
}) => {
	const classes = useStyles()
	return (
		<div
			className={classes.card}
			onClick={props.callback}
		>
			{props.name}
			<hr />
			{props.proj}
		</div>
	)
}

export default PickCard
