"use client"

import { useState } from "react"
import Image from "next/image";

import ProductsList from "./products-list"
import { Shop } from "@/lib/definitions";

type ShopProps = {
	shops: Shop[]
}

const ShopsList = ( { shops }: ShopProps ) => {
	const [selectedShopId, setSelectedShopId] = useState<number>(shops[ 0 ]?.id ?? 0)

	return (
		<div className="flex flex-col gap-4 p-4">
			<ul className="flex gap-3 px-2 py-2 border border-zinc-700 rounded-xl overflow-x-auto whitespace-nowrap scrollbar-hide">
				{shops.map(shop => (
					<li
						key={shop.id}
						onClick={() => setSelectedShopId(shop.id)}
						className={`relative shrink-0 w-32 h-32 rounded-xl cursor-pointer overflow-hidden transition transform ${
							selectedShopId === shop.id
								? "scale-105 shadow-lg"
								: "hover:scale-105"
						}`}
					>
						<Image src={shop.imageUrl} alt={shop.name} width={400} height={400}
							   className={`w-full h-full object-cover ${
								   selectedShopId !== shop.id ? "filter blur-sm" : ""
							   }`}/>
						<div
							className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-center py-1 font-medium">{shop.name}</div>
					</li> ))}
			</ul>

			<ProductsList shopId={selectedShopId}/>

		</div>
	)
}

export default ShopsList