import css from "src/components/DefinitionList/DefinitionList.module.css";

export const DefinitionList = ({ children }) => {
	return <dl className={css.container}>{children}</dl>;
};
