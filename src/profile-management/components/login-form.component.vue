<template>
  <div class="sign-in-container" aria-label="Contenedor de inicio de sesión">
    <h1 id="sign-in-heading" class="font-bold" aria-label="Título de inicio de sesión">Iniciar Sesión</h1>
    <pv-inputtext v-model="email" class="w-15rem lg:w-25rem p-3" type="text" placeholder="Email" aria-label="Campo de correo electrónico"/>
    <pv-inputtext v-model="password" class="w-15rem lg:w-25rem p-3" type="password" placeholder="Contraseña" aria-label="Campo de contraseña"/>
    <pv-button @click="signIn" class="mt-5 p-4 w-12rem sign-in-btn" type="submit" label="Iniciar Sesión" aria-label="Botón para iniciar sesión"/>
    <div class="flex flex-row align-items-center justify-content-center" aria-label="Sección de registro">
      <h3 aria-label="Pregunta de registro">¿Aún no tienes una cuenta?</h3>
      <div class="register-redirect" aria-label="Redirección de registro">
        <router-link to="/register" class="sign-up-section" aria-label="Enlace para registrarse">Regístrate</router-link>
      </div>
    </div>
  </div>

</template>

<script setup>
import {Db} from "@/profile-management/services/user.services.js";
import router from "@/routes/router.js";

let email = "";
let password = "";

async function signIn() {
  await Db.prototype.signIn(email, password).then((response) => {
    if(response.data.length > 0){
      alert("Sign In Success");
      sessionStorage.setItem("user", JSON.stringify(response.data[0]));
      router.push("/profile")
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
  text-decoration: none;
}

.sign-in-btn{
  background-color: #72D063;
}

.sign-in-btn:hover{
  background-color: #5cbf4b;
}

.flex {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.register-redirect {
  margin-left: 10px;
  margin-top: 5px;
}
.sign-up-section{
  text-decoration: none;
  font-weight: bolder;
  font-size: medium;
  color: black;
  margin-top: 10px;
}
</style>