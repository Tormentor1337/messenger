import React, { HTMLAttributes, ReactElement } from 'react';
import classnames from 'classnames';

import './NavbarItem.css';

export interface NavbarItemProps extends HTMLAttributes<HTMLDivElement> {
	text: string;
	children?: ReactElement;
	active?: boolean;
	className?: string;
}

export default function NavbarItem(props: NavbarItemProps): JSX.Element {
	const { text, children, active, className, ...restProps } = props;

	return (
		<div 
			{...restProps}
			className={classnames('NavbarItem', { 'NavbarItem--active': active }, className)}
		>
			<div className="NavbarItem__icon">
				{children}
			</div>
			<div className="NavbarItem__text">
				{text}
			</div>
		</div>
	);
}