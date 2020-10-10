import { Button } from "src/components/Button";
import { Input } from "src/components/Input";
import { Layout } from "src/components/Layout";

const HomePage = () => {
	const submit = (e) => {
		e.preventDefault;
	};

	return (
		<Layout
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta maximus lacus."
			imageName="paper-plane"
			title="Acessar plataforma"
		>
			<form className="w-full space-y-4" onSubmit={submit}>
				<Input label="Endereço de email" type="email" />
				<Button isExpanded>Enviar acesso</Button>
			</form>
		</Layout>
	);
};

export default HomePage;
