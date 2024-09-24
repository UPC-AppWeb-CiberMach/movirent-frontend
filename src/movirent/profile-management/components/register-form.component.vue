<template>
  <div class="p-d-flex p-flex-column p-ai-center p-jc-center sign-up-container pv-formulario" aria-label="sign-up-heading">
    <h1 id="sign-up-heading" class="font-bold pv-txt" aria-label="Título de registro">Regístrate y sé parte de esta gran comunidad</h1>
    <pv-inputtext v-model="completeName" :class="{ 'is-invalid': $v.completeName.$error }" class="w-15rem lg:w-25rem p-3 pv-text" type="text" placeholder="Nombre Completo" aria-label="Campo de nombre completo"/>
    <span v-if="$v.completeName.$error" class="error-message" aria-label="Mensaje de error para el nombre completo">Nombre completo es requerido</span>
    <pv-inputtext v-model="password" :class="{ 'is-invalid': $v.password.$error }" class="w-15rem lg:w-25rem p-3 pv-text" type="password" placeholder="Contraseña" aria-label="Campo de contraseña"/>
    <span v-if="$v.password.$error" class="error-message" aria-label="Mensaje de error para la contraseña">Contraseña de 8 caracteres como minimo es requerida</span>
    <pv-inputtext v-model="phone" :class="{ 'is-invalid': $v.phone.$error }" class="w-15rem lg:w-25rem p-3 pv-text" type="text" placeholder="Celular" aria-label="Campo de número de celular"/>
    <span v-if="$v.phone.$error" class="error-message" aria-label="Mensaje de error para el número de celular">Telefono de 8 digitos es requerido</span>
    <pv-inputtext v-model="email" :class="{ 'is-invalid': $v.email.$error }" class="w-15rem lg:w-25rem p-3 pv-text" type="text" placeholder="Correo" aria-label="Campo de correo electrónico"/>
    <span v-if="$v.email.$error" class="error-message" aria-label="Mensaje de error para el correo electrónico">Email en formato 'email@gmail.com' es requerido</span>
    <pv-inputtext v-model="dni" :class="{ 'is-invalid': $v.dni.$error }" class="w-15rem lg:w-25rem p-3 pv-text" type="text" placeholder="DNI" aria-label="Campo de DNI"/>
    <span v-if="$v.dni.$error" class="error-message" aria-label="Mensaje de error para el DNI">DNI es requerido</span>
    <Dropdown v-model="user_role_id" :options="roles" optionLabel="name" optionValue="id" placeholder="Rol de Usuario" :inputStyle="{ backgroundColor: '#ffffff', color: '#262626' }" class="w-15rem lg:w-25rem p-3 pv-text" aria-label="Campo de rol de usuario"/>
    <span v-if="$v.user_role_id.$error" class="error-message" aria-label="Mensaje de error para el rol de usuario">Rol de Usuario es requerido</span>
    <pv-inputtext v-model="photo" class="w-15rem lg:w-25rem p-3 pv-text" type="text" placeholder="URL de tu foto" aria-label="Campo de URL de la foto"/>
    <span v-if="$v.photo.$error" class="error-message" aria-label="Mensaje de error para la URL de la foto">URL de la foto es requerido</span>
    <pv-button @click="signUp" class="mt-5 p-4 w-10rem sign-up-btn" type="submit" label="Regístrate" aria-label="Botón para registrarse"/>

    <div class="d-flex align-items-center justify-content-center" aria-label="Sección de redirección">
      <h3 class="mb-0 pv-txt">¿Ya tienes una cuenta?</h3>
      <div class="sign-in-redirect">
        <router-link to="/login" class="sign-in-section ml-2 mt-2" aria-label="Enlace para iniciar sesión">Inicia Sesión</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import {Db} from "@/movirent/profile-management/services/user.services.js";
import { v4 as uuidv4 } from 'uuid';
import router from "@/routes/router.js";
import { ref, reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, email as emailValidator } from '@vuelidate/validators'
import Dropdown from 'primevue/dropdown';

let id = uuidv4();
let completeName = ref('')
let password = ref('')
let phone = ref('')
let email = ref('')
let dni = ref('')
let user_role_id = ref('')
let photo = ref('')
let roles = [
  {name: 'Owner', id: 1},
  {name: 'Client', id: 2}
]

const rules = reactive({
  completeName: { required },
  password: { required, minLength: minLength(8) },
  email: { required, emailValidator },
  phone: { required, minLength: minLength(9), type: Number },
  dni: { required, minLength: minLength(8) },
  user_role_id: { required },
  photo: { required }
})

const $v = useVuelidate(rules, { completeName, password, email, phone, dni, user_role_id, photo })

async function signUp() {
  $v.value.$touch()
  if ($v.value.$error) {
    return -1;
  } else {
    let user = {
      id: id,
      email: email.value,
      password: password.value,
      completeName: completeName.value,
      phone: phone.value,
      dni: dni.value,
      user_roles_id: user_role_id.value,
      photo: photo.value
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
.pv-text{
  background-color: #ffffff;
  color: #353535;
}
.is-invalid {
  border-color: red;
}
.error-message{
  color: red;
  font-size: small;
}
.pv-txt{
  color: #6d6d70;
}
.sign-up-container{
  display: flex;
  flex-direction: column;
  gap:20px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.sign-up-btn{
  background-color: #72D063;
  border: none;
  height: 3rem;
  width: 7rem;
}

.sign-up-btn:hover{
  background-color: #5cbf4b;
}

.sign-up-container .font-bold{
  text-align: center;

}

.sign-in-section {
  text-decoration: none;
  font-weight: bolder;
  font-size: medium;
  color: black;
  margin-top: 10px;
}
.sign-in-redirect {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  white-space: nowrap;
}
.d-flex {
  display: flex;
  flex-wrap: nowrap;
}

.mb-0{
  margin-top: 10px;
}
</style>