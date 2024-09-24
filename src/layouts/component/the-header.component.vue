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
          <router-link to="/profile" class="pv-btn">
            <pv-button :label="$t('buttons.profile')" icon="pi pi-user" />
          </router-link>
          <router-link to="/question" class="pv-btn">
            <pv-button :label="$t('buttons.subscription')" icon="pi pi-credit-card" />
          </router-link>
          <router-link to="/reseñas" class="pv-btn">
            <pv-button :label="$t('buttons.reviews')" icon="pi pi-credit-card" />
          </router-link>
          <router-link to="/list" class="pv-btn">
            <pv-button :label="$t('buttons.reservations')" icon="pi pi-credit-card" />
          </router-link>
          <router-link to="/newCard" class="pv-btn">
            <pv-button :label="$t('buttons.scooter')" icon="pi pi-shop" />
          </router-link>
          <router-link to="/ReservationHistory" class="pv-btn">
            <pv-button :label="$t('buttons.history')" icon="pi pi-credit-card" />
          </router-link>
        </div>
      </template>
      <template #end>
        <!-- Selector de idioma -->
        <select @change="changeLanguage($event)" class="language-selector">
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>

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
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
function changeLanguage(event) {
  locale.value = event.target.value;
}
</script>
