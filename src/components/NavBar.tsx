interface Props {
	cartCount: number;
}

const navbar = ({ cartCount }: Props) => {
	return (
		<div>
			<h1>Navbar Item Count: {cartCount}</h1>
		</div>
	);
};
export default navbar;
