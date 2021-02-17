import React, { HTMLAttributes, ReactElement, ReactText, useEffect, useState } from 'react';
import classnames from 'classnames';
import Spinner from '../Spinner/Spinner';

import './Panel.css';

export interface PanelProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactElement[] | ReactElement | ReactText;
	title?: string;
	className?: string;
}

export default function Panel(props: PanelProps): JSX.Element {
	const {title, children, className, ...restProps} = props;

	const [isLoading, setIsLoading] = useState<boolean>(true);
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 500);
	}), [];

	const [isFixed, setIsFixed] = useState<boolean>(true);
	useEffect(() => {
		const scroll = createScroll();
		window.addEventListener('scroll', scroll);

		return () => {
			window.removeEventListener('scroll', scroll);
		};
	}, []);

	const createScroll = () => {
		let prev = 0, 
			curr = 0;

		return () => {
			prev = curr;
			curr = pageYOffset;

			setIsFixed(curr < prev);
		};
	};

	return (
		<div
			{...restProps} 
			className={classnames('Panel', {'Panel--loading': isLoading}, className)}
		>
			{isLoading && (
				<div className="Panel__loading">
					<Spinner />
				</div>
			)}
			<div className="Panel__in">
				{title && (
					<div className="Panel__header">
						<div className={classnames('Panel__header-in', {'Panel__header-in--fixed': isFixed})}>{title}</div>
					</div> 
				)}
				<div className="Panel__content">
					{children}
				</div>
			</div>
		</div>
	);
}