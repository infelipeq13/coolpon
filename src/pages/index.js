import { Button } from "src/components/Button";
import { Image } from "src/components/Image";
import { Input } from "src/components/Input";

const HomePage = () => {
	return (
		<div className="max-w-sm p-4 mx-auto space-y-4 text-center">
			<Image className="mx-auto" name="paper-plane" />
			<h1 className="font-bold text-x4">
				<span className="text-blue-600">Acessar</span> plataforma
			</h1>
			<p className="text-x2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta maximus lacus.</p>
			<Input label="Endereço de email" type="email" />
			<Button isExpanded>Enviar link de acesso</Button>
		</div>
	);
};

export default HomePage;
