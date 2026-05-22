"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image";

import ProductsList from "./products-list"
import { Category, Data, Params, Shop } from "@/app/lib/definitions";
import ProductsSorted from "@/app/ui/products-sorted";
import { getProducts } from "@/app/lib/api";

type ShopProps = {
	shops: Shop[];
	categories: Category[];
	products: Data;
}

const ShopsList = ( { shops, categories, products }: ShopProps ) => {
	const { data, totalPages: initialTotalPages } = products
	const [page, setPage] = useState(1)
	const [totalPages, setTotalPages] = useState(initialTotalPages)
	const [selectedShopId, setSelectedShopId] = useState<number | null>(null)
	const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null)
	const [productList, setProductList] = useState(data)
	const skipInitialFetch = useRef(true)

	useEffect(() => {
		if (skipInitialFetch.current) {
			skipInitialFetch.current = false
			return
		}

		const params: Params = { page };
		if (selectedShopId) params.shopId = selectedShopId;
		if (selectedCategoryId) params.categoryId = selectedCategoryId;

		getProducts(params).then(res => {
			setProductList(res.data)
			setTotalPages(res.totalPages)
		})
	}, [selectedShopId, selectedCategoryId, page]);

	return (
		<div className="grid grid-cols-1 gap-4 sm:gap-6 w-full">
			<div className='border p-2 rounded-xl flex md:flex-row md:gap-4'>
				<ProductsSorted
				categories={categories}
				selectedCategoryId={selectedCategoryId}
				onSelectCategory={(categoryId) => {
					setSelectedCategoryId(categoryId)
					setPage(1)
				}}
			/>
				<section className="panel p-3 md:w-1/2">
					<h2 className="mb-3 text-lg font-semibold sm:text-xl">Choose a shop</h2>
					<ul className="flex gap-3 overflow-x-auto whitespace-nowrap pb-1">

						<li className={`relative h-28 w-28 shrink-0 cursor-pointer overflow-hidden rounded-xl border transition sm:h-32 sm:w-32 ${
							selectedShopId === null
								? "scale-[1.03] border-amber-300 shadow-lg shadow-amber-500/50"
								: "border-zinc-700 hover:scale-[1.03]"
						}`}
							onClick={() => {
								setSelectedShopId(null)
								setPage(1)
							}}>
							<Image
								src='https://plus.unsplash.com/premium_photo-1663126629970-f76cf591361d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								alt='' width={400} height={400}
								className={`w-full h-full object-cover ${
									selectedShopId !== null ? "opacity-70" : ""
								}`}/>

							<p className={`absolute bottom-0 left-0 w-full  px-2 py-1 text-center text-sm font-bold  ${selectedShopId === null ? 'bg-amber-300 text-zinc-900' : 'bg-black/55 text-white'}`}>All
								Shops</p>
						</li>

						{shops.map(shop => (
							<li
								key={shop.id}
								onClick={() => {
									setSelectedShopId(shop.id)
									setSelectedCategoryId(null)
									setPage(1)
								}}
								className={`relative h-28 w-28 shrink-0 cursor-pointer overflow-hidden rounded-xl border transition sm:h-32 sm:w-32 ${
									selectedShopId === shop.id
										? "scale-[1.03] border-amber-300 shadow-lg shadow-amber-500/50"
										: "border-zinc-700 hover:scale-[1.03]"
								}`}
							>
								<Image src={shop.imageUrl} alt={shop.name} width={400} height={400}
									   className={`w-full h-full object-cover ${
										   selectedShopId !== shop.id ? "opacity-70" : ""
									   }`}/>
								<p
									className={`absolute bottom-0 left-0 w-full  px-2 py-1 text-center text-sm font-bold  ${selectedShopId === shop.id ? 'bg-amber-300 text-zinc-900' : 'bg-black/55 text-white'}`}>{shop.name}</p>
							</li> ))}
					</ul>
				</section>
			</div>

			<section>
				<ProductsList
					products={productList}
					totalPages={totalPages}
					currentPage={page}
					onPageChange={setPage}
				/>
			</section>

		</div>
	)
}

export default ShopsList