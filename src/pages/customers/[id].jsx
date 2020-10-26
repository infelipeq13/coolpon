import { useRouter } from "next/router";

import { CustomerForm } from "src/components/CustomerForm";
import { Layout } from "src/components/Layout";

const Page = () => {
	const router = useRouter();

	return (
		<Layout
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta maximus lacus."
			heading="Perfil"
			imageName="edit-customer"
		>
			<CustomerForm
				onSubmit={() => {
					router.push("/customers");
				}}
			/>
		</Layout>
	);
};

export default Page;
