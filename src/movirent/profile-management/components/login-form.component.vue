<template>
  <div class="p-d-flex p-flex-column p-ai-center p-jc-center sign-in-container div-clas" aria-label="Contenedor de inicio de sesión">
    <div id="sign-in-heading" class="font-bold pv-title" aria-label="Título de inicio de sesión">Iniciar Sesión</div> <br>
    <pv-inputtext
        v-model="email"
        :class="{ 'is-invalid': $v.email.$error }"
        class="w-15rem lg:w-25rem p-3 pv-text"
        type="text"
        placeholder="Usuario"
        aria-label="Campo de correo electrónico"/>
    <span
        v-if="$v.email.$error"
        class="error-message"
        aria-label="Error en correo electrónico">Correo electrónico válido es requerido
    </span> <br/>

    <pv-inputtext
        v-model="password"
        :class="{ 'is-invalid': $v.password.$error }"
        class="w-15rem lg:w-25rem p-3 pv-text"
        type="password"
        placeholder="Contraseña"
        aria-label="Campo de contraseña"/>
    <span
        v-if="$v.password.$error"
        class="error-message"
        aria-label="Error en contraseña">Contraseña es requerida
    </span>

    <div class="button-container">
      <pv-button @click="signIn" class="mt-5 p-2 sign-in-btn" type="submit" label="Iniciar Sesión" aria-label="Botón para iniciar sesión"/>
    </div>
    <div class="grid-container" style="margin-top: 12px" aria-label="Sección de registro">
      <h3 aria-label="Pregunta de registro" class="pv-texts">¿Aún no tienes una cuenta?</h3>
      <div class="register-redirect" aria-label="Redirección de registro">
        <router-link to="/register" class="sign-up-section" aria-label="Enlace para registrarse">Regístrate</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import {Db} from "@/movirent/profile-management/services/user.services.js";
import router from "@/routes/router.js";
import {ref, reactive} from 'vue';
import {useVuelidate} from '@vuelidate/core';
import {required, email as emailValidator} from '@vuelidate/validators';

let email = ref('');
let password = ref('');

const rules = reactive({
  email: {required, emailValidator},
  password: {required}
});

const $v = useVuelidate(rules, {email, password});

async function signIn() {
  $v.value.$touch();
  if ($v.value.$error) {
    return;
  }
  await Db.prototype.signIn(email.value, password.value).then((response) => {
    if (response.data.length > 0) {
      alert("Sign In Success");
      sessionStorage.setItem("user", JSON.stringify(response.data[0]));
      router.push("/profile");
    } else {
      alert("User Not Found");
    }
  }).catch(() => {
    alert("Error");
  });
}
</script>

<style scoped>
.pv-text {
  background-color: inherit;
  border: 1px solid #808081;
  color: black;
}

.pv-texts{
  color: black;
}

.pv-title {  /*Titulo del Login "LOGIN"*/
  color: #555657;
  font-size: 24px;
}

.sign-in-container {
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

.sign-in-btn {
  background-color: #72D063;
  border: none;
  height: 3rem;
  width: 9rem;
}

.sign-in-btn:hover {
  background-color: #5cbf4b;
}

.register-redirect {
  margin-left: 10px;
}

.sign-up-section {
  text-decoration: none;
  font-weight: bolder;
  font-size: medium;
  color: black;
  margin-top: 10px;
}

.is-invalid {
  border-color: red;
}

.error-message {
  color: red; font-size: small;
}

.div-clas{
  margin-top: 10%; width: 100%; max-width: 25rem; margin-left: auto; margin-right: auto;
}
</style>