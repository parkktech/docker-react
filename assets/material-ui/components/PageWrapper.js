import React from 'react'
import Nav from './Nav';
const PageWrapper = (props) => {
	return (
		<div className="page">
			<Nav />
			<div className="container">
				{props.children}
			</div>
		</div>
	)
}

export default PageWrapper
