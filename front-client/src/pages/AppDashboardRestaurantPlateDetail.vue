<script setup>
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
import { useCartStore } from "../store/cart";
import ApiService from "../api/ApiService";

const cartStore = useCartStore();
const route = useRoute();

let plate = ref(null);

onBeforeMount(() => {
  loadPlate();
});

async function loadPlate() {
  plate.value = await ApiService.getPlate(
    route.params?.restaurant_id,
    route.params?.plate_id
  );
}

function addPlateToCart() {
  cartStore.addProductToCart(plate.value);
}
</script>

<template>
  <div class="plate">
    <h1 class="page-title">{{ plate?.name }}</h1>
    <img class="plate-image" :src="plate?.image" alt="" />
    <h2 class="plate-name">{{ plate?.name }}</h2>
    <h3>{{ plate?.price }}€</h3>
    <p class="plate-description">{{ plate?.description }}</p>
    <button
      @click="addPlateToCart"
      class="button add-to-cart-button"
      type="button"
    >
      Ajouter au panier
    </button>
  </div>
</template>

<style scoped>
.plate {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.plate-image {
  width: 100%;
  margin-bottom: 20px;
}

.plate-description {
  color: rgba(0, 0, 0, 0.42);
  font-size: 14px;
  font-weight: 500;
  margin-top: 15px;
}

.add-to-cart-button {
  margin-top: 10px;
}
</style>
