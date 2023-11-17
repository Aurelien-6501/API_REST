<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import ApiService from "../api/ApiService";
const restaurantSearchQuery = ref("");

const restaurants = ref([]);

async function loadRestaurants() {
  restaurants.value = await ApiService.getRestaurants();
}

onBeforeMount(() => {
  loadRestaurants();
});
</script>

<template>
  <div class="app-home">
    <h1 class="page-title">Restaurants</h1>
    <input
      class="search-input"
      v-model="restaurantSearchQuery"
      type="text"
      placeholder="Rechercher un restaurant"
    />
    <div class="restaurants">
      <RestaurantCard
        :restaurant="restaurant"
        v-for="restaurant in restaurants"
        :key="restaurant._id"
      />
    </div>
  </div>
</template>

<style scoped>
.app-home {
  display: flex;
  flex-direction: column;
  padding: 17px;
}
.restaurants {
  padding: 17px;
  width: 100%;
}
</style>
