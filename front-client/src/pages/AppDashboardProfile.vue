<script setup>
import { ref, onBeforeMount, reactive } from "vue";
import { useRouter } from "vue-router";
import ApiService from "../api/ApiService";
import { useUserStore } from "../store/user";
const user = ref({});
const userStore = useUserStore();
const router = useRouter();

async function loadUser() {
  user.value = await ApiService.getLoggedUser();
}

async function updateUser() {
  await ApiService.updateLoggedUser(user?.email, user?.name);
}

async function logout() {
  userStore.logout();
  router.push("/login");
}

onBeforeMount(() => {
  loadUser();
});
</script>

<template>
  <div class="app-profile">
    <h1 class="page-title">Profil</h1>
    <input
      class="email-input"
      v-model="user.name"
      type="text"
      placeholder="Nom"
    />
    <input
      class="email-input"
      v-model="user.email"
      type="text"
      placeholder="Email"
    />
    <button @click="updateUser" class="button" type="button">
      Mettre à jour
    </button>
    <button @click="logout" class="button button-secondary" type="button">
      Se déconnecter
    </button>
  </div>
</template>

<style scoped>
.app-profile {
  display: flex;
  flex-direction: column;
  padding: 17px;
}

input {
  margin: 5px 0;
}

button {
  margin-top: 15px;
}
</style>
