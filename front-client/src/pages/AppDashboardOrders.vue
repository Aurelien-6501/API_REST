<script setup>
import ApiService from "../api/ApiService";
import { ref, onBeforeMount, reactive } from "vue";

const orders = ref([]);

async function loadOrders() {
  orders.value = await ApiService.getLoggedUserOrders();
}

function getOrderTotal(order) {
  return order?.items?.reduce((total, item) => item?.price + total, 0);
}

function getOrderFormattedDate(order) {
  return `Commande du ${order?.createdAt?.getDate()}/${order?.createdAt?.getMonth()}/${order?.createdAt?.getFullYear()}`;
}

onBeforeMount(() => {
  loadOrders();
});
</script>

<template>
  <div class="app-orders">
    <div class="order" v-for="order in orders">
      <div class="order-date">{{ getOrderFormattedDate(order) }}</div>
      <div class="order-price">{{ getOrderTotal(order) }}€</div>
    </div>
  </div>
</template>

<style scoped>
.app-orders {
  display: flex;
  flex-direction: column;
  padding: 17px;
}

.order-date {
  color: #000;

  font-family: Lexend;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.order-price {
  color: #685ed7;
  font-family: Lexend;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.order {
  border-radius: 20px;
  background: #fff;
  margin: 5px 0;
  padding: 13px;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.03);
}
</style>
