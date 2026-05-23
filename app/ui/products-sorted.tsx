import type { Category } from "@/app/lib/definitions";

type ProductsSortedProps = {
	categories: Category[];
	selectedCategoryId: number | null;
	onSelectCategory: ( categoryId: number | null ) => void;
}

const ProductsSorted = ( { categories, selectedCategoryId, onSelectCategory }: ProductsSortedProps ) => {


	return (
		<section className="panel p-3 sm:p-4 md:w-1/2">
			<h2 className="mb-3 text-base font-semibold text-zinc-100 sm:text-lg">Filter by category</h2>
			<ul className="flex flex-col gap-2 overflow-x-auto pb-1">
				<li>
					<button
						type="button"
						onClick={() => onSelectCategory(null)}
						className={`rounded-full px-4 py-2 text-sm font-medium transition ${
							selectedCategoryId === null
								? "bg-amber-300 text-zinc-900"
								: "bg-zinc-900 text-zinc-200 hover:bg-zinc-800"
						}`}
					>
						All
					</button>
				</li>
				{categories.map(( category ) => (
					<li key={category.id}>
						<button
							type="button"
							onClick={() => onSelectCategory(category.id)}
							className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
								selectedCategoryId === category.id
									? "bg-amber-300 text-zinc-900"
									: "bg-zinc-900 text-zinc-200 hover:bg-zinc-800"
							}`}
						>
							{category.name}
						</button>
					</li>
				))}
			</ul>
		</section>
	);
};

export default ProductsSorted;