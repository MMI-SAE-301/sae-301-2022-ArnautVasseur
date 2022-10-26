<script setup lang="ts">
import montre from "../../../components/Montre.vue";
defineProps<{
  id: string;
}>();
</script>
<template>
  <montre :id="id" />
</template>