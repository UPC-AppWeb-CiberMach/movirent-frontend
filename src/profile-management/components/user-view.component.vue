<template>

  <div class="sign-in-container">
    <h1 class="font-bold"> ¿Tus datos son incorrectos o deseas actualizarlos? ¡Edítalos! </h1>
    <img src="https://cdn.pixabay.com/photo/2022/05/19/14/59/woman-7207561_1280.jpg" class="w-15rem lg:w-25rem p-3" style="width: 20vh; height: 20vh; border-radius: 100px"/>
    <h3 class="font-bold"> Recuerda siempre tener tus datos correctos y actualizados para así generar más confianza entre los usuarios </h3>
    <pv-inputtext v-model="completeName" class="w-15rem lg:w-25rem p-3" type="text" placeholder="Complete Name" />
    <pv-inputtext v-model="password" class="w-15rem lg:w-25rem p-3" type="text" placeholder="Contraseña" />
    <pv-inputtext v-model="phone" class="w-15rem lg:w-25rem p-3" type="text" placeholder="Celular" />
    <pv-inputtext v-model="email" class="w-15rem lg:w-25rem p-3" type="text" placeholder="Correo" />
    <pv-inputtext v-model="dni" class="w-15rem lg:w-25rem p-3" type="text" placeholder="DNI" />
    <pv-button @click="editUser" class="mt-5 p-4 w-12rem sign-in-btn" type="submit" label="Editar" />
    <pv-button @click="deleteUser" class="mt-5 p-4 w-12rem sign-in-btn" type="submit" label="Borrar" />
    <!--<pv-button @click="historial" class="mt-5 p-4 w-12rem sign-in-btn" type="submit" label="Historial" />

    -->
  </div>
</template>

<script setup>
import {Db} from "@/profile-management/services/api-fake.services.js";

let completeName = "";
let password = "";
let phone = "";
let email = "";
let dni = "";

async function editUser(){
  let user = {
    id: 0,
    email: this.email,
    password: this.password,
    completeName: this.complete_name,
    phone: this.phone,
    dni: this.dni,
    user_roles_id : 1
  }
  await Db.prototype.editUser(user).then((response) => {
    if(response.status === 201){
      alert("Edit User Success");
    }
  }).catch(() => {
    alert("Error");
  });
}

async function deleteUser(){
  let user = {
    id: 0,
    email: this.email,
    password: this.password,
    completeName: this.completeName,
    phone: this.phone,
    dni: this.dni,
    user_roles_id : 1
  }
  await Db.prototype.deleteUser(user).then((response) => {
    if(response.status === 201){
      alert("Delete User Success");
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