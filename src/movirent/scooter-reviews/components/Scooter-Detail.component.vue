<template>
  <div class="p-d-flex p-flex-column p-ai-center p-jc-center scooter-create-container" aria-label="Vista de creación de scooter">
    <div class="p-d-flex p-jc-between content" aria-label="Contenido principal de creación de scooter">
      <div class="p-d-flex p-flex-column p-ai-center p-jc-center left pv-card" aria-label="Sección de información del scooter">
        <img :src="image" class="w-20 lg:w-20rem p-3 profile-img" alt="Imagen del scooter" aria-label="Imagen del scooter"/>
        <h3 class="font-bold reminder" aria-label="Recordatorio de datos correctos">Recuerda siempre tener los datos del scooter correctos y actualizados para generar confianza entre los usuarios</h3>
        <pv-button class="mt-3 p-4 w-9rem h-1rem review-btn" @click="goToReviews" label="Reseñas" aria-label="Botón para ver reseñas del scooter"/>
      </div>
      <div class="p-d-flex p-flex-column p-ai-center right" aria-label="Sección de formulario de datos">
        <div class="p-d-flex p-flex-column p-ai-center inputs" aria-label="Formulario de entrada de datos del scooter">
          <pv-inputtext v-model="name" :class="{ 'is-invalid': $v.name.$error }" class="w-15rem lg:w-25rem p-3 pv-text" type="text" placeholder="Nombre Scooter" aria-label="Nombre del scooter"/>
          <span v-if="$v.name.$error" class="error-message" aria-label="Error: Nombre es requerido">Nombre es requerido</span>

          <pv-inputtext v-model="brand" :class="{ 'is-invalid': $v.brand.$error }" class="w-15rem lg:w-25rem p-3 pv-text" type="text" placeholder="Marca" aria-label="Marca del scooter"/>
          <span v-if="$v.brand.$error" class="error-message" aria-label="Error: Marca es requerida">Marca es requerida</span>

          <pv-inputtext v-model="model" :class="{ 'is-invalid': $v.model.$error }" class="w-15rem lg:w-25rem p-3 pv-text" type="text" placeholder="Modelo" aria-label="Modelo del scooter"/>
          <span v-if="$v.model.$error" class="error-message" aria-label="Error: Modelo es requerido">Modelo es requerido</span>

          <pv-inputtext v-model="image" :class="{ 'is-invalid': $v.image.$error }" class="w-15rem lg:w-25rem p-3 pv-text" type="text" placeholder="URL de la imagen" aria-label="URL de la imagen del scooter"/>
          <span v-if="$v.image.$error" class="error-message" aria-label="Error: URL de la imagen es requerida">URL de la imagen es requerida</span>

          <pv-inputnumber v-model="price_per_hour" :class="{ 'is-invalid': $v.price_per_hour.$error }" class="p-3 pv-text input-number" type="number" placeholder="Precio por hora" aria-label="Precio por hora del scooter"/>
          <span v-if="$v.price_per_hour.$error" class="error-message" aria-label="Error: Precio por hora es requerido">Precio por hora es requerido</span>

          <pv-inputtext v-model="district" :class="{ 'is-invalid': $v.district.$error }" class="w-15rem lg:w-25rem p-3 pv-text" type="text" placeholder="Distrito" aria-label="Seleccionar distrito"/>
          <span v-if="$v.district.$error" class="error-message" aria-label="Error: Distrito es requerido">Distrito es requerido</span>

          <pv-inputtext v-model="phone" :class="{ 'is-invalid': $v.phone.$error }" class="w-15rem lg:w-25rem p-3 pv-text" type="text" placeholder="Número de celular" aria-label="Número de celular del propietario"/>
          <span v-if="$v.phone.$error" class="error-message" aria-label="Error: Número de celular es requerido">Número de celular es requerido</span>
        </div>

        <pv-dialog v-model:visible="showEditDialog" header="Confirmación de alquiler" :modal="true" :closable="false">
          <div class="button-container">
            <pv-button class="green-button p-mr-2" label="Alquilar" @click="confirmEditScooter" aria-label="Confirmar alquiler del scooter"/>
            <pv-button class="pink-button" label="Cancelar" @click="showEditDialog = false" aria-label="Cancelar alquiler del scooter"/>
          </div>
        </pv-dialog>

        <pv-dialog v-model:visible="showDeleteDialog" header="¿Regresar a la Lista de Scooters?" :modal="true" :closable="false">
          <p class="center-title">Tus datos no podrán ser recuperados</p>
          <div class="button-container">
            <pv-button class="green-button p-mr-2" label="Regresar" @click="confirmDeleteScooter" aria-label="Regresar a la lista de scooters"/>
            <pv-button class="pink-button" label="Cancelar" @click="showDeleteDialog = false" aria-label="Cancelar regreso a la lista de scooters"/>
          </div>
        </pv-dialog>

        <pv-button @click="showEditDialog = true" class="mt-5 p-4 w-10rem edit-btn" label="Alquilar" aria-label="Botón para alquilar el scooter"/>
        <pv-button @click="showDeleteDialog = true" class="mt-5 p-4 w-10rem delete-btn" label="Regresar" aria-label="Botón para regresar a la lista de scooters"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Db } from "@/movirent/vehicule-management/services/scooter.services.js";
