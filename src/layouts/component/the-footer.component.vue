<template>
  <footer class="p-grid footer">
    <div class="p-col pv-col" style="margin-bottom: 10px">
      <h3 style="font-weight: bold; color: black; font-size: 1.2rem;" aria-label="Quienes Somos">{{ $t('movirent.titleQuienesSomos') }}</h3>
      <br />
      <nav>
        <RouterLink to="/main" aria-label="Nombres">
          <pv-button :label="$t('movirent.names')"  style="font-weight: bold; color: black; text-decoration: none; font-size: 1rem; background-color: transparent; border: none;" />
        </RouterLink>
        <br />
        <RouterLink to="/question" aria-label="Pregunta">
          <pv-button :label="$t('movirent.question')"  style="font-weight: bold; color: black; text-decoration: none; font-size: 1rem;  background-color: transparent; border: none;" />
        </RouterLink>
        <br />
        <RouterLink to="/privacy" aria-label="Política">
          <pv-button :label="$t('movirent.policy')"  style="font-weight: bold; color: black; font-size: 1rem; text-decoration: none; background-color: transparent; border: none;" />
        </RouterLink>
      </nav>
    </div>

    <div class="p-col pv-col" style="margin-top: 10px">
      <h3 style="font-weight: bold; color: black; font-size: 1.2rem;" aria-label="Redes Sociales">{{ $t('movirent.redesSociales') }}</h3> <br/>
      <a href="https://www.instagram.com" target="_blank" aria-label="Instagram">
        <pv-button label="Instagram" icon="pi pi-instagram" size="small" class="pv-btn" style="margin-top: 15px; background-color: #72D063; border: none; color: black" />
      </a> <br/>
      <a href="https://www.facebook.com" target="_blank" aria-label="Facebook">
        <pv-button label="Facebook" icon="pi pi-facebook" size="small" class="pv-btn" style="margin-top: 15px; background-color: #72D063; border: none; color: black" />
      </a> <br/>
      <a href="https://www.twitter.com" target="_blank" aria-label="Twitter">
        <pv-button label="Twitter" icon="pi pi-twitter" size="small" class="pv-btn" style="margin-top: 15px; background-color: #72D063; border: none; color: black" />
      </a>
    </div>

    <div class="p-col pv-col" style="margin-bottom: 100px">
      <h3 style="font-weight: bold; color: black; font-size: 1.2rem;" aria-label="Soporte">{{ $t('movirent.soporte') }}</h3> <br/>
      <p>
        <a href="https://wa.me/926335924" target="_blank" class="p-link pv-ws" style="font-size: 1rem" aria-label="WhatsApp">
          <i class="pi pi-whatsapp pv-logo" style="font-size: 20px"></i> WhatsApp
        </a>
      </p>
    </div>
    <div style="padding: 20px;">
      <p style="color: black; font-size: 1.2rem;" aria-label="Descripción">{{ $t('movirent.description') }}</p>
    </div>

  </footer>
</template>

<style>
.footer {
  background-color: #72D063;
  color: #2c3e50;
  margin: 0px !important;
}

.p-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.p-col {
  flex: 1 0 33.33%;
  padding: 1.5rem;
  box-sizing: border-box;
}

.pv-btn {
  margin-right: 9px;
}

.pv-col {
  text-align: center;
}

@media (max-width: 767px) {
  .p-col {
    flex: 1 1 100%;
  }
}

.pv-ws {
  color: black;
  font-size: 30px;
  text-decoration: none;
}
.pv-logo{
  color: black;
}
.pv-ws:hover {
  color: black;
  text-decoration: underline;
}
.pv-logo:hover{
  color: black;
}
</style>
<script setup>
</script>