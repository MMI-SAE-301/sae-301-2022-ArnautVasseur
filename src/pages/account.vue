<template>
    <div class="mt-40 mb-72">
        <div class="bg-DarkBlue bg-opacity-30 w-SmallLoginCard h-SmallLoginCard lg:w-LoginCard lg:h-LoginCard p-10 items-baseline rounded-3xl">
            <div class="">
                <LoginGoogle />
            </div>
            <div class="">
                <LoginFacebook />
            </div>
        </div>
    </div>

</template>

<script>
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