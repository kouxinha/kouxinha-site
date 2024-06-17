<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container>
    <v-card :v-for="animes as anime">
      <v-card-item>
        <v-card-title>
          Title
        </v-card-title>

        <v-card-subtitle>
          subtitle
        </v-card-subtitle>
      </v-card-item>

      <v-card-text>

      </v-card-text>

      <v-card-actions>

      </v-card-actions>
    </v-card>
  </v-container>
  
</template>

<script setup>
  import { ref } from 'vue';

  const animes = ref([1, 2, 3]);
</script>