import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { InCartProduct } from "./Accordian";
import expenseCategories from "../Categories";

export interface ExpenseCategory {
	id: number;
	name: string;
}

// Zod schema
const schema = z.object({
	description: z
		.string()
		.min(3, { message: "Description must be at least 3 characters long" })
		.max(50, { message: "Description must be at most 50 characters long" }),
	amount: z
		.number({ message: "Amount must be between 0.01 and 100,000" })
		.min(0.01, { message: "Amount must be at least 0.01" })
		.max(100_000, {
			message: "Amount must be less than or equal to 100,000",
		}),
	category: z.enum(
		expenseCategories.map((cat) => cat.id.toString()) as [
			string,
			...string[]
		],
		{
			message: "Please select a category",
		}
	),
});

type ExpenseFormData = z.infer<typeof schema>;

interface FormProps {
	addToCart: (product: InCartProduct) => void;
}

const FormComponent = ({ addToCart }: FormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
	} = useForm<ExpenseFormData>({
		resolver: zodResolver(schema),
		mode: "onChange", // validate on each change
	});

	const onSubmit = (data: ExpenseFormData) => {
		const selectedCategory = expenseCategories.find(
			(c) => c.id.toString() === data.category
		);

		const product: InCartProduct = {
			name: data.description,
			price: data.amount,
			category: selectedCategory || { id: 0, name: "" },
		};

		addToCart(product);
		reset(); // clear form
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="mb-3">
			{/* Description */}
			<div className="mb-3">
				<label htmlFor="productDescription" className="form-label">
					Description
				</label>
				<input
					{...register("description")}
					type="text"
					className="form-control"
					id="productDescription"
				/>
				{errors.description && (
					<div className="text-danger">
						{errors.description.message}
					</div>
				)}
			</div>

			{/* Price */}
			<div className="mb-3">
				<label htmlFor="productPrice" className="form-label">
					Price
				</label>
				<input
					type="number"
					{...register("amount", { valueAsNumber: true })}
					className="form-control"
					id="productPrice"
				/>
				{errors.amount && (
					<div className="text-danger">{errors.amount.message}</div>
				)}
			</div>

			{/* Category */}
			<div className="mb-3">
				<label htmlFor="expenseCategory" className="form-label">
					Expense Category
				</label>
				<select
					{...register("category")}
					className="form-select"
					id="expenseCategory"
				>
					<option value="">Select a Expense Category</option>
					{expenseCategories.map((category) => (
						<option
							value={category.id.toString()}
							key={category.id}
						>
							{category.name}
						</option>
					))}
				</select>
				{errors.category && (
					<div className="text-danger">{errors.category.message}</div>
				)}
			</div>

			{/* Submit */}
			<button
				disabled={!isValid}
				type="submit"
				className="btn btn-primary"
			>
				Submit
			</button>
		</form>
	);
};

export default FormComponent;
