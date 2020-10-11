import confetti from "canvas-confetti";
import { useEffect, useState } from "react";

import { Button } from "src/components/Button";
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

const ScorePage = () => {
	const [heading, setHeading] = useState();
	const [imageName, setImageName] = useState();
	const [step, setStep] = useState(Step.SEARCH_CUSTOMER);

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
					className="w-full space-y-4"
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
					className="w-full space-y-4"
					onSubmit={(e) => {
						goTo(Step.SCORE_CONFIRMATION, e);
					}}
				>
					<DefinitionList>
						<Definition description="(11) 9 9164-7998" term="Telefone celular:" />
					</DefinitionList>
					<Input label="Valor gasto" />
					<Button isExpanded>Fidelizar cliente</Button>
					<Button isExpanded isSecondary type="button" onClick={reset}>
						Retornar ao início
					</Button>
				</form>
			)}
			{step === Step.SCORE_CONFIRMATION && (
				<div className="space-y-4">
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
				<form
					className="w-full space-y-4"
					onSubmit={(e) => {
						goTo(Step.EDIT_CUSTOMER_CONFIRMATION, e);
					}}
				>
					<Input label="Telefone celular" />
					<Input label="Nome completo" />
					<Input label="Data de aniversário" />
					<Button isExpanded>Atualizar perfil</Button>
					<Button isExpanded isSecondary type="button" onClick={reset}>
						Retornar ao início
					</Button>
				</form>
			)}
			{step === Step.EDIT_CUSTOMER_CONFIRMATION && (
				<Button isExpanded onClick={reset}>
					Retornar ao início
				</Button>
			)}
		</Layout>
	);
};

export default ScorePage;
