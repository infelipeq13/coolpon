import { useId } from "@reach/auto-id";
import clsx from "clsx";

import css from "src/components/Input/Input.module.css";

export const Input = ({ id, errorMessage, label, ...otherProps }) => {
	const inputId = useId(id);

	return (
		<div className={css.container}>
			<label className={css.label} htmlFor={inputId}>
				{label}
			</label>
			<input {...otherProps} id={inputId} className={clsx(css.input, errorMessage && css.inputError)} />
			{errorMessage && <p className={css.errorMessage}>{errorMessage}</p>}
		</div>
	);
};
