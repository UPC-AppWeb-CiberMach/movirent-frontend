<template>
  <div class="card">
    <pv-toolbar style="border-radius: 0rem; padding: 1rem 1rem 1rem 1.5rem; background-color: #ffffff; border: 0px">
      <template #start>
        <div class="flex items-center gap-2">
          <img src="https://i.ibb.co/fYLGJVK/Logo-Movi.jpg" alt="Logo del MoviRent" style="height: 80px" />
        </div>
      </template>

      <template #center>
        <div class="flex gap-3 ">
          <pv-button class="pv-btn" label="Perfil" icon="pi pi-user" />
          <pv-button class="pv-btn" label="Mi suscripción" icon="pi pi-credit-card" />
          <pv-button class="pv-btn" label="Reseñas" icon="pi pi-credit-card" />
          <pv-button class="pv-btn" label="Mis reservas" icon="pi pi-credit-card" />
          <pv-button class="pv-btn" label="Scooter" icon="pi pi-shop" />
          <pv-button class="pv-btn" label="Historial" icon="pi pi-credit-card" />
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
<script setup lang="ts">
</script>