import { useRouter } from "next/router";

import { Badge } from "src/components/Badge";
import { Button } from "src/components/Button";
import { Layout } from "src/components/Layout";
import { Table } from "src/components/Table";

const body = [
	{
		id: 1,
		description: "Lorem ipsum dolor",
		createdAt: "10/10/2020",
		expiresAt: "12/12/2020",
		status: <Badge>Ativo</Badge>,
	},
	{
		id: 2,
		description: "Lorem ipsum dolor",
		createdAt: "10/10/2020",
		expiresAt: "12/12/2020",
		status: <Badge>Ativo</Badge>,
	},
	{
		id: 3,
		description: "Lorem ipsum dolor",
		createdAt: "10/10/2020",
		expiresAt: "12/12/2020",
		status: <Badge>Ativo</Badge>,
	},
	{
		id: 4,
		description: "Lorem ipsum dolor",
		createdAt: "10/10/2020",
		expiresAt: "12/12/2020",
		status: <Badge>Ativo</Badge>,
	},
	{
		id: 5,
		description: "Lorem ipsum dolor",
		createdAt: "10/10/2020",
		expiresAt: "12/12/2020",
		status: <Badge>Ativo</Badge>,
	},
];

const Page = () => {
	const router = useRouter();

	return (
		<Layout
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta maximus lacus."
			heading="Cupons"
			imageName="starred-ticket"
		>
			<div className="space-y-4">
				<Button className="mx-auto" onClick={() => router.push("/coupons/new")}>
					Novo cupom
				</Button>
				<Table
					head={["ID", "Descrição", "Data de criação", "Data de expiração", "Status"]}
					body={body}
					onRowClick={({ id }) => router.push(`/coupons/${id}`)}
				/>
			</div>
		</Layout>
	);
};

export default Page;
