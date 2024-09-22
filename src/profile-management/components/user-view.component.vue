<template>
  <div class="p-d-flex p-flex-column p-ai-center p-jc-center user-view-container" aria-label="Contenedor de vista de usuario">
    <h1 id="user-edit-heading" class="font-bold center-title" aria-label="Título de edición de usuario">¿Tus datos son incorrectos o deseas actualizarlos? ¡Edítalos!</h1>

    <div class="p-d-flex p-jc-between content" aria-label="Contenido de usuario">
      <div class="p-d-flex p-flex-column p-ai-center p-jc-center left" aria-label="Sección izquierda de contenido de usuario">
        <img :src="photo" class="w-20rem lg:w-20rem p-3 profile-img" alt="Imagen de perfil" aria-label="Imagen de perfil del usuario"/>
        <h3 class="font-bold" aria-label="Recordatorio para el usuario">Recuerda siempre tener tus datos correctos y actualizados para así generar más confianza entre los usuarios</h3>

        <div class="historial-button" aria-label="Botón de historial">
          <pv-button @click="verHistorial" class="mt-5 p-4 w-10rem edit-btn" type="submit" label="Ver Historial" aria-label="Botón para ver el historial del usuario"/>
        </div>
      </div>

      <div class="p-d-flex p-flex-column p-ai-center right" aria-label="Sección derecha de contenido de usuario">
        <div class="p-d-flex p-flex-column p-ai-center inputs" aria-label="Entradas de datos del usuario">
          <pv-inputtext v-model="completeName" :class="{ 'is-invalid': $v.completeName.$error }" class="w-15rem lg:w-25rem p-3" type="text" placeholder="Nombre Completo" aria-label="Entrada de nombre completo del usuario"/>
          <span v-if="$v.completeName.$error" class="error-message" aria-label="Mensaje de error para el nombre completo">Nombre completo es requerido</span>
          <pv-inputtext v-model="password" :class="{ 'is-invalid': $v.password.$error }" class="w-15rem lg:w-25rem p-3" type="password" placeholder="Contraseña" aria-label="Entrada de contraseña del usuario"/>
          <span v-if="$v.password.$error" class="error-message" aria-label="Mensaje de error para la contraseña">Contraseña es requerida</span>
          <pv-inputtext v-model="phone" :class="{ 'is-invalid': $v.phone.$error }" class="w-15rem lg:w-25rem p-3" type="text" placeholder="Celular" aria-label="Entrada de número de celular del usuario"/>
          <span v-if="$v.phone.$error" class="error-message" aria-label="Mensaje de error para el número de celular">Telefono es requerido</span>
          <pv-inputtext v-model="email" :class="{ 'is-invalid': $v.email.$error }" class="w-15rem lg:w-25rem p-3" type="text" placeholder="Correo" aria-label="Entrada de correo electrónico del usuario"/>
          <span v-if="$v.email.$error" class="error-message" aria-label="Mensaje de error para el correo electrónico">Email en formato 'email@gmail.com' es requerido</span>
          <pv-inputtext v-model="dni" :class="{ 'is-invalid': $v.dni.$error }" class="w-15rem lg:w-25rem p-3" type="text" placeholder="DNI" aria-label="Entrada de DNI del usuario"/>
          <span v-if="$v.dni.$error" class="error-message" aria-label="Mensaje de error para el DNI">DNI es requerido</span>
          <pv-inputtext v-model="photo" :class="{ 'is-invalid': $v.photo.$error }" class="w-15rem lg:w-25rem p-3" type="text" placeholder="URL de tu foto" aria-label="Entrada de URL de la foto del usuario"/>
          <span v-if="$v.photo.$error" class="error-message" aria-label="Mensaje de error para la URL de la foto">URL de la foto es requerido</span>
        </div>

        <pv-dialog v-model:visible="showEditDialog" header="¿Estas segur@ de editar tu cuenta?" :modal="true" :closable="false">
          <p class="center-title">Puedes cambiarla cuantas veces quieras</p>

          <div class="p-d-flex p-jc-center p-ai-center p-mt-3 button-container">
            <pv-button class="p-button-edit green-button p-mr-2" label="Editar" @click="confirmEditUser" />
            <pv-button class="p-button-cancel-edit pink-button" label="Cancelar" @click="showEditDialog = false" />
          </div>
        </pv-dialog>

        <pv-dialog v-model:visible="showDeleteDialog" header="¿Estas segur@ de eliminar tu cuenta? " :modal="true" :closable="false">
          <p class="center-title">Tus datos no podrán se recuperados</p>

          <div class="p-d-flex p-jc-center p-ai-center p-mt-3 button-container">
            <pv-button class="p-button-delete green-button p-mr-2" label="Eliminar" @click="confirmDeleteUser" />
            <pv-button class="p-button-cancel-delete pink-button" label="Cancelar" @click="showDeleteDialog = false" />
          </div>
        </pv-dialog>

        <pv-button @click="showEditDialog = true" class="mt-5 p-4 w-10rem edit-btn" type="submit" label="Editar" aria-label="Botón para editar los datos del usuario"/>
        <pv-button @click="showDeleteDialog = true" class="mt-5 p-4 w-10rem delete-btn" type="submit" label="Borrar" aria-label="Botón para borrar los datos del usuario"/>
      </div>
    </div>
  </div>

