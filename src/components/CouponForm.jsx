import { useRouter } from "next/router";

import { Button } from "src/components/Button";
import { Checkbox } from "src/components/Checkbox";
import { Input } from "src/components/Input";

export const CouponForm = ({ isNew, onSubmit: handleSubmit }) => {
	const router = useRouter();

	return (
		<form className="w-full max-w-xs mx-auto space-y-4" onSubmit={handleSubmit}>
			<Input label="Descrição" />
			<Input label="Data de expiração" />
			<Checkbox label="Disponível" />
			<Button isExpanded>{isNew ? "Criar cupom" : "Salvar alterações"}</Button>
			{!isNew && (
				<Button
					isExpanded
					isSecondary
					onClick={() => {
						if (confirm("Você quer mesmo excluir este cupom?")) {
							alert("Cupom excluído.");
							router.push("/coupons");
						}
					}}
				>
					Excluir cupom
				</Button>
			)}
		</form>
	);
};
