import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Button } from "src/components/Button";
import { Content } from "src/components/Content";
import { Input } from "src/components/Input";

const Step = {
	SEND_ACCESS: "SEND_ACCESS",
	ACCESS_SENT: "ACCESS_SENT",
};

const Page = () => {
	const router = useRouter();
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
				setHeading("Entrar");
				setImageName("new-post");
				break;
			case Step.ACCESS_SENT:
				setHeading("Acesso enviado");
				setImageName("paper-plane");
				setTimeout(() => router.push("/build-loyalty"), 2000);
				break;
		}
	}, [step]);

	return (
		<Content
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta maximus lacus."
			heading={heading}
			imageName={imageName}
		>
			{step === Step.SEND_ACCESS && (
				<form
					className="w-full max-w-xs mx-auto space-y-4"
					onSubmit={(e) => {
						goTo(Step.ACCESS_SENT, e);
					}}
				>
					<Input label="Endereço de email" />
					<Button isExpanded>Enviar acesso</Button>
				</form>
			)}
		</Content>
	);
};

export default Page;
