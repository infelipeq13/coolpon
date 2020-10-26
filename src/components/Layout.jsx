import { useState } from "react";

import { Content } from "src/components/Content";
import { Icon } from "src/components/Icon";
import { SidebarOption } from "src/components/SidebarOption";

const options = [
	{
		href: "/build-loyalty",
		iconName: "heart",
		title: "Fidelizar",
	},
	{
		href: "/customers",
		iconName: "users",
		title: "Clientes",
	},
	{
		href: "/history",
		iconName: "clock",
		title: "Histórico",
	},
	{
		href: "/coupons",
		iconName: "ticket",
		title: "Cupons",
	},
];

export const Layout = ({ children, description, heading, imageName }) => {
	const [open, setOpen] = useState(true);

	return (
		<div className="flex min-h-screen overflow-hidden">
			<div className="md:hidden">
				{open ? (
					<div className="fixed inset-0 z-40 flex">
						<div className="fixed inset-0">
							<div className="absolute inset-0 bg-gray-600 opacity-75"></div>
						</div>
						<div className="relative flex flex-col flex-1 w-full max-w-xs bg-white">
							<div className="absolute top-0 right-0 p-1 -mr-14">
								<button
									className="flex items-center justify-center w-12 h-12 text-white rounded-full focus:outline-none focus:bg-gray-600"
									onClick={() => {
										setOpen(!open);
									}}
								>
									<Icon name="x" />
								</button>
							</div>
							<div className="flex-1 h-0 overflow-y-auto border-r border-gray-300">
								<nav className="p-4 space-y-2">
									{options.map(({ href, iconName, title }) => {
										return <SidebarOption key={title} href={href} iconName={iconName} title={title} />;
									})}
								</nav>
							</div>
						</div>
						<div className="flex-shrink-0 w-14"></div>
					</div>
				) : (
					<div className="relative z-40 flex flex-col flex-1 w-full max-w-xs bg-white">
						<div className="fixed top-0 right-0 p-1">
							<button
								className="flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:bg-gray-600"
								onClick={() => {
									setOpen(!open);
								}}
							>
								<Icon name="menu" />
							</button>
						</div>
					</div>
				)}
			</div>
			<div className="fixed hidden h-full border-r border-gray-300 md:flex md:flex-shrink-0">
				<div className="flex flex-col w-64">
					<div className="flex flex-col flex-grow overflow-y-auto bg-white">
						<div className="flex flex-col flex-grow">
							<nav className="flex-1 p-4 space-y-2">
								{options.map(({ href, iconName, title }) => {
									return <SidebarOption key={title} href={href} iconName={iconName} title={title} />;
								})}
							</nav>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col flex-1 w-0 overflow-hidden md:ml-64">
				<main className="relative flex-1 overflow-y-auto focus:outline-none" tabIndex="0">
					<Content description={description} heading={heading} imageName={imageName}>
						{children}
					</Content>
				</main>
			</div>
		</div>
	);
};
