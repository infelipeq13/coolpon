import { Image } from "src/components/Image";

export const Content = ({ children, description, heading, imageName }) => {
	return (
		<div className="h-full p-4 space-y-8 md:space-y-16">
			<header className="max-w-lg mx-auto space-y-1 text-center">
				{imageName && <Image className="mx-auto" name={imageName} />}
				<h1 className="font-bold text-gray-900 text-x4">{heading}</h1>
				<p className="text-gray-800 text-x2">{description}</p>
			</header>
			<main className="w-full max-w-5xl mx-auto">{children}</main>
		</div>
	);
};
