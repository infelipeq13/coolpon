import { Image } from "src/components/Image";

import css from "src/components/Layout/Layout.module.css";

export const Layout = ({ children, description, imageName, title }) => {
	return (
		<main className={css.container}>
			<Image className={css.image} name={imageName} />
			<h1 className={css.title}>{title}</h1>
			<p className={css.description}>{description}</p>
			{children}
		</main>
	);
};
