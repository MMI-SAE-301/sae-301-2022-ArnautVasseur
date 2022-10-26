<script setup lang="ts">
import FormSvg from "../components/Montre.vue";
defineProps<{
  id: string;
}>();
</script>
<template>
  <FormSvg :id="id" />
</template>