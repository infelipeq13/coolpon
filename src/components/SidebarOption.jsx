import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

import { Icon } from "src/components/Icon";

export const SidebarOption = ({ href, iconName, title }) => {
	const { asPath, pathname } = useRouter();
	const isActive = [asPath, pathname].some((text) => text.includes(href));

	return (
		<Link href={href}>
			<a
				className={clsx(
					"flex items-center p-2 space-x-2 text-gray-600 transition duration-300 ease-in-out rounded group hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:text-gray-900 focus:bg-gray-100",
					isActive && "bg-gray-200 hover:bg-gray-200 focus:bg-gray-200"
				)}
			>
				<Icon
					name={iconName}
					className="text-gray-400 transition duration-300 ease-in-out group-hover:text-gray-600 group-focus:text-gray-600"
				/>
				<span className="font-medium text-x1">{title}</span>
			</a>
		</Link>
	);
};
