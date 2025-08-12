interface Props {
	onButtonClick: () => void;
	buttonText: string;
}
const Button = ({ onButtonClick, buttonText }: Props) => {
	return (
		<button
			type="button"
			className="btn btn-primary"
			onClick={onButtonClick}
		>
			{buttonText}
		</button>
	);
};

export default Button;
