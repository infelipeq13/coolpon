import { useEffect, useState } from "react";

import { Button } from "src/components/Button";
import { Input } from "src/components/Input";
import { Layout } from "src/components/Layout";

const Step = {
	SEND_ACCESS: "SEND_ACCESS",
	ACCESS_SENT: "ACCESS_SENT",
};

const HomePage = () => {
	const [heading, setHeading] = useState();
	const [imageName, setImageName] = useState();
	const [step, setStep] = useState(Step.SEND_ACCESS);

	const goTo = (nextStep, e) => {
		e?.preventDefault();

		setStep(nextStep);
	};

	useEffect(() => {
		switch (step) {
			case Step.SEND_ACCESS:
				setHeading("Acessar plataforma");
				setImageName("new-post");
				break;
			case Step.ACCESS_SENT:
				setHeading("Acesso enviado");
				setImageName("paper-plane");
				break;
		}
	}, [step]);

	return (
		<Layout
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta maximus lacus."
			heading={heading}
			imageName={imageName}
		>
			{step === Step.SEND_ACCESS && (
				<form
					className="w-full space-y-4"
					onSubmit={(e) => {
						goTo(Step.ACCESS_SENT, e);
					}}
				>
					<Input label="Endereço de email" />
					<Button isExpanded>Enviar acesso</Button>
				</form>
			)}
		</Layout>
	);
};

export default HomePage;
