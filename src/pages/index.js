import { Button } from "src/components/Button";
import { Input } from "src/components/Input";
import { Layout } from "src/components/Layout";

const HomePage = () => {
	return (
		<Layout
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta maximus lacus."
			imageName="paper-plane"
			title="Acessar plataforma"
		>
			<Input label="Endereço de email" type="email" />
			<Button isExpanded>Enviar acesso</Button>
		</Layout>
	);
};

export default HomePage;
