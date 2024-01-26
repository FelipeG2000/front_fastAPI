<template>
    <nav class="site-navbar">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Logo" />
      </div>
      <!-- Puedes agregar más elementos de navegación según sea necesario -->
    </nav>
  </template>
  
  <script setup lang="ts">
  // No es necesario exportar el componente cuando se utiliza <script setup>
  </script>
  
  <style scoped>
  .site-navbar {
    background-color: green;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo img {
    width: 50px; /* Ajusta el tamaño del logo según sea necesario */
  }
  </style>
  