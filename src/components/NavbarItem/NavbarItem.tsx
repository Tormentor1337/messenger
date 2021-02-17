import React, { HTMLAttributes, ReactElement } from 'react';
import classnames from 'classnames';

import './NavbarItem.css';

export interface NavbarItemProps extends HTMLAttributes<HTMLDivElement> {
	active: boolean;
	children: ReactElement;
	text?: string;
	counter?: ReactElement;
	className?: string;
}

export default function NavbarItem(props: NavbarItemProps): JSX.Element {
	const { active, children, text, counter, className, ...restProps } = props;

	return (
		<div 
			{...restProps}
			className={classnames('NavbarItem', { 'NavbarItem--active': active }, className)}
		>
			<div className="NavbarItem__icon">
				{ counter && (
					<div className="NavbarItem__counter">
						{counter}
					</div>
				)}
				{children}
			</div>
			<div className="NavbarItem__text">
				{text}
			</div>
		</div>
	);
}