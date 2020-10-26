import { Button } from "src/components/Button";
import { Input } from "src/components/Input";

export const CustomerForm = ({ reset, onSubmit: handleSubmit }) => {
	return (
		<form className="w-full max-w-xs mx-auto space-y-4" onSubmit={handleSubmit}>
			<Input label="CPF" />
			<Input label="Telefone celular" />
			<Input label="Nome completo" />
			<Input label="Data de aniversário" />
			<Button isExpanded>Atualizar perfil</Button>
			{reset && (
				<Button isExpanded isSecondary type="button" onClick={reset}>
					Retornar ao início
				</Button>
			)}
		</form>
	);
};
