<template>
    <div class="flex absolute justify-around items-center bg-DarkBlue bg-opacity-30 w-full h-64 bottom-0">
        <div class="">
            <RouterLink to="/liste">
                <div
                    class="rounded-3xl bg-DarkerGray opacity-100 lg:w-96 lg:h-24 hidden lg:flex text-white text-2xl items-center justify-center">
                    Liste de montres
                </div>
            </RouterLink>
        </div>
        <h3 class="text-white">Connexion</h3>
        <div class="w-[424px] h-44 flex items-center justify-evenly bg-DarkerGray rounded-3xl">
            <img src="../assets/Google.png" alt="LogoGoogle">
            <img src="../assets/Facebook.png" alt="LogoFacebook">
        </div>
    </div>
</template>