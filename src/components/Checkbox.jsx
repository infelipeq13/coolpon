import { useId } from "@reach/auto-id";
import clsx from "clsx";

export const Checkbox = ({ id, className, label, ...otherProps }) => {
	const inputId = useId(id);

	return (
		<div className="flex items-center space-x-2">
			<input
				{...otherProps}
				id={inputId}
				className={clsx(className, "border-2 border-gray-300 form-checkbox")}
				type="checkbox"
			/>
			<label className="font-medium text-gray-900 text-x2" htmlFor={inputId}>
				{label}
			</label>
		</div>
	);
};
