<template>
    <div class="mt-40 mb-72">
        <div class="bg-DarkBlue bg-opacity-30 w-SmallLoginCard h-SmallLoginCard lg:w-LoginCard lg:h-LoginCard p-10 items-baseline rounded-3xl">
            <div class="grid grid-cols-2 gap-3">
                <LoginGoogle />
            </div>
        </div>
    </div>

</template>

<script>
import LoginGoogle from '../components/LoginGoogle.vue'

export default {
    data() {
        return {
        }
    },
    components: {
        LoginGoogle
    }
}
</script>