import clsx from "clsx";

export const Table = ({ head, body, onRowClick: handleRowClick = () => {} }) => {
	return (
		<table className="block max-w-full overflow-auto md:table md:w-full">
			<thead>
				<tr className="text-left">
					{head.map((header, i) => {
						const isFirst = i === 0;
						const isLast = i === head.length - 1;

						return (
							<th
								key={header}
								className={clsx(
									"p-4 font-medium text-gray-900 uppercase whitespace-no-wrap bg-gray-400 text-x1",
									isFirst && "rounded-tl",
									isLast && "rounded-tr"
								)}
							>
								{header}
							</th>
						);
					})}
				</tr>
			</thead>
			<tbody>
				{body.map((data, i) => {
					const isEven = i % 2 === 0;
					const isOdd = !isEven;

					return (
						<tr
							key={i}
							className={clsx(
								"text-left transition duration-300 ease-in-out cursor-pointer",
								isEven && "bg-white hover:bg-gray-300",
								isOdd && "bg-gray-100 hover:bg-gray-300"
							)}
							onClick={() => handleRowClick(data)}
						>
							{Object.keys(data).map((key) => {
								return (
									<td key={key} className="p-4 text-gray-800 whitespace-no-wrap text-x2">
										{data[key]}
									</td>
								);
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
