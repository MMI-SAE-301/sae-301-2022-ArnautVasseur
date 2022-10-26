<script setup>
import { createClient } from '@supabase/supabase-js'
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient'
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
//const { user, session, error } = await supabase.auth.signIn({
//  provider: 'github',
//})


supabase.auth.onAuthStateChange((event, session) => {
    if (session == null) {
        document.getElementById('status').innerHTML = 'Vous n\'êtes pas connecté';
    } else {
        //alert('session value: ' + JSON.stringify(session)) 
        document.getElementById('status').innerHTML = 'Vous êtes bien connecté avec: ' + session.user.email;
    }
})

</script>
    
<template>
    <div class="bg-DarkerGray flex flex-col text-center justify-center gap-4 items-center p-10 rounded-2xl">
        <button @click="login()" class="dark:text-white hover:underline">Connetez-vous avec votre compte Facebook</button>
        <button @click="logout()" class="dark:text-white hover:underline">Déconnexion</button>
        <label id="status" class="dark:text-white"></label>
    </div>

</template>
    
<script>

const SUPABASE_URL = 'https://llyvwzckonhivpptzswp.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxseXZ3emNrb25oaXZwcHR6c3dwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY2Mzc3MTYsImV4cCI6MTk4MjIxMzcxNn0.K9pciKbfEOtoUh6aJL4yZsB1kJwQMppKYYE-pX_Rb-k'
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)


export default {
    methods: {
        //this method allows the already registred user to log in the system.
        async login() {
            try {
                const { user, session, error } = await supabase.auth.signIn({
                    provider: 'facebook',
                });
                if (error) throw error;
            } catch (error) {
                alert(error.error_description || error.message);
            }
        },
        async reset() {
            const { data, error } = await supabase.auth.api.resetPasswordForEmail(
                this.email
            )
        },
        async logout() {
            try {
                const { user, session, error } = await supabase.auth.signOut();
                if (error) throw error;
                document.getElementById('status').innerHTML = 'You are disconnected !'
            } catch (error) {
                alert(error.error_description || error.message);
            }
        },
    },
    mounted() {
        supabase.auth.onAuthStateChange(async (event, session) => {
            if (event == 'PASSWORD_RECOVERY') {
                const newPassword = prompt('What would you like your new password to be?')
                const { data, error } = await supabase.auth.update({
                    password: newPassword,
                })

                if (data) alert('Password updated successfully!')
                if (error) alert('There was an error updating your password.')
            }
        })
    }
}
</script>
    
<style>

</style>