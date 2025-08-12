interface Props {
	length: number;
	text: string;
}
const expandContent = ({ length, text }: Props) => {
	return <>{text.slice(0, length)}</>;
};
export default expandContent;
