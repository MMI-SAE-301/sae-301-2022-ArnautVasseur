<template>
  <nav>
    <ul>
      <li>
        <router-link class="" to="/">

        </router-link>
      </li>
    </ul>
  </nav>

  <!-- Affiche les pages -->
  <Suspense>
    <router-view />
  </Suspense>
</template>

<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/20/solid";
</script>
