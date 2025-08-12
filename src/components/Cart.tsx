interface Props {
	cartItems: string[];
}
const cart = ({ cartItems }: Props) => {
	return (
		<div>
			<h1>Cart Items</h1>
			<ul>
				{cartItems.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
};
export default cart;
