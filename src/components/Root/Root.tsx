import React, { HTMLAttributes, ReactElement, useEffect, useState } from 'react';
import classnames from 'classnames';

import './Root.css';

export interface RootProps extends HTMLAttributes<HTMLDivElement> {
	activeView: string;
	children: ReactElement[] | ReactElement;
	navbar: ReactElement;
	className?: string;
}

export default function Root(props: RootProps): JSX.Element {
	const {activeView, children, navbar, className, ...restProps} = props;

	const views: ReactElement[] = [].concat(children);

	const [loaded, setLoaded] = useState<ReactElement[]>([]);
	useEffect(() => {
		const active = views.find((x) => x.props.id === activeView);
		if (
			loaded
				.filter(x => x.props.id === active.props.id)
				.length
		) {
			return;
		}

		setLoaded([...loaded, active]);
	}, [activeView]);

	return (
		<div 
			{...restProps}
			className={classnames('Root', className)} 
		>
			<div className="Root__content" >
				{loaded.map((view) => {
					const isActive = view.props.id === activeView;
					return (
						<div 
							className={classnames('Root__loaded', {
								'Root__loaded--active': isActive
							})}
							key={view.props.id} 
						>
							{view}
						</div>
					);
				})}
			</div>
			<div className="Root__navbar">
				<div className="Root__navbar-in">
					{navbar}
				</div>
			</div>
		</div>
	);
}