<template>
    <div class="app-wrapper">
      <Navbar />
      <div class="content">
        <div>{{ posts }}</div>
      </div>
      <SiteFooter />
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue';
  import PostService from '@/services/PostFastApi';
  import Navbar from '@/components/SiteNavbar.vue';
  import SiteFooter from '@/components/SiteFooter.vue';
  
  const service = new PostService();
  const posts = service.getPosts();
  
  onMounted(async () => {
    await service.fetchAll();
  });
  </script>
  
  <style scoped>
  .app-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Al menos el 100% de la altura de la ventana */
  }
  
  .content {
    flex: 1;
  }
  
  /* Otros estilos según sea necesario */
  </style>
  