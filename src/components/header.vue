<template>
  <header>
    <div class="">
      <RouterLink to="/" class="absolute flex items-center gap-5 left-0 right-0 top-5 m-auto w-32">
        <img src="../assets/Logo.svg" alt="Logo" class="w-40 hidden xl:block xl:-ml-5">
        <h1 class="dark:text-white text-DarkerGray text-5xl xl:text-2xl mt-5 xl:mt-0 lg:text-2xl font-semibold hidden lg:block ">TiK•TaK</h1>
      </RouterLink>

      <!-- Début Bouton Account -->
      <RouterLink to="/account" class="absolute top-[30px] flex justify-center gap-5 items-center text-center right-[30px] lg:w-BoutonCompte w-40 h-9 lg:h-16 rounded-md dark:bg-DarkerGray bg-LightGray dark:hover:bg-LightGray">
          <span class="dark:text-white dark:hover:text-black lg:text-xl">Compte</span>
          <i class="fa-solid fa-user dark:text-white dark:hover:text-black lg:text-xl"></i>
      </RouterLink>
    </div>
  </header>
  <!-- Fin Bouton Account -->
</template>

<script lang="ts">
export default {
  data() {
    return {
      isDark: true,
    };
  },
  components: {

  },
};
</script>