import { create } from "zustand";

export const useCart = create((set) => ({
    cart: [],
    addToCart: (product) =>
        set((state) => {
            const existingProductIndex = state.cart.findIndex(
                (item) => item.id === product.id
            );

            if (existingProductIndex !== -1) {
                const updatedCart = [...state.cart];
                updatedCart[existingProductIndex].quantity += 1;
                return { cart: updatedCart };
            } else {
                return { cart: [...state.cart, { ...product, quantity: 1 }] };
            }
        }),

    removeFromCart: (productId) =>
        set((state) => {
            const existingProductIndex = state.cart.findIndex(
                (item) => item.id === productId
            );

            if (existingProductIndex !== -1) {
                const updatedCart = [...state.cart];
                const product = updatedCart[existingProductIndex];

                if (product.quantity > 1) {
                    product.quantity -= 1;
                } else {
                    updatedCart.splice(existingProductIndex, 1);
                }

                return { cart: updatedCart };
            }

            return state;
        }),
}));