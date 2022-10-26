<script setup lang="ts">
import { supabase } from "@/supabase";
import montre from "./Montre.vue";
const props = defineProps<{
    max?: number;
}>();
const { data: montre, error } = await supabase
    .from("montre")
    .select("*")
    .limit(props.max ?? 100);
if (error) {
    console.log("n'a pas pu récupérer les baskets", { error });
}
</script>
<template>
    <ul>
        <li v-for="m in montre" :key="montre.id_montre">
            <router-link :to="{ name: 'basket/index', params: { id: montre.id_montre } }">
                <BasketProfil class="w-64" v-bind="montre" />
            </router-link>
        </li>
    </ul>
</template>