import { useState } from "react";
import Accordian, { type InCartProduct } from "./components/Accordian";
import FormComponent from "./components/FormComponent";
import ExpenseCategoryElement from "./components/ExpenseCategory";

let inCartProd: InCartProduct[] = [];

function App() {
	const [inCart, setInCart] = useState<InCartProduct[]>([]);
	const [filterCat, setFilterCat] = useState(0);

	const handleAddToCart = (product: InCartProduct) => {
		console.log(product);
		setInCart((prevCart) => [...prevCart, product]);
	};

	const handelRemoveProduct = (productIndex: number) => {
		setInCart((prevCart) => {
			return prevCart.filter((_, index) => index !== productIndex);
		});
	};

	const handelFilterCategory = (catId: number) => {
		inCartProd = inCart.filter((prod) => prod.category.id == catId);
		console.log(inCartProd);
		console.log(inCart);
		setFilterCat(catId);
	};

	return (
		<div className="container">
			<FormComponent addToCart={handleAddToCart} />
			<ExpenseCategoryElement
				setSelectedCategory={handelFilterCategory}
			/>
			<Accordian
				products={filterCat != 0 ? inCartProd : inCart}
				removeProduct={handelRemoveProduct}
			/>
		</div>
	);
}

export default App;
