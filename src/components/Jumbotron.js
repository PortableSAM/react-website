import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import bgImage from '../components/assets/bgImage.jpg';

const Styles = styled.div`
	.jumbo {
		background: url(${bgImage}) no-repeat fixed bottom;
		background-size: cover;
		color: #ecf0f1;
		height: 200px;
		position: relative;
		z-index: -2;
	}

	.overlay {
		background-color: #7f8c8d;
		opacity: 0.15;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: -1;
	}

	h1 {
		font-size: 3.5em;
		font-family: 'Dokdo', cursive;
	}

	p {
		font-size: 1.2rem;
		font-family: 'Dokdo', cursive;
	}
`;

export const Jumbotron = () => {
	return (
		<Styles>
			<Jumbo fluid className="jumbo">
				<div className="overlay"></div>
				<Container>
					<h1>Welcom Test site</h1>
					<p>This is a react SPA made from bootstrap.</p>
				</Container>
			</Jumbo>
		</Styles>
	);
};
