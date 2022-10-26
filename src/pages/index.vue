<template>
  <div class="mt-40">
    <section>
      <h3 class="text-center dark:text-white text-2xl">Personnalise tes propres montres !</h3>
      <h4 class="text-center dark:text-white opacity-50 ml-56 mb-16">crée la montre qui te ressemble</h4>

      <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 mb-32">
        <card>
          <template v-slot:image>
            <img src="@/assets/Montre1.png" alt="Montre1" class="absolute left-0 right-0 m-auto top-8">
          </template>
          <template v-slot:text>
            <p>Montre créee par Matthieu76</p>
          </template>
        </card>
        <div>
          <classicbutton class="ml-9 mb-14">
            <RouterLink to="/personnalisation">
              Personnaliser
            </RouterLink>
          </classicbutton>
          <card>
            <template v-slot:image>
              <img src="@/assets/Montre2.png" alt="Montre2" class="absolute left-0 right-0 m-auto top-8">
            </template>
            <template v-slot:text>
              <p>Montre créee par QuentinFerreira</p>
            </template>
          </card>
        </div>
        <card>
          <template v-slot:image>
            <img src="@/assets/Montre3.png" alt="Montre3" class="absolute left-0 right-0 m-auto top-8">
          </template>
          <template v-slot:text>
            <p>Montre créee par QuentinFerreira</p>
          </template>
        </card>
      </div>
    </section>

    <section>
      <div class="flex flex-row m-auto w-3/5 items-center mb-72">
        <img src="@/assets/homepage.png" alt="ImageDeFondHomepage" class="-ml-16">
        <div class="flex flex-col -ml-32 gap-7">
          <h3 class="text-white text-2xl text-center">Consulte ici ta propre liste de montres personnalisées</h3>
          <classicbutton>
            <RouterLink to="liste">
              Liste de montres
            </RouterLink>
          </classicbutton>
        </div>
      </div>
    </section>


  </div>
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