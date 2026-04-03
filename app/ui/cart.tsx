'use client';

import { useCartStore } from "@/app/store/cart.store";
import CartItem from "@/app/ui/cart-item";
import OrderForm from "@/app/ui/order-form";
import { order } from "@/app/lib/api";

const CartPage = () => {
	const { items, clearCart } = useCartStore()

	const totalPrice = items.reduce(( acc, cur ) => {
		acc += cur.price * cur.quantity
		return acc
	}, 0);

	const handleOrder = async ( formData: Record<string, string> ) => {
		const orderData = {
			...formData,
			items: items.map(( item ) => ( {
				productId: item.id,
				quantity: item.quantity,
			} ))
		}

		await order(orderData);
		clearCart();
	}

	return (
		<main className='grid gap-5 lg:grid-cols-[1.05fr_1fr] lg:gap-6'>
			<OrderForm onSubmitOrder={handleOrder}/>
			<section className='panel p-4 sm:p-5'>
				<h2 className="mb-4 text-lg font-semibold sm:text-xl">Your cart</h2>
				<ul className='flex max-h-104 flex-col gap-3 overflow-y-auto pr-1 sm:gap-4'>
					{items.map(( item ) => (
						<CartItem key={item.id} name={item.name} price={item.price} quantity={item.quantity}
								  id={item.id} imageUrl={item.imageUrl}/>
					))}
				</ul>
				<div className='mt-4 flex items-center justify-between border-t border-zinc-800 pt-4'>
					<p className="text-sm text-zinc-400 sm:text-base">
						Total: <span className="font-semibold text-zinc-100">${totalPrice.toFixed(2)}</span>
					</p>
					<button form='order-form' type='submit' className="rounded-full bg-zinc-200 px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-700">
						Ready to checkout
					</button>
				</div>
			</section>
		</main>
	);
};

export default CartPage;