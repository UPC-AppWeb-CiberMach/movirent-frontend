<template>
  <div class="card">
    <pv-toolbar style="border-radius: 0rem; padding: 1rem 1rem 1rem 1.5rem; background-color: #ffffff; border: 0px">
      <template #start>
        <div class="flex items-center gap-2">
          <img src="https://i.ibb.co/fYLGJVK/Logo-Movi.jpg" alt="Logo del MoviRent" style="height: 80px" />
        </div>
      </template>
      <template #center>
        <div class="flex gap-3">
          <router-link to="/viewCard" class="pv-btn">
            <pv-button label="Perfil" icon="pi pi-user" />
          </router-link>
          <router-link to="/question" class="pv-btn">
            <pv-button label="Mi suscripción" icon="pi pi-credit-card" />
          </router-link>
          <router-link to="/reseñas" class="pv-btn">
            <pv-button label="Reseñas" icon="pi pi-credit-card" />
          </router-link>
          <router-link to="/reservas" class="pv-btn">
            <pv-button label="Reservas" icon="pi pi-credit-card" />
          </router-link>
          <router-link to="/scooter" class="pv-btn">
            <pv-button label="Scooter" icon="pi pi-shop" />
          </router-link>
          <router-link to="/historial" class="pv-btn">
            <pv-button label="Historial" icon="pi pi-credit-card" />
          </router-link>
        </div>
      </template>

      <template #end>
        <pv-chip label="Barbara Espinoza" class="pv-user" image="https://i.ibb.co/BgVwFqk/Logo-Movi-Tech.png" />
      </template>
    </pv-toolbar>
  </div>
</template>

<style scoped>
.pv-btn {
  margin-left: 12px;
  margin-right: 12px;
  color: #513c86;
  font-weight: bold;
  background-color: transparent;
  border: none;
}
.pv-user{
  background-color: transparent;
  color: #513c86;
  font-weight: bold;
}
</style>
<script setup>
</script>
