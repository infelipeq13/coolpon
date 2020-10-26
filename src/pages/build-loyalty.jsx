import confetti from "canvas-confetti";
import { useEffect, useState } from "react";

import { Button } from "src/components/Button";
import { Checkbox } from "src/components/Checkbox";
import { CustomerForm } from "src/components/CustomerForm";
import { Definition } from "src/components/Definition";
import { DefinitionList } from "src/components/DefinitionList";
import { Input } from "src/components/Input";
import { Layout } from "src/components/Layout";

const Step = {
	SEARCH_CUSTOMER: "SEARCH_CUSTOMER",
	SCORE: "SCORE",
	SCORE_CONFIRMATION: "SCORE_CONFIRMATION",
	EDIT_CUSTOMER: "EDIT_CUSTOMER",
	EDIT_CUSTOMER_CONFIRMATION: "EDIT_CUSTOMER_CONFIRMATION",
};

const Page = () => {
	const [heading, setHeading] = useState();
	const [imageName, setImageName] = useState();
	const [step, setStep] = useState(Step.SEARCH_CUSTOMER);

	const containerClassName = "w-full max-w-xs mx-auto space-y-4";

	const goTo = (nextStep, e) => {
		e?.preventDefault();

		setStep(nextStep);
	};

	const reset = () => {
		goTo(Step.SEARCH_CUSTOMER);
	};

	useEffect(() => {
		switch (step) {
			case Step.SEARCH_CUSTOMER:
				setHeading("Fidelizar cliente");
				setImageName("medal");
				break;
			case Step.SCORE:
				break;
			case Step.SCORE_CONFIRMATION:
				confetti();
				setHeading("Parabéns!");
				setImageName("confetti");
				break;
			case Step.EDIT_CUSTOMER:
				setHeading("Perfil");
				setImageName("edit-customer");
				break;
			case Step.EDIT_CUSTOMER_CONFIRMATION:
				setHeading("Perfil atualizado");
				setImageName("good");
				break;
		}
	}, [step]);

	return (
		<Layout
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta maximus lacus."
			heading={heading}
			imageName={imageName}
		>
			{step === Step.SEARCH_CUSTOMER && (
				<form
					className={containerClassName}
					onSubmit={(e) => {
						goTo(Step.SCORE, e);
					}}
				>
					<Input label="Telefone celular" />
					<Button isExpanded>Buscar cliente</Button>
				</form>
			)}
			{step === Step.SCORE && (
				<form
					className={containerClassName}
					onSubmit={(e) => {
						goTo(Step.SCORE_CONFIRMATION, e);
					}}
				>
					<DefinitionList>
						<Definition description="000.111.222-33" term="CPF:" />
						<Definition description="(11) 9 1111-2222" term="Telefone celular:" />
						<Definition description="John Doe" term="Nome completo:" />
						<Definition description="10/10/1980" term="Data de aniversário:" />
					</DefinitionList>
					<Input label="Valor gasto" />
					<div className="space-y-2">
						<Checkbox label="R$5,00 OFF" />
						<Checkbox label="R$10,00 OFF" />
					</div>
					<Button isExpanded>Fidelizar cliente</Button>
					<Button isExpanded isSecondary type="button" onClick={reset}>
						Retornar ao início
					</Button>
				</form>
			)}
			{step === Step.SCORE_CONFIRMATION && (
				<div className={containerClassName}>
					<Button
						isExpanded
						onClick={() => {
							goTo(Step.EDIT_CUSTOMER);
						}}
					>
						Atualizar perfil
					</Button>
					<Button isExpanded isSecondary onClick={reset}>
						Retornar ao início
					</Button>
				</div>
			)}
			{step === Step.EDIT_CUSTOMER && (
				<CustomerForm
					reset={reset}
					onSubmit={(e) => {
						goTo(Step.EDIT_CUSTOMER_CONFIRMATION, e);
					}}
				/>
			)}
			{step === Step.EDIT_CUSTOMER_CONFIRMATION && (
				<div className={containerClassName}>
					<Button isExpanded onClick={reset}>
						Retornar ao início
					</Button>
				</div>
			)}
		</Layout>
	);
};

export default Page;
