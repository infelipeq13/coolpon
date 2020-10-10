import { Button } from "src/components/Button";
import { Input } from "src/components/Input";

const HomePage = () => {
	return (
		<>
			<Button>Button</Button>
			<Input errorMessage="Campo obrigatório." label="Nome completo" />
		</>
	);
};

export default HomePage;
