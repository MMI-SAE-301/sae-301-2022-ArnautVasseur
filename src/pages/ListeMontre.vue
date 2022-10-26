<script setup lang="ts">
import ListeMontre from '@/components/ListeMontre.vue';
</script>

<template>
    <Suspense>
        <div class="p-2">
            <h2>Liste des montres de l'utlisateur</h2>
            <ListeMontre />
        </div>
    </Suspense>
</template>