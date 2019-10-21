import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
	background-color: #2d3436;
	height: 150px;
	display: flex;
	align-items: center;

	.brand {
		color: #b2bec3;
		font-size: 2.5rem;
		font-weight: bold;
	}
`;

export const NavigationBar = () => (
	<Styles>
		<Navbar expand="lg">
			<Navbar.Brand href="/" className="brand">
				React Website
			</Navbar.Brand>
		</Navbar>
	</Styles>
);
