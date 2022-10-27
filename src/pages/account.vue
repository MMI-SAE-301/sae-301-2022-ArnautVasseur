<script setup lang="ts">

</script>

<template>
    <div class="mt-40 mb-72">
        <div
            class="bg-DarkBlue bg-opacity-30 w-SmallLoginCard h-SmallLoginCard gap-3 lg:w-LoginCard lg:h-LoginCard p-10 items-baseline rounded-3xl grid grid-cols-3">
            <div class="flex flex-col justify-center items-center gap-8">
                <img src="@/assets/LogoGoogleWhite.png" alt="LogoGoogleWhite" class="w-[150px]">
                <LoginGoogle />
            </div>
            <div class="flex flex-col justify-center items-center gap-8">
                <img src="@/assets/LogoFacebookWhite.png" alt="LogoFacebookWhite" class="w-[150px]">
                <LoginFacebook />
            </div>
            <label id="status" class="dark:text-white text-center"></label>
        </div>
    </div>

</template>

<script lang="ts">
import LoginGoogle from '../components/LoginGoogle.vue'
import LoginFacebook from '../components/LoginFacebook.vue'

export default {
    data() {
        return {
        }
    },
    components: {
        LoginGoogle, LoginFacebook
    }
}
</script>