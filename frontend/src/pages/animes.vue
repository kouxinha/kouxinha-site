<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Cards :animesAPI="animesAPI"/>


</template>

<script setup>
//import { ref, onMounted } from 'vue';
//import { collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc } from 'firebase/firestore';
//import { db } from '@/plugins/firebase';

//const animesCollection = collection(db, 'animes');

const animesAPI = [
  {
    name: 'anime1',
    text: 'ep 11 - anime1.com.br',
    url: 'anime1.com.br',
    ep: '11'
  },
  {
    name: 'anime2',
    text: 'ep 13 - anime2.com.br',
    url: 'anime2.com.br',
    ep: '13'
  }
];
</script>