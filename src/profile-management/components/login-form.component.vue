<template>

  <div class="sign-in-container">
    <h1 class="font-bold"> Iniciar Sesión </h1>
    <pv-inputtext class="w-15rem lg:w-25rem p-3" type="text" placeholder="Email" />
    <pv-inputtext class="w-15rem lg:w-25rem p-3" type="password" placeholder="Contraseña" />
    <pv-button class="mt-5 p-4 w-12rem sign-in-btn" type="submit" label="Iniciar Sesión" />
    <div class="flex flex-column lg:flex-row gap-2 mt-5 justify-content-center align-items-center">
      <h3>¿Aún no tienes una cuenta?</h3>
      <router-link to="/register" class="text-blue-500">Regístrate</router-link>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.sign-in-container{
  display: flex;
  flex-direction: column;
  gap:20px;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
}

.sign-in-btn{
  background-color: #72D063;
}

.sign-in-btn:hover{
  background-color: #5cbf4b;
}

</style>