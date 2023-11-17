<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useUserStore } from "./store/user";

const userStore = useUserStore();
</script>

<template>
  <RouterView />
  <div class="tabs" v-if="userStore?.accessToken">
    <RouterLink class="tab" :to="`/dashboard/restaurants`">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_3_399)">
          <path
            d="M10 24H6L24 6L42 24H38"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 24V38C10 39.0609 10.4214 40.0783 11.1716 40.8284C11.9217 41.5786 12.9391 42 14 42H34C35.0609 42 36.0783 41.5786 36.8284 40.8284C37.5786 40.0783 38 39.0609 38 38V24"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18 42V30C18 28.9391 18.4214 27.9217 19.1716 27.1716C19.9217 26.4214 20.9391 26 22 26H26C27.0609 26 28.0783 26.4214 28.8284 27.1716C29.5786 27.9217 30 28.9391 30 30V42"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_3_399">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </RouterLink>
    <RouterLink class="tab" :to="`/dashboard/profile`">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
      >
        <path
          d="M24 22C28.4183 22 32 18.4183 32 14C32 9.58172 28.4183 6 24 6C19.5817 6 16 9.58172 16 14C16 18.4183 19.5817 22 24 22Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 42V38C12 35.8783 12.8429 33.8434 14.3431 32.3431C15.8434 30.8429 17.8783 30 20 30H28C30.1217 30 32.1566 30.8429 33.6569 32.3431C35.1571 33.8434 36 35.8783 36 38V42"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </RouterLink>
    <RouterLink class="tab" :to="`/dashboard/orders`">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
      >
        <g>
          <path
            d="M24 16V24L28 28"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.1001 22C6.54828 17.6001 8.60063 13.5192 11.8656 10.5359C15.1305 7.55264 19.3795 5.87577 23.8019 5.82526C28.2242 5.77474 32.5104 7.35413 35.8426 10.2621C39.1749 13.17 41.3199 17.203 41.8684 21.5915C42.417 25.98 41.3307 30.4168 38.8168 34.0555C36.3029 37.6942 32.5374 40.2801 28.2387 41.3197C23.9399 42.3593 19.4089 41.78 15.5101 39.6921C11.6113 37.6043 8.61754 34.1542 7.1001 30M6.1001 40V30H16.1001"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </RouterLink>
  </div>
</template>

<style scoped>
.tabs {
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  position: fixed;
  width: 100%;
  padding: 20px;
}

.tab {
  margin: 0 10px;
  opacity: 0.4;
}

.tab.router-link-active {
  opacity: 1;
}
</style>
