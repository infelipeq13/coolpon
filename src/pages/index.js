import { Button } from "src/components/Button";
import { Input } from "src/components/Input";

const HomePage = () => {
	return (
		<>
			<Button>Button</Button>
			<Input label="Nome completo" errorMessage="Campo obrigatório." />
		</>
	);
};

export default HomePage;