import router from "@/routes/router.js";
import { ref, reactive, onMounted } from 'vue';
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

let scooter = ref(null);

let id = JSON.parse(sessionStorage.getItem("scooter"))?.id;
console.log(id);
let name = JSON.parse(sessionStorage.getItem("scooter"))?.name;
let brand = JSON.parse(sessionStorage.getItem("scooter"))?.brand;
let model = JSON.parse(sessionStorage.getItem("scooter"))?.model;
let image = JSON.parse(sessionStorage.getItem("scooter"))?.image;
let price_per_hour = JSON.parse(sessionStorage.getItem("scooter"))?.price_per_hour;
let district = JSON.parse(sessionStorage.getItem("scooter"))?.district;
let phone = JSON.parse(sessionStorage.getItem("scooter"))?.phone;
let showEditDialog = ref(false);
let showDeleteDialog = ref(false);

onMounted(() => {
  scooter.value = JSON.parse(sessionStorage.getItem("scooter"));
  if (!scooter.value || !scooter.value.id) {
    console.error("ID del scooter no está definido.");
  }
});

const rules = reactive({
  name: { required },
  brand: { required },
  model: { required },
  image: { required },
  price_per_hour: { required },
  district: { required },
  phone: { required },
});

const $v = useVuelidate(rules, { name, brand, model, image, price_per_hour, district, phone });

async function confirmEditScooter() {
  showEditDialog.value = false;
  $v.value.$touch();
  if ($v.value.$error) {
    return -1;
  } else {
    let scooter = {
      id: id,
      name: name,
      brand: brand,
      model: model,
      image: image,
      price_per_hour: price_per_hour,
      district: district,
      phone: phone,
    };
    await Db.prototype.editScooter(id, scooter)
        .then((response) => {
          if (response.status === 200) {
            sessionStorage.setItem("selectedScooter", JSON.stringify(scooter.value));
            router.push({
              path: "/ScooterPayment",
              query: {
                hours: price_per_hour.value,
                scooterId: id,
              },
            });
          }
        })
        .catch(() => {
          alert("Error al alquilar el scooter.");
        });
  }
}

async function confirmDeleteScooter() {
  $v.value.$touch();
  router.push("/ScooterList");
}

function goToReviews() {
  router.push(`/scooter/${id}/reviews`);
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.scooter-create-container {
  margin-top: 2rem;
}

.left {
  width: 50%;
  margin-left: 15%;
}

.right {
  width: 50%;
  margin-left: 5%;
}

.inputs {
  width: 50%;
  gap: 20px;
  max-width: none;
}
.input-number{
  width: 17rem;
  height: 6rem;
  margin-left: -17px;
}
.pv-card {
  text-align: center;
  justify-content: center;
  align-items: center;
  padding-right: 20%;
}

.pv-text {
  background-color: #ffffff;
  color: black;
  margin-bottom: 20px;
}

.is-invalid {
  border-color: red;
}

.error-message {
  color: red;
  font-size: small;
}

.pv-txt {
  color: black;
}

.center-title {
  text-align: center;
}
.edit-btn{
  background-color: #72D063;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 10px;
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
.green-button {
  background-color: #72D063;
  border: none;
  margin-right: 20px;
}
.pink-button {
  background-color: #FD6C6C;
  border: none;
  height: 3rem;
  width: 7rem;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
}

.reminder {
  color: #333;
  font-size: 1.2em;
  text-align: center;
  margin-top: 1rem;
  font-weight: bold;
}

.p-button-edit {
  background-color: #72D063;
  border: none;
  height: 3rem;
  width: 7rem;
}

@media (max-width: 568px){
  .content {
    flex-direction: column;
  }

  .right {
    margin-left: 5rem;
  }
  .left h1 {
    margin-left: 0;
  }
  .left{
    padding-right: 0;
    margin-left: 7rem;
  }

  .profile-img {
    margin-left: 0;
    width: 10rem;
    height: 10rem;
  }
  .inputs {
    width: 100%;
    gap: 20px;
  }
  .button-container{
    margin-left: 2rem;
    align-items: center;
  }
}
.review-btn {
  background-color: #fd6c6c;
  border: none;
  margin-bottom: 20px;
}
.review-btn:hover {
  background-color: #fc4d4d;
}
</style>
