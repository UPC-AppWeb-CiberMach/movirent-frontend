<template>

  <div id="user-edit-heading" class="title-content" aria-label="Título de edición de usuario"> {{ $t('titles.title') }} </div> <br/> <br/>
  <div class="contenedor">

    <div class="columna">
      <div class="pv-card">
        <img :src="photo" class="profile-img" alt="Imagen de perfil del usuario" aria-label="Imagen de perfil"/>
        <br/>
        <p class="text-profile">Recuerda siempre tener tus datos correctos y actualizados para así generar más confianza entre los usuarios.</p>
        <br/>
        <div class="historial-button">
          <pv-button @click="verHistorial" label="Ver Historial"  severity="success" raised />
        </div>
      </div>
    </div>


    <div class="columna">
      <div class="inputs">
        <div class="input-row">
          <label class="title-input">Nombres</label>
          <pv-inputtext
              v-model="completeName"
              :class="{ 'is-invalid': $v.completeName.$error }"
              class="w-10rem lg:w-20rem p-2 pv-text"
              placeholder="Nombre Completo"
              aria-label="Nombre Completo"
          />
        </div>
        <span v-if="$v.completeName.$error" class="error-message">Nombre completo es requerido</span>

        <div class="input-row">
          <label class="title-input">Contraseña</label>
          <pv-inputtext
              v-model="password"
              :class="{ 'is-invalid': $v.password.$error }"
              class="w-10rem lg:w-20rem p-2 pv-text"
              type="password"
              placeholder="Contraseña"
              aria-label="Contraseña"
          />
        </div>
        <span v-if="$v.password.$error" class="error-message">Contraseña es requerida</span>

        <div class="input-row">
          <label class="title-input">Teléfono</label>
          <pv-inputtext
              v-model="phone"
              :class="{ 'is-invalid': $v.phone.$error }"
              class="w-10rem lg:w-20rem p-2 pv-text"
              placeholder="Celular"
              aria-label="Celular"
          />
        </div>
        <span v-if="$v.phone.$error" class="error-message">Teléfono es requerido</span>

        <div class="input-row">
          <label class="title-input">Correo</label>
          <pv-inputtext
              v-model="email"
              :class="{ 'is-invalid': $v.email.$error }"
              class="w-10rem lg:w-20rem p-2 pv-text"
              placeholder="Correo"
              aria-label="Correo"
          />
        </div>
        <span v-if="$v.email.$error" class="error-message">Email en formato 'email@gmail.com' es requerido</span>

        <div class="input-row">
          <label class="title-input">DNI</label>
          <pv-inputtext
              v-model="dni"
              :class="{ 'is-invalid': $v.dni.$error }"
              class="w-10rem lg:w-20rem p-2 pv-text"
              placeholder="DNI"
              aria-label="DNI"
          />
        </div>
        <span v-if="$v.dni.$error" class="error-message">DNI es requerido</span>

        <div class="input-row">
          <label class="title-input">Foto de perfil</label>
          <pv-inputtext
              v-model="photo"
              :class="{ 'is-invalid': $v.photo.$error }"
              class="w-10rem lg:w-20rem p-2 pv-text"
              placeholder="URL de tu foto"
              aria-label="URL de la foto"
          />
        </div>
        <span v-if="$v.photo.$error" class="error-message">URL de la foto es requerido</span>

        <div class="input-row">
          <label class="title-input">Dirección</label>
          <pv-inputtext
              v-model="address"
              :class="{ 'is-invalid': $v.address.$error }"
              class="w-10rem lg:w-20rem p-2 pv-text"
              placeholder="Dirección"
              aria-label="Dirección"
          />
        </div>
        <span v-if="$v.address.$error" class="error-message">Dirección es requerida</span>
      </div>

      <div class="button-container">
        <pv-button class="btn" @click="showEditDialog = true" label="Editar" severity="success" raised aria-label="Editar datos del usuario"/>
        <pv-button class="btn" @click="showDeleteDialog = true" label="Borrar" severity="danger" raised aria-label="Borrar datos del usuario"/>
      </div>


      <pv-dialog v-model:visible="showEditDialog" header="¿Estás segur@ de editar tu cuenta?" :modal="true" :closable="false">
        <p class="center-title">Puedes cambiarla cuantas veces quieras</p>
        <div class="button-container">
          <pv-button class="btn-editar" label="Editar" severity="success" @click="confirmEditUser" raised/>
          <pv-button class="btn-delete" label="Cancelar" severity="danger" @click="showEditDialog = false" raised/>
        </div>
      </pv-dialog>


      <pv-dialog v-model:visible="showDeleteDialog" header="¿Estás segur@ de eliminar tu cuenta?" :modal="true" :closable="false">
        <p class="center-title">Tus datos no podrán ser recuperados</p>
        <div class="button-container">
          <pv-button class="green-button" label="Eliminar" @click="confirmDeleteUser"/>
          <pv-button class="pink-button" label="Cancelar" @click="showDeleteDialog = false"/>
        </div>
      </pv-dialog>
    </div>
  </div>
