<template>
  <div class="p-d-flex p-flex-column p-ai-center p-jc-center sign-in-container" style="margin-top: 10%; width: 100%; max-width: 25rem; margin-left: auto; margin-right: auto;" aria-label="Contenedor de inicio de sesión">
    <h1 id="sign-in-heading" class="font-bold pv-txt" aria-label="Título de inicio de sesión">Iniciar Sesión</h1>
    <pv-inputtext v-model="email" class="w-15rem lg:w-25rem p-3 component-margin pv-text" type="text" placeholder="Email" aria-label="Campo de correo electrónico"/>
    <pv-inputtext v-model="password" class="w-15rem lg:w-25rem p-3 component-margin pv-text" type="password" placeholder="Contraseña" aria-label="Campo de contraseña"/>
    <div class="button-container">
      <pv-button @click="signIn" class="mt-5 p-2 sign-in-btn component-margin" type="submit" label="Iniciar Sesión" aria-label="Botón para iniciar sesión"/>
    </div>
    <div class="grid-container component-margin" aria-label="Sección de registro">
      <h3 aria-label="Pregunta de registro" class="pv-txt">¿Aún no tienes una cuenta?</h3>
      <div class="register-redirect" aria-label="Redirección de registro">
        <router-link to="/register" class="sign-up-section" aria-label="Enlace para registrarse">Regístrate</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import {Db} from "@/movirent/profile-management/services/user.services.js";
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
.pv-text{
  background-color: #ffffff;
  color: black;
}
.pv-txt{
  color: black;
}
.sign-in-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
  width: 100%;
  max-width: 25rem;
  margin-left: auto;
  margin-right: auto;
}

.font-bold {
  text-align: center;
}

.component-margin {
  margin-bottom: 20px;
  margin-top: 20px;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  gap: 2px;
}
.button-container {
  display: flex;
  justify-content: center;
  width: 50%;
}

.sign-in-btn{
  background-color: #72D063;
  border: none;
  height: 3rem;
  width: 9rem;
}

.sign-in-btn:hover{
  background-color: #5cbf4b;
}

.register-redirect {
  margin-left: 10px;
}
.sign-up-section{
  text-decoration: none;
  font-weight: bolder;
  font-size: medium;
  color: black;
  margin-top: 10px;
}
</style>