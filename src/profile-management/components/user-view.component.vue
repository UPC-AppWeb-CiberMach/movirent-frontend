<template>

  <div class="user-view-container">
    <h1 class="font-bold center-title"> ¿Tus datos son incorrectos o deseas actualizarlos? ¡Edítalos! </h1>
    <div class="content">
      <div class="left">
        <img src="https://cdn.pixabay.com/photo/2022/05/19/14/59/woman-7207561_1280.jpg" class="w-15rem lg:w-25rem p-3 profile-img" />
        <h3 class="font-bold"> Recuerda siempre tener tus datos correctos y actualizados para así generar más confianza entre los usuarios </h3>
        <div class="historial-button">
          <pv-button @click="verHistorial" class="mt-5 p-4 w-12rem edit-btn" type="submit" label="Ver Historial" />
        </div>
      </div>
      <div class="right">
        <div class="inputs">
          <pv-inputtext v-model="completeName" class="w-15rem lg:w-25rem p-3" type="text" placeholder="Complete Name" />
          <pv-inputtext v-model="password" class="w-15rem lg:w-25rem p-3" type="text" placeholder="Contraseña" />
          <pv-inputtext v-model="phone" class="w-15rem lg:w-25rem p-3" type="text" placeholder="Celular" />
          <pv-inputtext v-model="email" class="w-15rem lg:w-25rem p-3" type="text" placeholder="Correo" />
          <pv-inputtext v-model="dni" class="w-15rem lg:w-25rem p-3" type="text" placeholder="DNI" />
        </div>

        <pv-button @click="editUser" class="mt-5 p-4 w-12rem edit-btn" type="submit" label="Editar" />
        <pv-button @click="deleteUser" class="mt-5 p-4 w-12rem delete-btn" type="submit" label="Borrar" />
      </div>
    </div>
  </div>

</template>

<script setup>
import {Db} from "@/profile-management/services/user.services.js";
import router from "@/routes/router.js";

let id = JSON.parse(sessionStorage.getItem("user"))?.id;
let completeName = JSON.parse(sessionStorage.getItem("user"))?.completeName;
let password = JSON.parse(sessionStorage.getItem("user"))?.password;
let phone = JSON.parse(sessionStorage.getItem("user"))?.phone;
let email = JSON.parse(sessionStorage.getItem("user"))?.email;
let dni = JSON.parse(sessionStorage.getItem("user"))?.dni;

async function editUser(){
  let user = {
    id: id,
    email: email,
    password: password,
    completeName: completeName,
    phone: phone,
    dni: dni,
    user_roles_id : 1
  }
  await Db.prototype.editUser(id,user).then((response) => {
    if(response.status === 200){
      alert("Edit User Success");
      sessionStorage.setItem("user", JSON.stringify(user));
    }
  }).catch(() => {
    alert("Error");
  });
}

async function deleteUser(){
  await Db.prototype.deleteUser(id).then((response) => {
    if(response.status === 200){
      alert("Delete User Success");
      sessionStorage.removeItem("user")
      router.push("/")
    }
  }).catch(() => {
    alert("Error");
  });
}

function verHistorial(){
  router.push("/historial")
}
</script>

<style scoped>

.edit-btn{
  background-color: #72D063;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
}

.delete-btn{
  background-color: #FD6C6C;
  border: none;
}
.edit-btn:hover{
  background-color: #5cbf4b;
}

.delete-btn:hover{
  background-color: #FD6C6C;
}

.user-view-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.center-title {
  text-align: center;
  margin-bottom: 20px;
}

.content {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.left {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.historial-button{

}

.right {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-top: 20px;
  margin-right: 10%;
}

.right .inputs {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.left h3 {
  margin-top: 20px;
  margin-left: 50%;
  text-align: center;
  color: #333;
  line-height: 1.5;
}
.profile-img {
  width: 20vh;
  height: 20vh;
  border-radius: 100px;
  margin-left: 50%;
}

.right pv-inputtext {
  margin-top: 20px;
}

@media (max-width: 568px) {
  .content {
    flex-direction: column;
  }

  .right {
    margin-right: 0;
  }
  .left h3 {
    margin-left: 0;
  }

  .profile-img {
    margin-left: 0;
  }
}
@media (width>1024px){
  .historial-button{
    margin-left: 420px;
  }
}
</style>