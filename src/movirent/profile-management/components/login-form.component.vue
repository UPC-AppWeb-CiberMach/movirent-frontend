<template>
  <div class="container">
    <div class="pv-card" aria-label="Contenedor de inicio de sesión">

      <div class="text" aria-label="Título de inicio de sesión">Iniciar Sesión</div>

      <label for="username" class="title-input">Usuario</label> <br/>
      <pv-inputtext
          v-model="email"
          class="w-15rem lg:w-18rem p-2 pv-text-input"
          type="type"
          placeholder="Email"
          aria-label="Campo de correo electrónico"
      /> <br/> <br/>


      <label for="username" class="title-input">Contraseña</label> <br/>
      <pv-inputtext
          v-model="password"
          class="w-15rem lg:w-18rem p-2 pv-text-input"
          type="password"
          placeholder="Contraseña"
          aria-label="Campo de contraseña"
      /> <br/><br/>


      <div class="button-container">
        <pv-button
            @click="signIn"
            type="submit"
            class="p-2 sign-in-btn"
            label="Iniciar Sesión"
            severity="success"
            aria-label="Botón para iniciar sesión" />
      </div>  <br/>


      <div class="grid-container component-margin" aria-label="Sección de registro">
        <h3 aria-label="Pregunta de registro" class="pv-txt">¿Aún no tienes una cuenta?</h3>
        <div class="register-redirect" aria-label="Redirección de registro">
          <router-link to="/register" class="sign-up-section" aria-label="Enlace para registrarse">Regístrate</router-link>
        </div>
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
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.pv-card {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  padding: 2.5rem;
}
.text {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #282828;
}
.pv-text-input{
  background-color: #ffffff;
  color: #575656;
  border: 1px solid #818080;
}
.title-input{
  font-size: 0.7rem;
  color: #919090;
  text-align: center;
}
.button-container {
  display: flex;
  justify-content: center;
}
.sign-in-btn{
  border: none;
}

.pv-txt{
  color: black;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  gap: 2px;
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