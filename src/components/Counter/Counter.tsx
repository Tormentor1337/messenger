import React, { HTMLAttributes } from 'react';
import classnames from 'classnames';

import './Counter.css';

export interface CounterProps extends HTMLAttributes<HTMLDivElement> {
	children?: string | number;
	classNames?: string;
}

export default function Counter(props: CounterProps): JSX.Element {
	const {children, className, ...restProps} = props;
	
	return (
		<div 
			{...restProps}
			className={classnames('Counter', className)}
		>
			{children}
		</div>
	);	
}