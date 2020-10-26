import { useId } from "@reach/auto-id";
import clsx from "clsx";

import css from "src/components/Checkbox/Checkbox.module.css";

export const Checkbox = ({ id, className, label, ...otherProps }) => {
	const inputId = useId(id);

	return (
		<div className={css.container}>
			<input {...otherProps} id={inputId} className={clsx(className, css.checkbox)} type="checkbox" />
			<label className={css.label} htmlFor={inputId}>
				{label}
			</label>
		</div>
	);
};
