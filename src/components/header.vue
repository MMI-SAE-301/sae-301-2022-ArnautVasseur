<template>
    <header>
        <div class="flex absolute justify-center items-center gap-5 top-3 -ml-24">
            <img src="../assets/Logo.svg" alt="Logo" class="w-20 lg:w-40 hidden sm:flex">
            <h1 class="dark:text-white text-DarkerGray text-2xl font-semibold hidden xl:flex">TiK•TaK</h1>
        </div>

        <!-- Début Bouton Account -->
        <RouterLink to="/account">
            <div
                class="absolute top-[30px] flex justify-center gap-5 items-center text-center right-[30px] lg:w-BoutonCompte w-40 h-9 lg:h-16 rounded-md dark:bg-DarkerGray bg-DarkGray">
                <span class="text-white lg:text-xl">Compte</span>
                <i class="fa-solid fa-user text-white lg:text-xl"></i>
            </div>
        </RouterLink>
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