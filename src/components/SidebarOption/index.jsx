import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

import { Icon } from "src/components/Icon";

import css from "src/components/SidebarOption/SidebarOption.module.css";

export const SidebarOption = ({ href, iconName, title }) => {
	const { asPath, pathname } = useRouter();
	const isActive = [asPath, pathname].some((text) => text.includes(href));

	return (
		<Link href={href}>
			<a className={clsx(css.container, isActive && css.isActive)}>
				<Icon name={iconName} className={css.icon} />
				<span className={css.title}>{title}</span>
			</a>
		</Link>
	);
};
