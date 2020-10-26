export const Definition = ({ description, term }) => {
	return (
		<div className="flex space-x-2">
			<dt className="font-medium text-gray-900">{term}</dt>
			<dd className="text-gray-800">{description}</dd>
		</div>
	);
};
