import clsx from "clsx";

import { Icon } from "src/components/Icon";

export const Button = ({ children, className, iconName, isExpanded, isSecondary, ...otherProps }) => {
	const buttonClassName = clsx(
		className,
		"flex items-center self-end justify-center px-8 py-4 space-x-2 font-medium transition duration-300 ease-in-out border rounded text-x2",
		isExpanded && "w-full",
		isSecondary
			? "text-blue-600 bg-transparent border-blue-600 hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
			: "text-white bg-blue-600 border-blue-600 hover:bg-blue-500 hover:border-blue-500 focus:bg-blue-500 focus:border-blue-500 active:bg-blue-700 active:border-blue-600"
	);

	return (
		<button {...otherProps} className={buttonClassName}>
			<span>{children}</span>
			{iconName && <Icon name={iconName} />}
		</button>
	);
};
