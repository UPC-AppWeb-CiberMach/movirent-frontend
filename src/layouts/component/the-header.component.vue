<template>
  <div class="card">
    <pv-toolbar style="border-radius: 0rem; padding: 1rem 1rem 1rem 1.5rem; background-color: #ffffff; border: 0px">
      <template #start>
        <div class="flex items-center gap-2">
          <img src="https://i.ibb.co/fYLGJVK/Logo-Movi.jpg" alt="Logo del MoviRent" style="height: 80px" />
        </div>
        <select @change="changeLanguage($event)" class="language-selector" style="margin-left: 50px; background-color: white; color: #222222; padding: 5px; border-radius: 5px" aria-label="Selector de idioma">
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </template>
      <template #end>
        <div class="flex gap-3 align-right">
          <router-link to="/profile" class="pv-btn" aria-label="Perfil">
            <pv-button :label="$t('buttons.profile')" icon="pi pi-user" style="background-color: white; color: black; border: none"/>
          </router-link>
          <router-link to="/newCard" class="pv-btn" aria-label="Scooter">
            <pv-button :label="$t('buttons.scooter')" icon="pi pi-shop" style="background-color: white; color: black; border: none"/>
          </router-link>
          <pv-button label="Logout" @click="logout" style="background-color: #82cc79; color: #222222; border: none" aria-label="Cerrar sesión"/>
        </div>
      </template>
    </pv-toolbar>
  </div>
</template>

<style scoped>
.pv-btn {
  margin-left: 12px;
  margin-right: 12px;
  font-weight: bold;
  background-color: transparent;
  border: none;
}

</style>
<script setup>
import { useI18n } from "vue-i18n";

import router from "@/routes/router.js";

const { locale } = useI18n();
function changeLanguage(event) {
  locale.value = event.target.value;
}
const logout =()=>{
  sessionStorage.removeItem('user');
  router.push('/login');
}
</script>
