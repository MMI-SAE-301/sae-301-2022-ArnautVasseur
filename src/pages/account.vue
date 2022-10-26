<script setup>
import { createClient } from '@supabase/supabase-js'
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient'
const SUPABASE_URL = 'https://llyvwzckonhivpptzswp.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxseXZ3emNrb25oaXZwcHR6c3dwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY2Mzc3MTYsImV4cCI6MTk4MjIxMzcxNn0.K9pciKbfEOtoUh6aJL4yZsB1kJwQMppKYYE-pX_Rb-k'
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)


supabase.auth.onAuthStateChange((event, session) => {
    if (session == null) {
        document.getElementById('status').innerHTML = 'Vous n\'êtes pas connecté';
    } else {
        //alert('session value: ' + JSON.stringify(session)) 
        document.getElementById('status').innerHTML = 'Vous êtes bien connecté avec: ' + session.user.email + '( Compte Facebook )';
    }
})

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