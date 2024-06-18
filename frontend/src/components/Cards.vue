<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container>
    <v-row>
      <v-col v-for="(anime, i) in animesAPI" :key="i" cols="12" sm="6" md="4">
        <v-card href="https://google.com.br" :title="anime.name" :subtitle="anime.text" append-icon="mdi-open-in-new" color="deep-purple-accent-1" target="_blank" link>
          <template v-slot:sutitle>
            ep {{ anime.ep }} - {{ anime.url }}
          </template>

          <v-card-actions class="bg-deep-purple">
            <v-btn prepend-icon="mdi-square-edit-outline">Editar</v-btn>
            <v-btn prepend-icon="mdi-trash-can-outline">Deletar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script setup>
//import { ref } from 'vue';

defineProps({
  animesAPI: Object,
  testes: Object
});

</script>