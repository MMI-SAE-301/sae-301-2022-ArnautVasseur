<template>
  <div class="flex absolute justify-around items-center bg-DarkBlue bg-opacity-30 w-full h-32 xl:h-64 bottom-0">
    <div>
      <RouterLink to="/liste">
        <div
          class="rounded-3xl bg-DarkerGray opacity-100 w-44 h-14 text-lg xl:w-96 xl:h-24 flex text-white xl:text-2xl items-center justify-center">
          Liste de montres
        </div>
      </RouterLink>
    </div>
    <div class="w-[424px] h-44 items-center justify-evenly hidden xl:flex bg-DarkerGray rounded-3xl">
      <img src="../assets/Google.png" alt="LogoGoogle">
      <img src="../assets/Facebook.png" alt="LogoFacebook">
    </div>
    <!-- Début Bouton Account -->
    <RouterLink to="/account">
      <div
        class="flex justify-center gap-5 items-center text-center right-[30px] xl:w-BoutonCompte w-40 h-9 xl:h-16 rounded-md dark:bg-DarkerGray bg-DarkGray">
        <span class="text-white xl:text-xl">Compte</span>
        <i class="fa-solid fa-user text-white xl:text-xl"></i>
      </div>
    </RouterLink>
  <!-- Fin Bouton Account -->
  </div>
</template>