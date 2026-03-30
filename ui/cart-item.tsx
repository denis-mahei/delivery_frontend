'use client';

import Image from "next/image";
import { useCartStore } from "@/store/cart.store";
import type { CartItem } from "@/lib/definitions";

import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

const CartItem = ( { id, name, price, quantity, imageUrl }: CartItem ) => {

	const { updateQuantity, removeItem } = useCartStore()
	return (
	  <li className="flex gap-4 items-center bg-zinc-900 border border-zinc-800 rounded-2xl p-3 shadow-sm">
	    <div className="w-24 h-24 relative rounded-xl overflow-hidden shrink-0">
	      <Image
	        src={imageUrl}
	        alt={name}
	        fill
	        className="object-cover"
	      />
	    </div>

	    <div className="flex flex-col flex-1 gap-2">
	      <h3 className="text-white font-medium text-sm">{name}</h3>
	      <p className="text-zinc-400 text-sm">${price} × {quantity}</p>
	      <p className="text-white font-semibold text-sm">${price * quantity}</p>
	    </div>

	    <div className="flex flex-col items-center gap-1">
	      <button
	        onClick={() => updateQuantity(id, quantity + 1)}
	        className="text-white bg-zinc-800 hover:bg-zinc-700 rounded-md p-1"
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
	        className="text-white bg-zinc-800 hover:bg-zinc-700 rounded-md p-1"
	      >
	        <FaCaretDown/>
	      </button>
	    </div>
	  </li>
	);
};

export default CartItem;