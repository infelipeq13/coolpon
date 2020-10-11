import { Image } from "src/components/Image";

import css from "src/components/Layout/Layout.module.css";

export const Layout = ({ children, description, heading, imageName }) => {
	return (
		<main className={css.container}>
			<div className={css.header}>
				{imageName && <Image className={css.image} name={imageName} />}
				<h1 className={css.heading}>{heading}</h1>
				<p className={css.description}>{description}</p>
			</div>
			{children}
		</main>
	);
};