</template>

<script setup>
import {Db} from "@/profile-management/services/user.services.js";
import router from "@/routes/router.js";
import { ref, reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, email as emailValidator } from '@vuelidate/validators'

let id = JSON.parse(sessionStorage.getItem("user"))?.id;
let completeName = ref(JSON.parse(sessionStorage.getItem("user"))?.completeName);
let password = ref(JSON.parse(sessionStorage.getItem("user"))?.password);
let phone = ref(JSON.parse(sessionStorage.getItem("user"))?.phone);
let email = ref(JSON.parse(sessionStorage.getItem("user"))?.email);
let dni = ref(JSON.parse(sessionStorage.getItem("user"))?.dni);
let photo = ref(JSON.parse(sessionStorage.getItem("user"))?.photo);
let showEditDialog = ref(false)
let showDeleteDialog = ref(false)

const rules = reactive({
  completeName: { required },
  password: { required, minLength: minLength(8) },
  email: { required, emailValidator },
  phone: { required, minLength: minLength(9), type: Number },
  dni: { required, minLength: minLength(8) },
  photo: { required }
})

const $v = useVuelidate(rules, { completeName, password, email, phone, dni, photo})

async function confirmEditUser() {
  showEditDialog.value = false
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
      photo: photo.value
    }
    await Db.prototype.editUser(id, user).then((response) => {
      if (response.status === 200) {
        alert("Edit User Success");
        sessionStorage.setItem("user", JSON.stringify(user));
      }
    }).catch(() => {
      alert("Error");
    });
  }
}

async function confirmDeleteUser() {
  showDeleteDialog.value = false
  await Db.prototype.deleteUser(id).then((response) => {
    if (response.status === 200) {
      alert("Delete User Success");
      sessionStorage.removeItem("user")
      router.push("/register")
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

.is-invalid {
  border-color: red;
}
.error-message{
  color: red;
  font-size: small;
}
.edit-btn{
  background-color: #72D063;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  width: 7rem;
  height: 2rem;
}

.delete-btn{
  background-color: #FD6C6C;
  border: none;
  width: 5rem;
  height: 2rem;
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
  border-radius: 100%;
  margin-left: 50%;
}

.right pv-inputtext {
  margin-top: 20px;
}

.green-button {
  background-color: #72D063;
  border: none;
  margin-right: 20px;
}
.pink-button {
  background-color: #FD6C6C;
  border: none;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
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