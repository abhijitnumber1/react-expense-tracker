import expenseCategories from "../Categories";

interface SelectedFilterProps {
	setSelectedCategory: (catId: number) => void;
}
const ExpenseCategoryElement = ({
	setSelectedCategory,
}: SelectedFilterProps) => {
	return (
		<select
			className="form-control mb-3 form-select"
			onChange={(e) => {
				setSelectedCategory(parseInt(e.target.value));
			}}
		>
			<option value="0">Filter Expense Category</option>
			{expenseCategories.map((category, index) => (
				<option value={category.id} key={index}>
					{category.name}
				</option>
			))}
		</select>
	);
};

export default ExpenseCategoryElement;
