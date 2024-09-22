<template>
  <footer class="p-grid footer">
    <div class="p-col pv-col">
      <h3 style="font-weight: bold; color: #473180; font-size: 1.2rem;">Quiénes somos</h3>
      <br />
      <nav>
        <RouterLink to="/Question">
          <pv-button label="Quienes Somos" style="font-weight: bold; color: #513c86; font-size: 1rem; text-decoration: underline; background-color: transparent; border: none;" />
        </RouterLink>
        <br />
        <RouterLink to="/Question">
          <pv-button label="Preguntas frecuentes" style="font-weight: bold; color: #513c86; font-size: 1rem; text-decoration: underline; background-color: transparent; border: none;" />
        </RouterLink>
        <br />
        <RouterLink to="/Privacy">
          <pv-button label="Políticas y privacidad" style="font-weight: bold; color: #513c86; font-size: 1rem; text-decoration: underline; background-color: transparent; border: none;" />
        </RouterLink>
      </nav>
    </div>

    <div class="p-col pv-col">
      <h3 style="font-weight: bold; color: #473180; font-size: 1.2rem;">Nuestras redes sociales</h3> <br/>
      <a href="https://www.instagram.com" target="_blank">
        <pv-button label="Instagram" icon="pi pi-instagram" size="small" class="pv-btn" style="margin-top: 15px" />
      </a> <br/>
      <a href="https://www.facebook.com" target="_blank">
        <pv-button label="Facebook" icon="pi pi-facebook" size="small" class="pv-btn" style="margin-top: 15px" />
      </a> <br/>
      <a href="https://www.twitter.com" target="_blank">
        <pv-button label="Twitter" icon="pi pi-twitter" size="small" class="pv-btn" style="margin-top: 15px" />
      </a>
    </div>

    <div class="p-col pv-col">
      <h3 style="font-weight: bold; color: #473180; font-size: 1.2rem;">Soporte</h3> <br/>
      <p>
        <a href="https://wa.me/926335924" target="_blank" class="p-link pv-ws">
          <i class="pi pi-whatsapp pv-logo" style="font-size: 40px"></i> WhatsApp
        </a>
      </p>
    </div>
    <div style="padding: 20px;">
      <p style="color: #513c86; font-size: 1.2rem;">© 2024 -Todos los derechos reservados - MoviRent</p>
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
  color: #6a4eb0;
  font-size: 30px;
  text-decoration: none;
}
.pv-logo{
  color: #6a4eb0;
}
.pv-ws:hover {
  color: #275ab4;
  text-decoration: underline;
}
.pv-logo:hover{
  color: #275ab4;
}
</style>