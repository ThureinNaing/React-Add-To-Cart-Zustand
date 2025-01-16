import { create } from "zustand";

export const useCartStore = create((set) => ({
	cart: [],

	addToCart: (product) =>
		set((state) => {
			const existingItem = state.cart.find(
				(item) => item.id === product.id
			);

			if (existingItem) {
				return {
					cart: state.cart.map((item) =>
						item.id === product.id
							? { ...item, quantity: (item.quantity || 1) + 1 }
							: item
					),
				};
			}

			return {
				cart: [...state.cart, { ...product, quantity: 1 }],
			};
		}),

	removeFromCart: (productId) =>
		set((state) => {
			const item = state.cart.find((item) => item.id === productId);
			if (item?.quantity > 1) {
				return {
					cart: state.cart.map((item) =>
						item.id === productId
							? { ...item, quantity: item.quantity - 1 }
							: item
					),
				};
			}
			return {
				cart: state.cart.filter((item) => item.id !== productId),
			};
		}),
	clearCart: () => set({ cart: [] }),
}));
