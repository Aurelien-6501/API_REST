<script setup>
import { ref, reactive } from "vue";

defineProps({
  restaurant: Object,
  plate: Object,
});
</script>

<template>
  <RouterLink
    :to="`/dashboard/restaurants/${restaurant?._id}/plates/${plate?._id}`"
    class="plate-card"
    :style="{ backgroundImage: `url(${plate?.image})` }"
  >
    <div class="plate-card-infos">
      <h2 class="plate-card-title">{{ plate?.name }}</h2>
      <p class="plate-card-price">{{ plate?.price }}</p>
    </div>
  </RouterLink>
</template>

<style scoped>
.plate-card {
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  padding: 60px 20px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 5px;
  padding-bottom: 20px;
  flex: 1;
}

.plate-card-infos {
}
.plate-card-title,
.plate-card-price {
  color: white;
}
</style>
