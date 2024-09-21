<template>
  <div class="sign-up-container" aria-labelledby="sign-up-heading">
    <h1 id="sign-up-heading" class="font-bold">Regístrate y sé parte de esta gran comunidad</h1>
    <pv-inputtext v-model="completeName" :class="{ 'is-invalid': $v.completeName.$error }" class="w-15rem lg:w-25rem p-3" type="text" placeholder="Nombre Completo" aria-label="Nombre Completo"/>
    <pv-inputtext v-model="password" :class="{ 'is-invalid': $v.password.$error }" class="w-15rem lg:w-25rem p-3" type="password" placeholder="Contraseña" aria-label="Contraseña"/>
    <pv-inputtext v-model="phone" :class="{ 'is-invalid': $v.phone.$error }" class="w-15rem lg:w-25rem p-3" type="text" placeholder="Celular" aria-label="Número de Celular"/>
    <pv-inputtext v-model="email" :class="{ 'is-invalid': $v.email.$error }" class="w-15rem lg:w-25rem p-3" type="text" placeholder="Correo" aria-label="Correo Electrónico"/>
    <pv-inputtext v-model="dni" :class="{ 'is-invalid': $v.dni.$error }" class="w-15rem lg:w-25rem p-3" type="text" placeholder="DNI" aria-label="Documento de Identidad"/>

    <pv-button @click="signUp" class="mt-5 p-4 w-12rem sign-up-btn" type="submit" label="Regístrate" aria-label="Botón para registrarse"/>

    <div class="flex flex-row align-items-center justify-content-center">
      <h3>¿Ya tienes una cuenta?</h3>
      <div class="sign-in-redirect">
        <router-link to="/login" class="sign-in-section" aria-label="Enlace para iniciar sesión">Inicia Sesión</router-link>
      </div>
    </div>
  </div>

</template>

<script setup>
import {Db} from "@/profile-management/services/user.services.js";
import { v4 as uuidv4 } from 'uuid';
import router from "@/routes/router.js";
import { ref, reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, email as emailValidator } from '@vuelidate/validators'

let id = uuidv4();
let completeName = ref('')
let password = ref('')
let phone = ref('')
let email = ref('')
let dni = ref('')

const rules = reactive({
  completeName: { required },
  password: { required, minLength: minLength(8) },
  email: { required, emailValidator },
  phone: { required, minLength: minLength(9), type: Number },
  dni: { required, minLength: minLength(8) }
})

const $v = useVuelidate(rules, { completeName, password, email, phone, dni })

async function signUp(){
  $v.value.$touch()
  if ($v.value.$error) {
    console.log("Error")
  }
  else {

    let user = {
      id: id,
      email: email.value,
      password: password.value,
      completeName: completeName.value,
      phone: phone.value,
      dni: dni.value,
      user_roles_id: 1
    }
    await Db.prototype.signUp(user).then((response) => {
      if (response.status === 201) {
        alert("Sign Up Success");
        router.push("/login")
      }
    }).catch(() => {
      alert("Error");
    });
  }
}
</script>

<style scoped>
.is-invalid {
  border-color: red;
}
.sign-up-container{
  display: flex;
  flex-direction: column;
  gap:20px;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
}

.sign-up-btn{
  background-color: #72D063;
}

.sign-up-btn:hover{
  background-color: #5cbf4b;
}

.sign-up-container .font-bold{
  text-align: center;

}
.flex {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.sign-in-section {
  text-decoration: none;
  font-weight: bolder;
  font-size: medium;
  color: black;
  margin-top: 10px;
}
.sign-in-redirect {
  margin-left: 10px;
  margin-top: 5px;
}
</style>