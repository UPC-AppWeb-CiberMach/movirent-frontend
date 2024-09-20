<template>

  <div class="sign-up-container">
    <h1 class="font-bold"> Regístrate y se parte de esta gran comunidad </h1>
    <pv-inputtext v-model="completeName" class="w-15rem lg:w-25rem p-3" type="text" placeholder="Complete Name" />
    <pv-inputtext v-model="password" class="w-15rem lg:w-25rem p-3" type="text" placeholder="Contraseña" />
    <pv-inputtext v-model="phone" class="w-15rem lg:w-25rem p-3" type="text" placeholder="Celular" />
    <pv-inputtext v-model="email" class="w-15rem lg:w-25rem p-3" type="text" placeholder="Correo" />
    <pv-inputtext v-model="dni" class="w-15rem lg:w-25rem p-3" type="text" placeholder="DNI" />
    <pv-button @click="signUp" class="mt-5 p-4 w-12rem sign-up-btn" type="submit" label="Registrate" />
    <div class="flex flex-column lg:flex-row gap-2 mt-5 justify-content-center align-items-center">
      <h3>¿Ya tienes una cuenta?</h3>
      <h3 class="font-bold"> Inicia Sesión</h3>
    </div>
  </div>
</template>

<script setup>
import {Db} from "@/profile-management/services/api-fake.services.js";

let completeName = "";
let password = "";
let phone = "";
let email = "";
let dni = "";

async function signUp(){
  let user = {
    id: 0,
    email: email,
    password: password,
    name: "User",
    lastName: "User",
    phone: "1234567890",
    address: "User Address",
    user_roles_id : 1
  }
  await Db.prototype.signUp(user).then((response) => {
    if(response.status === 201){
      alert("Sign Up Success");
    }
  }).catch(() => {
    alert("Error");
  });
}
</script>

<style scoped>
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

@media (max-width: 1024px) {
  h1{
    text-align: center;
  }

  .sign-up-container{
    margin-top: 100px;
  }
}
</style>