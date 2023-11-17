<script setup>
import ApiService from "../api/ApiService";
import { useCartStore } from "../store/cart";
import { useRouter } from "vue-router";

const cartStore = useCartStore();
const router = useRouter();

async function payCart() {
  //@todo créer une commande pour ce restaurant à partir de la route d'api
  const order = await ApiService.createOrder(cartStore.items);
  console.log("order created");
  cartStore.clearCart();
  router.push("/dashboard/orders");
}
</script>

<template>
  <div class="app-cart">
    <div v-for="cartItem in cartStore?.items" class="cart-item">
      <img class="cart-item-image" :src="cartItem?.image" alt="" />
      <div class="cart-item-right">
        <h1 class="cart-item-product">{{ cartItem?.name }}</h1>
        <p class="cart-item-price">{{ cartItem?.price }}€</p>
      </div>
    </div>
    <span class="empty-cart" v-if="cartStore?.items?.length == 0"
      >Votre panier est vide</span
    >
    <button
      v-if="cartStore?.items?.length > 0"
      @click="payCart"
      class="button"
      type="button"
    >
      Payer
    </button>
  </div>
</template>

<style scoped>
.app-cart {
  padding: 15px;
  display: flex;
  flex-direction: column;
}
.empty-cart {
}

.cart-item {
  background-color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  margin: 10px 0;
}

.cart-item-image {
  height: 50px;
}

.cart-item-product {
  color: #000;

  text-align: center;
  font-family: Lexend;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.cart-item-price {
  color: #685ed7;

  font-family: Lexend;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.cart-item-right {
  margin-left: 15px;
}
</style>
