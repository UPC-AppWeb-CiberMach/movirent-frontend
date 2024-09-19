<template>
  <div class="card">
    <pv-toolbar style="border-radius: 0rem; padding: 1rem 1rem 1rem 1.5rem; background-color: #ffffff; border: 0px">
      <template #start>
        <div class="flex items-center gap-2">
          <img src="https://i.ibb.co/fYLGJVK/Logo-Movi.jpg" alt="Logo del MoviRent" style="height: 80px" />
        </div>
      </template>

      <template #center>
        <aside class="sidebar">
          <nav>
            <ul class="flex gap-3"> <!-- Cambiar a flex para horizontal -->
              <li>
                <RouterLink to="/Card" class="pv-btn">
                  <pv-button label="Perfil" icon="pi pi-user" />
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/Card" class="pv-btn">
                  <pv-button label="Mi suscripción" icon="pi pi-credit-card" />
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/Card" class="pv-btn">
                  <pv-button label="Reseñas" icon="pi pi-star" />
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/Card" class="pv-btn">
                  <pv-button label="Mis reservas" icon="pi pi-book" />
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/Card" class="pv-btn">
                  <pv-button label="Scooter" icon="pi pi-shop" />
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/Card" class="pv-btn">
                  <pv-button label="Historial" icon="pi pi-history" />
                </RouterLink>
              </li>
            </ul>
          </nav>
        </aside>
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

.pv-user {
  background-color: transparent;
  color: #513c86;
  font-weight: bold;
}

.sidebar nav ul {
  display: flex; /* Asegúrate de que los elementos de la lista se dispongan en fila */
}
</style>

<script setup lang="ts">
</script>