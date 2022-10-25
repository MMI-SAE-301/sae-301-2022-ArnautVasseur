<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div :class="isDark ? 'dark' : ''">
    <!--si isDark = true, Dark mode | si isDark = false, Light mode-->

    <body class="bg-[#eee] dark:bg-[#333] duration-700">
      <header1/>

      <RouterView />

      <footer class="flex">
        <RouterLink to="/liste">
          <div class="rounded-3xl bg-DarkerGray lg:w-96 lg:h-24 hidden lg:flex text-white text-2xl items-center justify-center">
            Liste de montres
          </div>
        </RouterLink>
      </footer>
    </body>
  </div>
</template>

<script lang="ts">
import header1 from './components/header.vue'

export default {
  data() {
    return {
      isDark: true,
    };
  },
  components: {
    header1
  },
};
</script>