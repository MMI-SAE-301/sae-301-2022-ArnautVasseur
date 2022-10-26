<script setup>
import { createClient } from '@supabase/supabase-js'
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient'
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

supabase.auth.onAuthStateChange((event, session) => {
    if (session == null) {
        document.getElementById('status').innerHTML = 'Vous n\'êtes pas connecté';
    } else {
        //alert('session value: ' + JSON.stringify(session)) 
        document.getElementById('status').innerHTML = 'Vous êtes bien connecté avec: ' + session.user.email +'( Compte Google )';
    }
})

</script>
    
<template>
    <div class="bg-DarkerGray flex flex-col text-center justify-center gap-4 items-center p-10 rounded-2xl">
        <button @click="login()" class="dark:text-white border-[1px] border-white rounded-xl p-3">Connetez-vous avec votre compte Google</button>
        <button @click="logout()" class="dark:text-white border-[1px] border-white rounded-xl p-3">Déconnexion</button>
    </div>

</template>
    
<script>

const SUPABASE_URL = 'https://llyvwzckonhivpptzswp.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxseXZ3emNrb25oaXZwcHR6c3dwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY2Mzc3MTYsImV4cCI6MTk4MjIxMzcxNn0.K9pciKbfEOtoUh6aJL4yZsB1kJwQMppKYYE-pX_Rb-k'
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)


export default {
    methods: {
        //this method allows a new user to sign up the system. Once done, the user receives an email
        //asking for account validation. Once the validation made the user is added to the system
        async register() {
            try {
                const { user, session, error } = await supabase.auth.signUp({
                    email: this.email,
                    password: this.passwd,
                });
                if (error) throw error;
                document.getElementById('status').innerHTML = 'Please validate the received email!'
            } catch (error) {
                alert(error.error_description || error.message);
            }
        },
        //this method allows the already registred user to log in the system.
        async login() {
            try {
                const { user, session, error } = await supabase.auth.signIn({
                    provider: 'google',
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