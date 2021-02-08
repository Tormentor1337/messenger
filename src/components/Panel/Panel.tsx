import React, { HTMLAttributes, ReactElement, useEffect, useState } from 'react';
import classnames from 'classnames';

import './Panel.css';
import Spinner from '../Spinner/Spinner';

export interface PanelProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactElement[] | ReactElement;
	className?: string;
}

export default function Panel(props: PanelProps): JSX.Element {
	const {children, className, ...restProps} = props;

	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 5000);
	}, []);

	return (
		<div
			{...restProps} 
			className={classnames('Panel', className)}
		>
			{isLoading && (
				<div className="Panel__loading">
					<Spinner />
				</div>
			)}
			<div className="Panel__content">
				{children}
			</div>
		</div>
	);
}