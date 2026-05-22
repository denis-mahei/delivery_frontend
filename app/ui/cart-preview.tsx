'use client';

import Link from "next/link";
import { useCartStore } from "@/app/store/cart.store";
import CartItem from "@/app/ui/cart-item";
import OpenFullCartLink from "@/app/ui/open-full-cart-link";

const CartPreview = () => {
	const { items } = useCartStore();

	const totalPrice = items.reduce(( acc, item ) => {
		acc += item.price * item.quantity;
		return acc;
	}, 0);

	if (items.length === 0) {
		return (
			<div className="flex flex-col items-center gap-4 py-6 text-center">
				<p className="text-sm text-zinc-400">Your cart is empty.</p>
				<Link
					href="/"
					className="rounded-full bg-amber-300 px-5 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-amber-200"
				>
					Browse shops
				</Link>
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-4">
			<ul className="flex max-h-64 flex-col gap-3 overflow-y-auto pr-1">
				{items.map(( item ) => (
					<CartItem
						key={item.id}
						id={item.id}
						name={item.name}
						price={item.price}
						quantity={item.quantity}
						imageUrl={item.imageUrl}
					/>
				))}
			</ul>

			<div className="border-t border-zinc-800 pt-3">
				<p className="text-sm text-zinc-400">
					Total: <span className="font-semibold text-zinc-100">${totalPrice.toFixed(2)}</span>
				</p>
			</div>

			<OpenFullCartLink className="block w-full rounded-full bg-amber-300 py-2.5 text-center text-sm font-semibold text-zinc-900 transition hover:bg-amber-200"/>
		</div>
	);
};

export default CartPreview;
