<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  restaurantAccount: Object,
});
</script>

<template>
  <div class="restaurant-item">
    <div class="restaurant-item-name">
      {{ restaurantAccount?.name }}
    </div>
    <div class="restaurant-item-email">
      {{ restaurantAccount?.email }}
    </div>
    <div class="restaurant-item-actions">
      <button class="button button-error">Supprimer</button>
    </div>
  </div>
</template>

<style scoped>
.restaurant-item {
  display: flex;
  align-items: center;
  background: white;
  padding: 15px 36px;
}

.restaurant-item-name,
.restaurant-item-email {
  color: rgba(0, 0, 0, 0.59);

  font-family: Lexend;
  font-size: 14px;
  font-weight: 500;
  flex: 1;
}
</style>
