<script setup lang="ts">
import { materiaux } from "@/types";
defineProps<{
    name?: string;
    label?: string;
}>();
</script>
<template>
    <FormKit :name="name" :label="label" value="#FFFFFF" type="radio" :options="materiaux"
    :sections-schema="{
        inner: { $el: null },
        decorator: { $el: null }
    }" input-class="peer sr-only" options-class="flex gap-1 mb-16 mt-5" :classes="{
    legend: 'text-white text-2xl'
}">
        <template #label="context">
            <div
                class="border-2 border-transparent text-white hover:text-black text-center text-2xl peer-checked:border-indigo-700 hover:bg-LightGray p-5 rounded-xl">
                {{ context.option.label }}</div>
        </template>
    </FormKit>
</template>