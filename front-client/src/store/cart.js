import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      items: [],
    };
  },
  actions: {
    addProductToCart(cartItem) {
      const existingProduct = this.items.find(
        (item) => item._id == cartItem._id
      );

      this.items.push({
        ...cartItem,
        quantity: 1,
      });
    },
    clearCart() {
      this.items = [];
    },
  },
});
