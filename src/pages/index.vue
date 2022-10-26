<template>
  <classicbutton />
  <card>
    <template v-slot:image>
      <img src="@/assets/Montre1.png" alt="Montre1" class="absolute left-0 right-0 m-auto top-8">
    </template>
    <template v-slot:text>
      <p>Montre créee par Matthieu76</p>
    </template>
  </card>
</template>

<script lang="ts">
import classicbutton from '@/components/classicbutton.vue';
import card from '@/components/card.vue'
export default {
  data() {
    return {
    }
  },
  components: {
    classicbutton, card
  }
}
</script>