<template>
  <div class="payment-form-container" aria-label="payment-form-heading">
    <h1 id="payment-form-heading" class="font-bold pv-txt" aria-label="Título de pago">{{ $t('paymentView.title') }}</h1>

    <div class="content">
      <div class="left-section">
        <img src="https://infonegocios.info/content/images/2022/07/22/324342/premios_LA_tarjetasdecredito.jpg" alt="Visa logo" class="centered-image" />
        <h3 class="pv-txt">{{ $t('paymentView.recuerda') }}</h3>
      </div>

      <div class="right-section" aria-label="Sección derecha de contenido de pago">
        <div class="p-d-flex p-flex-column p-ai-center inputs" aria-label="Entradas de datos del pago">
          <pv-inputtext v-model="cardNumber" :class="{ 'is-invalid': $v.cardNumber.$error }" class="w-15rem lg:w-25rem p-3 pv-text" type="text" placeholder="Número de tarjeta" aria-label="Campo de número de tarjeta"/>
          <span v-if="$v.cardNumber.$error" class="error-message" aria-label="Mensaje de error para el número de tarjeta">{{ $t('paymentView.numTarjeta') }}</span>

          <pv-inputtext v-model="expiryDate" :class="{ 'is-invalid': $v.expiryDate.$error }" class="w-15rem lg:w-25rem p-3 pv-text" type="text" placeholder="Fecha de vencimiento" aria-label="Campo de fecha de vencimiento"/>
          <span v-if="$v.expiryDate.$error" class="error-message" aria-label="Mensaje de error para la fecha de vencimiento">{{ $t('paymentView.fechaExp') }}</span>

          <pv-inputtext v-model="cvv" :class="{ 'is-invalid': $v.cvv.$error }" class="w-15rem lg:w-25rem p-3 pv-text" type="text" placeholder="CVV" aria-label="Campo de CVV"/>
          <span v-if="$v.cvv.$error" class="error-message" aria-label="Mensaje de error para el CVV">{{ $t('paymentView.cvv') }}</span>
        </div>

        <pv-dialog v-model:visible="showPaymentDialog" header="¿Estas segur@ de hacer el pago?" :modal="true" :closable="false">
          <p class="center-title" style="margin-left: 1rem">{{ $t('paymentView.advertencia') }}</p>

          <div class="p-d-flex p-jc-center p-ai-center p-mt-2 button-container">
            <pv-button class="p-button-pay w-5rem green-button" :label="$t('paymentView.btnPagar')" @click="processPayment" />
            <pv-button class="p-button-cancel-edit w-5rem pink-button" :label="$t('paymentView.btnCancelar')" @click="showPaymentDialog = false" />
          </div>
        </pv-dialog>
        <div class="button-container2">
          <pv-button @click="confirmPayment" class="mt-5 p-4 w-10rem payment-btn" type="submit" :label="$t('paymentView.btnPagar')" aria-label="Botón para pagar"/>
          <pv-button @click="cancelPayment" class="mt-5 p-4 w-10rem cancel-btn" type="submit" :label="$t('paymentView.btnCancelar')" aria-label="Botón para cancelar pago"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, minLength, maxLength } from '@vuelidate/validators';
import { Db } from '@/movirent/suscription-management/services/suscription.services.js';
import router from "@/routes/router.js";

const cardNumber = ref('');
const expiryDate = ref('');
const cvv = ref('');
const showPaymentDialog = ref(false);

const rules = reactive({
  cardNumber: { required, minLength: minLength(16), maxLength: maxLength(16) },
  expiryDate: { required, minLength: minLength(5), maxLength: maxLength(5) },
  cvv: { required, minLength: minLength(3), maxLength: maxLength(4) }
});

const $v = useVuelidate(rules, { cardNumber, expiryDate, cvv });

async function confirmPayment() {
  $v.value.$touch();
  if (!$v.value.$error) {
    showPaymentDialog.value = true;
  }
}

async function processPayment() {
  try {
    const db = new Db();
    await db.getAllSuscriptions();
    alert('Pago realizado con éxito');
    showPaymentDialog.value = false;
    await router.push("/suscriptions");
  } catch (error) {
    console.error("Error al realizar el pago:", error);
    alert("Hubo un error al procesar el pago");
  }
}

async function cancelPayment() {
  await router.push("/profile");
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

.center-title {
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

.button-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.button-container2{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 20px;

}
.centered-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20rem;
  height: auto;
}

.pv-text {
  background-color: #ffffff;
  color: black;
  margin-top: 20px;
}

.pv-txt {
  color: black;
  text-align: center;
}

.is-invalid {
  border-color: red;
}
.button-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
.error-message {
  color: red;
  font-size: small;
}

.payment-btn {
  background-color: #72D063;
  border: none;
  height: 3rem;
  width: 7rem;
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
  background-color: #FD6C6C;
}

.green-button {
  background-color: #72D063;
  border: none;
  margin-right: 10px;
}

.pink-button {
  background-color: #FD6C6C;
  border: none;
}
@media (max-width: 1400px) {
  .centered-image {
    width: 15rem;
  }
  .content {
    flex-direction: column;
  }

  .left-section {
    align-items: center;
  }

  .right-section {
    width: 100%;
  }
  .button-container {
    flex-direction: column;
    gap: 10px;
  }
}
</style>