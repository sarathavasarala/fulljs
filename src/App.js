import React from 'react'
import {render} from 'react-dom'

const Comp = () => {
	return (
			<div className="h3">Working</div>
		)
}

render(<Comp/>, document.getElementById('root-container'))