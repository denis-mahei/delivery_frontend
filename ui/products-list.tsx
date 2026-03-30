"use client";

import { useEffect, useState } from "react"
import { getProductsByShop } from "@/lib/api"
import { Product } from "@/lib/definitions";
import ProductItem from "@/ui/product-item";


type ProductsListProps = {
	shopId: number
}

const ProductsList = ( { shopId }: ProductsListProps ) => {
	const [products, setProducts] = useState<Product[]>([])

	useEffect(() => {
		getProductsByShop(shopId).then(setProducts)
	}, [shopId])

	return (
		<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
			{products.map(product => (
				<li key={product.id} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-3 hover:bg-zinc-800 transition shadow-sm">
					<ProductItem id={product.id} name={product.name} imageUrl={product.imageUrl} price={product.price}/>
				</li>
			))}
		</ul>
	)
}

export default ProductsList