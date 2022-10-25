<template>
    <header>
        <!-- Rajouter une transition duration pour une transition de DarkMode à LightMode + douce -->

        <div class="absolute gap-3 flex top-[30px] left-[30px] items-center">
            <p class="hidden sm:flex text-lg dark:text-white duration-700">Dark Mode</p>
            <!-- Début Bouton Switch -->
            <label
                class="switch relative dark:border-transparent dark:hover:border-white border-2 rounded-full duration-700">
                <input type="checkbox" checked @click="isDark = !isDark">
                <span class="slider round bg-white before:bg-[#222] dark:before:bg-white"></span>
            </label>
            <!-- Fin Bouton Switch -->
        </div>

        <div class="flex absolute justify-center items-center gap-5 top-3">
            <img src="../assets/Logo.svg" alt="Logo" class="w-20 lg:w-40 hidden sm:flex">
            <h1 class="dark:text-white text-DarkerGray text-2xl font-semibold hidden lg:flex">TiK•TaK</h1>
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

<style scoped>
.switch {
  width: 60px;
  height: 34px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;

}

.slider:before {
  position: absolute;
  content: "";
  height: 23px;
  width: 23px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked+.slider {
  background-color: #222;
}

input:focus+.slider {
  box-shadow: 0 0 1px #222;
}

input:checked+.slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.button1 {
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
  transition-duration: 300ms;
}

.v-enter-active,
.v-leave-active {
  transition: 0.6s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  translate: 0px 150px;
}
</style>

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