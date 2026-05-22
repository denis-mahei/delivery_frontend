"use client";

import ProductItem from "@/app/ui/product-item";
import ReactPaginate from 'react-paginate';
import { Product } from "@/app/lib/definitions";


type ProductsListProps = {
	products: Product[]
	totalPages: number
	currentPage: number
	onPageChange: ( page: number ) => void
}

const ProductsList = ( { products, totalPages, currentPage, onPageChange }: ProductsListProps ) => {
	return (
		<main className="space-y-3">

				<ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{products.map(product => (
						<li key={product.id} className="panel p-3 transition hover:-translate-y-0.5 hover:bg-zinc-900">
							<ProductItem id={product.id} name={product.name} imageUrl={product.imageUrl}
										 price={product.price}/>
						</li>
					))}
				</ul>

					<ReactPaginate
						pageCount={totalPages}
						pageRangeDisplayed={5}
						marginPagesDisplayed={1}
						onPageChange={( { selected } ) => onPageChange(selected + 1)}
						forcePage={currentPage - 1}
						containerClassName="flex justify-center items-center gap-4 text-md font-bold"
						activeClassName="bg-amber-300 py-1 px-2 border border-gray-200 rounded-lg text-zinc-900"
						renderOnZeroPageCount={()=> <p className='font-bold text-center'>Oops! There nothing to show...</p>}
						nextLabel='>'
						previousLabel='<'
					/>
		</main>
	)
}

export default ProductsList