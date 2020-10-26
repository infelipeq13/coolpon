import { useRouter } from "next/router";
import { useState } from "react";

import { Button } from "src/components/Button";
import { Input } from "src/components/Input";
import { Layout } from "src/components/Layout";
import { Table } from "src/components/Table";

const initialBody = [
	{ id: "0", mobileNumber: "(11) 9 1111-2222", fullName: "John Doe", lastVisit: "10/10/2020" },
	{ id: "1", mobileNumber: "(11) 9 1111-2222", fullName: "John Doe", lastVisit: "10/10/2020" },
	{ id: "2", mobileNumber: "(11) 9 1111-2222", fullName: "John Doe", lastVisit: "10/10/2020" },
	{ id: "3", mobileNumber: "(11) 9 1111-2222", fullName: "John Doe", lastVisit: "10/10/2020" },
	{ id: "4", mobileNumber: "(11) 9 1111-2222", fullName: "John Doe", lastVisit: "10/10/2020" },
	{ id: "5", mobileNumber: "(11) 9 1111-2222", fullName: "John Doe", lastVisit: "10/10/2020" },
	{ id: "6", mobileNumber: "(11) 9 1111-2222", fullName: "John Doe", lastVisit: "10/10/2020" },
	{ id: "7", mobileNumber: "(11) 9 1111-2222", fullName: "John Doe", lastVisit: "10/10/2020" },
	{ id: "8", mobileNumber: "(11) 9 1111-2222", fullName: "John Doe", lastVisit: "10/10/2020" },
	{ id: "9", mobileNumber: "(11) 9 1111-2222", fullName: "John Doe", lastVisit: "10/10/2020" },
];

const Page = () => {
	const router = useRouter();
	const [body, setBody] = useState(initialBody);

	return (
		<Layout
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta maximus lacus."
			heading="Clientes"
			imageName="conference"
		>
			<div className="space-y-4">
				<form
					className="grid gap-4 md:grid-cols-2 lg:grid-cols-5"
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<Input label="Telefone celular" />
					<Input label="Nome completo" />
					<Input label="Data inicial" />
					<Input label="Data final" />
					<Button>Filtrar histórico</Button>
				</form>
				<Table
					head={["ID", "Telefone celular", "Nome completo", "Última visita"]}
					body={body}
					onRowClick={({ id }) => router.push(`/customers/${id}`)}
				/>
				<Button
					className="block mx-auto"
					onClick={() => {
						setBody([...body, ...initialBody]);
					}}
				>
					Carregar mais
				</Button>
			</div>
		</Layout>
	);
};

export default Page;
