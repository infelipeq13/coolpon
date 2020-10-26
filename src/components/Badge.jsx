import clsx from "clsx";

export const BadgeVariant = {
	BLUE: "BLUE",
	GREEN: "GREEN",
	YELLOW: "YELLOW",
	RED: "RED",
};

const getVariantClassName = (variant) => {
	switch (variant) {
		case BadgeVariant.BLUE:
			return "text-blue-900 bg-blue-200";
		case BadgeVariant.GREEN:
			return "text-green-900 bg-green-200";
		case BadgeVariant.YELLOW:
			return "text-yellow-900 bg-yellow-200";
		case BadgeVariant.RED:
			return "text-red-900 bg-red-200";
	}
};

export const Badge = ({ children, variant = BadgeVariant.BLUE }) => {
	return (
		<span className={clsx("px-2 py-1 font-medium rounded-full text-x2", getVariantClassName(variant))}>{children}</span>
	);
};
