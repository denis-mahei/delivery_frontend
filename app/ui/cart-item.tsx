'use client';

import Image from "next/image";
import { useCartStore } from "@/app/store/cart.store";
import type { CartItem } from "@/app/lib/definitions";

import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

const CartItem = ( { id, name, price, quantity, imageUrl }: CartItem ) => {

	const { updateQuantity, removeItem } = useCartStore()
	return (
	  <li className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/80 p-3 sm:gap-4">
	    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-24">
	      <Image
	        src={imageUrl}
	        alt={name}
	        fill
	        className="object-cover"
	      />
	    </div>

	    <div className="flex flex-1 flex-col gap-1">
	      <h3 className="line-clamp-2 text-sm font-medium text-zinc-100">{name}</h3>
	      <p className="text-xs text-zinc-400 sm:text-sm">${price} x {quantity}</p>
	      <p className="text-sm font-semibold text-white">${(price * quantity).toFixed(2)}</p>
	    </div>

	    <div className="flex flex-col items-center gap-1">
	      <button
	        onClick={() => updateQuantity(id, quantity + 1)}
	        className="rounded-md bg-zinc-800 p-1 text-white transition hover:bg-zinc-700"
	      >
	        <FaCaretUp/>
	      </button>

	      <span className="text-white text-sm">{quantity}</span>

	      <button
	        onClick={() => {
	          if (quantity === 1) {
	            removeItem(id)
	          } else {
	            updateQuantity(id, quantity - 1)
	          }
	        }}
	        className="rounded-md bg-zinc-800 p-1 text-white transition hover:bg-zinc-700"
	      >
	        <FaCaretDown/>
	      </button>
	    </div>
	  </li>
	);
};

export default CartItem;