import Button from "./Button";
import type { ExpenseCategory } from "./FormComponent";

export interface InCartProduct {
	name: string;
	category: ExpenseCategory;
	price: number;
}
interface AccordianProps {
	products: InCartProduct[];
	removeProduct: (productIndex: number) => void;
}
const Accordian = ({ products, removeProduct }: AccordianProps) => {
	return (
		<table className="table table-success table-striped-columns">
			<thead>
				<tr>
					<th scope="col">Product Name</th>
					<th scope="col">Category</th>
					<th scope="col">Price</th>
					<th scope="col">Action</th>
				</tr>
			</thead>
			<tbody>
				{products.map((product, index) => {
					return (
						<tr key={index}>
							<td>{product.name}</td>
							<td>{product.category.name}</td>
							<td>{product.price}</td>
							<td>
								<Button
									onButtonClick={() => removeProduct(index)}
									buttonText="Remove"
								/>
							</td>
						</tr>
					);
				})}
				<tr>
					<td></td>
					<td>Total</td>
					<td>
						{products.reduce((sum, item) => sum + item.price, 0)}
					</td>
					<td></td>
				</tr>
			</tbody>
		</table>
	);
};
export default Accordian;
