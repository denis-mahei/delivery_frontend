export interface Shop {
	id: number;
	name: string;
	rating: number;
	imageUrl: string;
}

export interface Product {
	id: string;
	name: string;
	price: number;
	imageUrl: string;
}

export interface CartItem extends Product {
	quantity: number;
}

export interface CartStore {
	items: CartItem[]
	addItem: (product: CartItem) => void
	removeItem: (productId: string) => void
	updateQuantity: (productId: number, quantity: number) => void
	clearCart: () => void
}