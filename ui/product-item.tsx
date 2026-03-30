'use client'

import Image from "next/image";
import { Product } from "@/lib/definitions";
import { useCartStore } from "@/store/cart.store";

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
      <div className="w-full h-40 relative rounded-xl overflow-hidden bg-zinc-800">
		  <Image
			  src={imageUrl}
			  alt={name}
			  fill
			  className="object-cover"
		  />
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="text-white font-medium text-sm line-clamp-2">{name}</h2>
        <p className="text-lg font-semibold text-white">${price}</p>
      </div>

      <button
        onClick={() => addItem(productItem)}
        className="mt-auto bg-white text-black rounded-full py-2 text-sm font-medium hover:bg-gray-200 transition"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductItem;