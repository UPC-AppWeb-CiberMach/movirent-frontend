<template>
  <footer class="footer">
    <div class="footer-links">
      <a href="#">Danos tu opinión</a>
      <a href="#">Preguntas frecuentes</a>
      <a href="#">Política de privacidad</a>
    </div>
    <div class="social-links">
      <a href="#">Facebook</a>
      <a href="#">Instagram</a>
      <a href="#">Twitter</a>
    </div>
    <div class="support">
      <Button icon="pi pi-whatsapp" label="Soporte" />
    </div>
  </footer>
</template>

<script>
import Button from 'primevue/button';

export default {
  components: {
    Button,
  },
};
</script>

<style scoped>
.footer {
  background-color: #8bc34a;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.footer-links, .social-links {
  display: flex;
  gap: 1.5rem;
}

.footer-links a, .social-links a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
</style>
