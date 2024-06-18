<template>
  <v-speed-dial location="left center" transition="fade-transition">
    <template v-slot:activator="{ props: activatorProps }">
      <v-fab class="right-0" v-bind="activatorProps" size="large" icon="$vuetify"></v-fab>
    </template>

    <v-btn key="1" icon="$success"></v-btn>
    <v-btn key="2" icon="$info"></v-btn>
    <v-btn key="3" icon="$warning"></v-btn>
    <v-btn key="4" icon="$error"></v-btn>
  </v-speed-dial>
</template>