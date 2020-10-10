const paths = {};

export const Icon = ({ name }) => {
	const path = paths[name];

	return (
		<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path d={path} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
		</svg>
	);
};
