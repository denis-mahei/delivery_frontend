import { create } from 'zustand'
import { persist } from "zustand/middleware";
import { CartStore } from "@/app/lib/definitions";


export const useCartStore = create<CartStore>()(persist(( set ) => ( {
		items: [],

		addItem: ( product ) => set(( state ) => {
			const existing = state.items.find(i => i.id === product.id)
			if (existing) {
				return {
					items: state.items.map(i =>
						i.id === product.id
							? { ...i, quantity: i.quantity + 1 }
							: i
					)
				}
			}
			return { items: [...state.items, { ...product, quantity: 1 }] }
		}),

		removeItem: ( productId ) => set(( state ) => ( {
			items: state.items.filter(i => i.id !== productId)
		} )),

		updateQuantity: ( productId, quantity ) => set(( state ) => ( {
			items: state.items.map(i =>
				i.id === productId ? { ...i, quantity } : i
			)
		} )),

		clearCart: () => set({ items: [] }),
	} ),
	{ name: 'cart-storage' }
))

