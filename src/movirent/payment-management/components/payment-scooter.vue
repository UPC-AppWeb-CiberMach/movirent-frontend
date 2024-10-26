<template>
  <div class="payment-form-container" aria-label="Formulario de pago de alquiler de scooter">
    <h1 id="payment-form-heading" class="font-bold pv-txt title-text" aria-label="Título Pago de Alquiler de Scooter">Pago de Alquiler de Scooter</h1>

    <div class="content" aria-label="Sección de contenido de pago">
      <div class="left-section" aria-label="Sección izquierda de pago">
        <img src="https://infonegocios.info/content/images/2022/07/22/324342/premios_LA_tarjetasdecredito.jpg" alt="Logotipo de Visa" class="centered-image" />
        <h3 class="pv-txt reminder-text" aria-label="Recordatorio de datos de pago">Recuerda poner los datos reales o el pago será denegado</h3>
      </div>

      <div class="right-section" aria-label="Formulario de datos de pago">
        <div class="p-d-flex p-flex-column p-ai-center inputs" aria-label="Entradas de datos de tarjeta">
          <pv-inputtext v-model="cardNumber" :class="{ 'is-invalid': $v.cardNumber.$error }" class="w-15rem lg:w-25rem p-3 pv-text" type="text" placeholder="Número de tarjeta" aria-label="Campo para ingresar el número de tarjeta"/>
          <span v-if="$v.cardNumber.$error" class="error-message" aria-label="Error en número de tarjeta">Número de tarjeta válido es requerido</span>

          <pv-inputtext v-model="expiryDate" :class="{ 'is-invalid': $v.expiryDate.$error }" class="w-15rem lg:w-25rem p-3 pv-text" type="text" placeholder="Fecha de vencimiento" aria-label="Campo para ingresar la fecha de vencimiento"/>
          <span v-if="$v.expiryDate.$error" class="error-message" aria-label="Error en fecha de vencimiento">Fecha de vencimiento válida es requerida</span>

          <pv-inputtext v-model="cvv" :class="{ 'is-invalid': $v.cvv.$error }" class="w-15rem lg:w-25rem p-3 pv-text" type="text" placeholder="CVV" aria-label="Campo para ingresar el CVV"/>
          <span v-if="$v.cvv.$error" class="error-message" aria-label="Error en CVV">CVV válido es requerido</span>
        </div>

        <pv-dialog v-model:visible="showPaymentDialog" header="¿Estás segur@ de hacer el pago?" :modal="true"
                   :closable="false" aria-label="Diálogo de confirmación de pago">
          <p class="center-title" style="margin-left: 1rem">No habrá devolución una vez realizado</p>

          <div class="p-d-flex p-jc-center p-ai-center p-mt-2 button-container">
            <pv-button class="p-button-pay w-5rem green-button" label="Pagar" @click="processPayment"/>
            <pv-button class="p-button-cancel-edit w-5rem pink-button" label="Cancelar"
                       @click="showPaymentDialog = false"/>
          </div>
        </pv-dialog>

        <div class="button-container2">
          <pv-button @click="confirmPayment" class="mt-5 p-4 w-10rem payment-btn" type="submit" label="Pagar"
                     aria-label="Botón para confirmar pago"/>
          <pv-button @click="cancelPayment" class="mt-5 p-4 w-10rem cancel-btn" type="submit" label="Cancelar"
                     aria-label="Botón para cancelar y regresar"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, reactive} from 'vue';
import {useVuelidate} from '@vuelidate/core';
import {required, minLength, maxLength} from '@vuelidate/validators';
import {Db} from '@/movirent/vehicule-management/services/scooter.services.js';
import router from "@/routes/router.js";

const cardNumber = ref('');
const expiryDate = ref('');
const cvv = ref('');
const showPaymentDialog = ref(false);

const rules = reactive({
  cardNumber: {required, minLength: minLength(16), maxLength: maxLength(16)},
  expiryDate: {required, minLength: minLength(5), maxLength: maxLength(5)},
  cvv: {required, minLength: minLength(3), maxLength: maxLength(4)}
});

const $v = useVuelidate(rules, {cardNumber, expiryDate, cvv});

async function confirmPayment() {
  $v.value.$touch();
  if (!$v.value.$error) {
    showPaymentDialog.value = true;
  }
}

async function processPayment() {
  const scooter = JSON.parse(sessionStorage.getItem("scooter"));
  const reservation = {
    id: new Date().getTime().toString(),
    client_id: 1,
    scooter_id: scooter.id,
    start_date: new Date().toISOString(),
    end_date: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString(),
    price: scooter.price_per_hour,
    time: 1
  };

  try {
    const db = new Db();
    await db.createReservation(reservation);
    router.push("/profile");
  } catch (error) {
    console.error("Error al procesar el pago", error);
  }
}

async function cancelPayment() {
  router.push("/Scooterlist");
}
</script>

<style scoped>
.payment-form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.title-text {
  color: #333333;
  font-size: 2rem;
}

.reminder-text {
  color: #333333;
  font-size: 1rem;
  margin-top: 1rem;
  text-align: center;
}

.content {
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  width: 70%;
}

.left-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.right-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
}

.inputs {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button-container2 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 20px;
}

.centered-image {
  display: block;
  margin: 0 auto;
  width: 20rem;
  height: auto;
}

.pv-text {
  background-color: #ffffff;
  color: #333333;
  margin-top: 20px;
}

.is-invalid {
  border-color: red;
}

.payment-btn {
  background-color: #72D063;
  border: none;
  height: 3rem;
  width: 7rem;
  color: white;
}

.payment-btn:hover {
  background-color: #5cbf4b;
}

.cancel-btn {
  background-color: #FD6C6C;
  color: white;
  border: none;
  height: 3rem;
  width: 7rem;
}

.cancel-btn:hover {
  background-color: #e64c4c;
}

.green-button {
  background-color: #72D063;
  border: none;
  color: white;
}

.pink-button {
  background-color: #FD6C6C;
  border: none;
  color: white;
}


@media (max-width: 1400px) {
  .content {
    flex-direction: column;
    align-items: center;
  }

  .left-section, .right-section {
    width: 100%;
  }

  .button-container2 {
    flex-direction: column;
    gap: 10px;
  }
  .reminder-text{
    text-align: center;
  }
}


@media (max-width: 576px) {
  .content {
    flex-direction: column;
  }

  .reminder-text{
    text-align: center;
  }
  .left-section {
    order: 1;
  }

  .right-section {
    order: 2;
    width: 100%;
  }

  .centered-image {
    width: 15rem;
  }

  .button-container2 {
    flex-direction: column;
    gap: 10px;
  }
}
</style>