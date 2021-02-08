import React, { ReactElement } from 'react';
import classnames from 'classnames';

import './Navbar.css';

export interface NavbarProps {
	children: ReactElement[] | ReactElement;
	className?: 'string';
}

export default function Navbar(props: NavbarProps): JSX.Element {
	const {children, className, ...restProps} = props;

	return (
		<div 
			{...restProps}
			className={classnames('Navbar', className)}
		>
			{children}
		</div>
	);
}