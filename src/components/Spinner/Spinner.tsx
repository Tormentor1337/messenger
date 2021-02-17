import React, { HTMLAttributes } from 'react';
import classnames from 'classnames';

import './Spinner.css';

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
}

export default function Spinner(props: SpinnerProps): JSX.Element {
	const {className, ...restProps} = props;

	return (
		<div 
			{...restProps}
			className={classnames('Spinner', className)} 
		/>
	);
}