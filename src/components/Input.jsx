import { useId } from "@reach/auto-id";
import clsx from "clsx";

export const Input = ({ id, errorMessage, label, ...otherProps }) => {
	const inputId = useId(id);

	return (
		<div className="w-full space-y-1 text-left">
			<label className="font-medium text-gray-900 text-x2" htmlFor={inputId}>
				{label}
			</label>
			<input
				{...otherProps}
				id={inputId}
				className={clsx(
					"block w-full p-4 text-gray-800 transition duration-300 ease-in-out bg-gray-100 border-b-2 border-gray-300 rounded-t text-x2 hover:bg-gray-200 hover:border-gray-600 focus:bg-blue-200 focus:border-blue-600",
					errorMessage && "bg-red-100 border-red-300 hover:bg-red-200 focus:border-red-600"
				)}
			/>
			{errorMessage && <p className="text-red-800 text-x1">{errorMessage}</p>}
		</div>
	);
};
