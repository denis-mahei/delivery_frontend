'use client';

import { useCartStore } from "@/store/cart.store";
import CartItem from "@/ui/cart-item";
import OrderForm from "@/ui/order-form";
import { order } from "@/lib/api";

const CartPage = () => {
	const { items, clearCart } = useCartStore()

	const totalPrice = items.reduce(( acc, cur ) => {
		acc += cur.price * cur.quantity
		return acc
	}, 0);

	const handleOrder = async ( formData ) => {
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
		<main className='flex flex-col gap-6 md:flex-row p-4'>
			<OrderForm onSubmitOrder={handleOrder}/>
			<div className='w-full md:w-1/2 p-4 bg-zinc-500 rounded-xl'>
				<ul className='flex flex-col gap-4 max-w-xl w-full overflow-y-auto h-75'>
					{items.map(( item ) => (
						<CartItem key={item.id} name={item.name} price={item.price} quantity={item.quantity}
								  id={item.id} imageUrl={item.imageUrl}/>
					))}
				</ul>
				<div className='flex border-t-2 mt-2.5 gap-6 p-2'>
					<p>Total Price: ${totalPrice}</p>
					<button>
						Submit
					</button>
				</div>
			</div>
		</main>
	);
};

export default CartPage;