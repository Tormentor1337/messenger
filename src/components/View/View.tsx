import React, { HTMLAttributes, ReactElement } from 'react';
import classnames from 'classnames';

import './View.css';

export interface ViewProps extends HTMLAttributes<HTMLDivElement> {
	activePanel?: string;
	children: ReactElement[] | ReactElement;
	className?: string;
}

export default function View(props: ViewProps): JSX.Element {
	const {children, className, ...restProps} = props;

	return (
		<div
			{...restProps} 
			className={classnames('View', className)}
		>
			{children}
		</div>
	);
}