</template>

<script setup>
import { Db } from "@/movirent/profile-management/services/user.services.js";
import router from "@/routes/router.js";
import { ref, reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, minLength, email as emailValidator } from '@vuelidate/validators';

let id = JSON.parse(sessionStorage.getItem("user"))?.id;
let completeName = ref(JSON.parse(sessionStorage.getItem("user"))?.completeName);
let password = ref(JSON.parse(sessionStorage.getItem("user"))?.password);
let phone = ref(JSON.parse(sessionStorage.getItem("user"))?.phone);
let email = ref(JSON.parse(sessionStorage.getItem("user"))?.email);
let dni = ref(JSON.parse(sessionStorage.getItem("user"))?.dni);
let photo = ref(JSON.parse(sessionStorage.getItem("user"))?.photo);
let address = ref(JSON.parse(sessionStorage.getItem("user"))?.address);
let showEditDialog = ref(false);
let showDeleteDialog = ref(false);

const rules = reactive({
  completeName: { required },
  password: { required, minLength: minLength(8) },
  email: { required, emailValidator },
  phone: { required, minLength: minLength(9) },
  dni: { required, minLength: minLength(8) },
  photo: { required },
  address: { required }
});

const $v = useVuelidate(rules, { completeName, password, email, phone, dni, photo, address });

async function confirmEditUser() {
  showEditDialog.value = false;
  $v.value.$touch();
  if ($v.value.$error) return -1;

  let user = {
    id,
    email: email.value,
    password: password.value,
    completeName: completeName.value,
    phone: phone.value,
    dni: dni.value,
    photo: photo.value,
    address: address.value
  };

  await Db.prototype.editUser(id, user).then((response) => {
    if (response.status === 200) {
      alert("Edit User Success");
      sessionStorage.setItem("user", JSON.stringify(user));
    }
  }).catch(() => {
    alert("Error");
  });
}

async function confirmDeleteUser() {
  showDeleteDialog.value = false;
  await Db.prototype.deleteUser(id).then((response) => {
    if (response.status === 200) {
      alert("Delete User Success");
      sessionStorage.removeItem("user");
      router.push("/register");
    }
  }).catch(() => {
    alert("Error");
  });
}

function verHistorial() {
  router.push("/ReservationHistory");
}
</script>

<style scoped>
.title-content{
  color: #282828;
  text-align: center;
  font-size: 1.5rem;
}
.title-input{
  font-size: 0.9rem;
  color: #515151;
  text-align: left;
}
.contenedor {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.columna {
  width: 50%;
  padding: 5px;
  text-align: center;
}

.pv-card, .inputs {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-img {
  border-radius: 100%;
  width: 25%;
}
.text-profile{
  color: #282828;
  text-align: center;
  font-size: 1rem;
  margin-left: 16%;
  margin-right: 16%;
}

@media (max-width: 600px) {
  .columna {
    width: 100%;
  }
  .title-input {
    width: 10px;
    font-weight: bold;
  }
}
.center-title {
  text-align: center;
  margin-bottom: 20px;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.btn{
  margin-left: 8px;
  margin-right: 8px;
}


.inputs {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.title-input {
  width: 110px;
  text-align: right !important;
  font-weight: bold;
}

.pv-text{
  background-color: inherit;
  color: #282828;
  border: 1px solid #82cc79;
  width: 70%;
}
.error-message {
  color: red;
  font-size: small;
  margin-left: 30%;
}

</style>
