<script setup>
import { ref, onBeforeMount, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import PlateCard from "../components/PlateCard.vue";
import ApiService from "../api/ApiService";

const plateSearchQuery = ref("");
const route = useRoute();

let restaurant = ref(null);

let plates = ref([]);

onBeforeMount(() => {
  loadRestaurant();
  loadRestaurantPlates();
});

async function loadRestaurant() {
  restaurant.value = await ApiService.getRestaurant(
    route.params?.restaurant_id
  );
}

async function loadRestaurantPlates() {
  plates.value = await ApiService.getRestaurantsPlates(
    route.params?.restaurant_id
  );
}
</script>

<template>
  <div class="restaurant">
    <h1 class="page-title">{{ restaurant?.name }}</h1>
    <input
      class="search-input"
      v-model="plateSearchQuery"
      type="text"
      placeholder="Rechercher un plat"
    />
    <div class="plates">
      <PlateCard
        :plate="plate"
        :restaurant="restaurant"
        v-for="plate in plates"
        :key="plate._id"
      />
    </div>
  </div>
</template>

<style scoped>
.restaurant {
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.plates {
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  width: 100%;
}
</style>
