import { defineStore } from "pinia";
import AuthService from "../api/AuthService";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      accessToken: localStorage.getItem("accessToken"),
    };
  },
  actions: {
    async login(email, password) {
      const token = await AuthService.login(email, password);

      localStorage.setItem("accessToken", token);

      this.accessToken = token;
    },
    async register(email, name, password) {
      const token = await AuthService.register(email, name, password);

      localStorage.setItem("accessToken", token);

      this.accessToken = token;
    },
    logout() {
      this.accessToken = null;
      localStorage.removeItem("accessToken");
    },
  },
});
