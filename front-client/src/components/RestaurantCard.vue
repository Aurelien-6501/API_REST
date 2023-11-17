<script setup>
import { ref, reactive } from "vue";

defineProps({
  restaurant: Object,
});
</script>

<template>
  <RouterLink
    :to="`/dashboard/restaurants/${restaurant?._id}`"
    class="restaurant-card"
    :style="{ backgroundImage: `url(${restaurant?.image})` }"
  >
    <div class="restaurant-card-infos">
      <h2 class="restaurant-card-title">{{ restaurant?.name }}</h2>
      <p class="restaurant-card-city">{{ restaurant?.city }}</p>
    </div>
  </RouterLink>
</template>

<style scoped>
.restaurant-card {
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  padding: 60px 20px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 10px 0;
  padding-bottom: 20px;
}

.restaurant-card-infos {
}
.restaurant-card-title,
.restaurant-card-city {
  color: white;
}
</style>
