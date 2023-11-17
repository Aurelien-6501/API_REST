<script setup>
import { ref } from "vue";
import { useUserStore } from "../store/user";
const userStore = useUserStore();

const email = ref("");
const password = ref("");
const name = ref("");

async function registerUserAction() {
  await userStore.register(email.value, name.value, password.value);
  router.push("/dashboard");
}
</script>

<template>
  <div class="app-register">
    <h1>Register</h1>
    <form>
      <input
        v-model="email"
        type="text"
        placeholder="email"
        name="email"
        id="email"
      />
      <input
        v-model="name"
        type="name"
        placeholder="Nom"
        name="name"
        id="name"
      />
      <input
        v-model="password"
        type="password"
        placeholder="password"
        name="password"
        id="password"
      />

      <button class="register-button button" @click="registerUserAction">
        Créer un compte
      </button>
      <RouterLink class="register-button" to="/login">Se connecter</RouterLink>
    </form>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
input {
  margin: 10px 0;
}

.register-button {
  margin-top: 10px;
}

.app-register {
  padding: 26px;
}
</style>
