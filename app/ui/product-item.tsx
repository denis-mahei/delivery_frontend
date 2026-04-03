'use client'

import Image from "next/image";
import { Product } from "@/app/lib/definitions";
import { useCartStore } from "@/app/store/cart.store";

type ProductItem = Product & {
	quantity: number;
}

const ProductItem = ( { id, name, imageUrl, price }: Product ) => {
	const { addItem } = useCartStore()

	const productItem: ProductItem = {
		id,
		name,
		price,
		imageUrl,
		quantity: 1,
	}
	return (
    <div className="flex flex-col gap-3">
      <div className="relative h-44 w-full overflow-hidden rounded-xl bg-zinc-800 sm:h-48">
		  <Image
			  src={imageUrl}
			  alt={name}
			  fill
			  className="object-cover transition duration-300 hover:scale-105"
		  />
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="line-clamp-2 text-sm font-medium text-zinc-100 sm:text-base">{name}</h2>
        <p className="text-lg font-semibold text-white">${price}</p>
      </div>

      <button
        onClick={() => addItem(productItem)}
        className="mt-auto rounded-full bg-amber-300 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-amber-200"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductItem;