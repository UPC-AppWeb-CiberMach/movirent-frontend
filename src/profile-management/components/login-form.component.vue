<template>

  <div class="sign-in-container">
    <h1 class="font-bold"> Iniciar Sesión </h1>
    <pv-inputtext v-model="email" class="w-15rem lg:w-25rem p-3" type="text" placeholder="Email" />
    <pv-inputtext v-model="password" class="w-15rem lg:w-25rem p-3" type="password" placeholder="Contraseña" />
    <pv-button @click="signIn" class="mt-5 p-4 w-12rem sign-in-btn" type="submit" label="Iniciar Sesión" />
    <div class="flex flex-column lg:flex-row gap-2 mt-5 justify-content-center align-items-center">
      <h3>¿Aún no tienes una cuenta?</h3>
      <h3 class="font-bold"> Regístrate</h3>
    </div>
  </div>
</template>

<script setup>
import {Db} from "@/profile-management/services/user.services.js";

let email = "";
let password = "";

async function signIn() {
  await Db.prototype.signIn(email, password).then((response) => {
    if(response.data.length > 0){
      alert("Sign In Success");
    }
    else {
      alert("User Not Found");
    }
  }).catch(() => {
    alert("Error");
  });
}
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