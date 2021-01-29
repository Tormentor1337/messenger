import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

export interface RootProps extends HTMLAttributes<HTMLDivElement> {
	// activeScreen: string;
	classNames?: string;
}

export default function Root(props: RootProps): JSX.Element {

	const {className, ...restProps} = props;

	return (
		<div className={classNames('Root', className)} {...restProps}>
			
		</div>
	);
}