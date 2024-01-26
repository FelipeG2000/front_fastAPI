<template>
  <footer class="site-footer">
    <div class="logo">
      <img src="@/assets/logo.png" alt="Logo" />
    </div>
    <div class="social-icons">
      <!-- Agrega aquí tus iconos de redes sociales, por ejemplo, Font Awesome o Material Icons -->
      <i class="fab fa-facebook"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-instagram"></i>
    </div>
  </footer>
</template>

<script setup lang="ts">
// No es necesario exportar el componente cuando se utiliza <script setup>
</script>

<style scoped>
.site-footer {
  background-color: green;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  width: 50px; /* Ajusta el tamaño del logo según sea necesario */
}

.social-icons {
  font-size: 24px;
}

/* Añade estilos para tus iconos de redes sociales según la biblioteca que elijas */
</style>
