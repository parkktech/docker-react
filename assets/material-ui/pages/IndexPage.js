import React from 'react';
import PageWrapper from '../components/PageWrapper';

const IndexPage = (props) => {
	return (
		<PageWrapper>
			<h1>Dockerised React App</h1>
			<p>This docker image provides a development environment with <a href="https://github.com/facebookincubator/create-react-app">Create React App</a>. Optionally Redux can also be utilised for larger projects</p>
			<p>Further documentation for this environment can be found on <a href="https://github.com/dylanrhysscott/docker-react-dev">GitHub</a></p>
		</PageWrapper>
	)
}

export default IndexPage
