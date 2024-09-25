<template>
  <div class="payment-page">
    <header>
      <div class="logo-container">
        <img src="@/assets/logo.png" alt="MoviRent Logo" class="logo">
        <h1></h1>
      </div>
      <div class="user-info">
        <span>Hola, Antonella Oré</span>
        <img src="@/assets/user.png" alt="Profile" class="profile-pic">
      </div>
    </header>

    <nav>
      <ul>
        <li>Perfil</li>
        <li>Mi suscripción</li>
        <li>Scooters</li>
      </ul>
    </nav>

    <div class="payment-container">
      <div class="payment-box">
        <h2>Medio de pago</h2>
        <div class="payment-content">
          <div class="left">
            <div class="card-logos">
              <img src="@/assets/amex-logo.png" alt="American Express">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MasterCard">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa">
              <p>Recuerda poner los datos reales o el pago sera denegado</p>
            </div>
          </div>
          <div class="right">
            <form>
              <label>Número de tarjeta:
                <input type="text" v-model="cardNumber" />
              </label>
              <label>Fecha de vencimiento:
                <input type="text" v-model="expirationDate" />
              </label>
              <label>Números posteriores:
                <input type="text" v-model="securityCode" />
              </label>
              <label>Número de cuenta destino:
                <input type="text" v-model="accountNumber" />
              </label>
            </form>
          </div>
        </div>
        <div class="total">
          <p>Total a pagar: S/. {{ totalAmount }}</p>
        </div>
        <div class="payment-buttons">
          <button class="pay-button" @click="confirmPayment">Pagar</button>
          <button class="cancel-button" @click="cancelPayment">Cancelar</button>
        </div>
      </div>
    </div>

    <!-- Confirmación -->
    <div v-if="showConfirmModal" class="modal">
      <div class="modal-content">
        <p>¿Estás segur@ de hacer el pago?</p>
        <p>No habrá devolución una vez realizado</p>
        <button class="pay-button" @click="makePayment">Pagar</button>
        <button class="cancel-button" @click="closeConfirmModal">Cancelar</button>
      </div>
    </div>

    <!-- Pago Exitoso -->
    <div v-if="showSuccessModal" class="modal">
      <div class="modal-content">
        <p>Pago realizado con éxito</p>
        <p>Contáctate con el dueño para realizar el recojo</p>
        <button class="pay-button" @click="closeSuccessModal">Aceptar</button>
      </div>
    </div>


    <footer>
      <div class="footer-content">
        <div class="info-section">
          <h4>Explora e informa</h4>
          <ul>
            <li>Danos tu opinión</li>
            <li>Preguntas frecuentes</li>
            <li>Política de privacidad</li>
          </ul>
        </div>
        <div class="social-section">
          <h4>Redes Sociales</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twiter</li>
          </ul>
          <h5></h5>
          <h5>© MoviRent 2024 Todos los derechos reservados</h5>
        </div>
        <div class="support-section">
          <h4>Soporte</h4>
          <img src="@/assets/whatsapp.png" alt="WhatsApp Soporte" class="support-icon">
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      cardNumber: '',
      expirationDate: '',
      securityCode: '',
      accountNumber: '',
      totalAmount: 39,  // precio del plan
      showConfirmModal: false,
      showSuccessModal: false
    };
  },
  methods: {
    confirmPayment() {
      this.showConfirmModal = true;
    },
    closeConfirmModal() {
      this.showConfirmModal = false;
    },
    async makePayment() {
      this.showConfirmModal = false;

      // Crear el payload con la información del formulario
      const paymentData = {
        cardNumber: this.cardNumber,
        expirationDate: this.expirationDate,
        securityCode: this.securityCode,
        accountNumber: this.accountNumber,
        totalAmount: this.totalAmount,
      };

      try {
        // Hacer la solicitud POST a la fake API
        const response = await axios.post('http://localhost:3000/payments', paymentData);

        // Si la solicitud es exitosa, mostrar el modal de éxito
        if (response.status === 201) {
          this.showSuccessModal = true;
          console.log('Pago realizado con éxito:', response.data);
        }
      } catch (error) {
        console.error('Error al realizar el pago:', error);
        alert('Hubo un error al procesar el pago. Inténtalo de nuevo.');
      }
    },
    closeSuccessModal() {
      this.showSuccessModal = false;
    },
    cancelPayment() {
      alert("Pago cancelado");
    }
  }
};
</script>


<style scoped>



header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #fff;
  border-bottom: 1px solid #fff;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  width: 50px;
  margin-right: 10px;
}

.user-info {
  display: flex;
  align-items: center;
}

.profile-pic {
  width: 40px;
  border-radius: 50%;
  margin-left: 10px;
}

nav ul {
  display: flex;
  justify-content: right;
  padding: 10px;
  background-color: #fff;
  list-style: none;
  margin: 0;
  gap: 30px;
}

nav ul li {
  margin: 0 15px;
  cursor: pointer;
  color: #333;
  font-weight: bold;
}





.plan-card h3 {
  font-size: 1.5rem;
}


.plan-card p {
  margin: 15px 0;
  font-size: 1rem;
}

.plan-card button {
  padding: 10px 20px;
  background-color: #f76c6c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.plan-card button:hover {
  background-color: #e35555;
}



.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

footer {
  background-color: #77DD77;
  color: black;
  width: 100%;
  padding: 20px;
}

footer h4 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
}

.footer-content ul {
  list-style: none;
  padding: 0;
}

.footer-content li {
  margin: 10px 0;
}

.support-icon {
  width: 40px;
}
.payment-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Arial, sans-serif;
}


.logo {
  width: 50px;
  margin-right: 10px;
}



.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.user-info {
  display: flex;
  align-items: center;
}



.payment-container {
  display: flex;
  justify-content: center;
  padding: 40px;
  background-color: #e0e0ff;
  flex-grow: 1;
}



h2 {
  text-align: center;
  margin-bottom: 20px;
}






.payment-form label {
  font-weight: bold;
  margin-bottom: 5px;
}

.payment-form input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 15px;
}

.payment-form input::placeholder {
  color: #ccc;
}



.pay-button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  width: 48%;
}

.cancel-button {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  width: 48%;
}





.footer-links div {
  display: flex;
  gap: 10px;
}

.footer-links a, .social-media a, .support a {
  color: white;
  text-decoration: none;
}

.support img {
  width: 20px;
  margin-right: 5px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  margin: 0;
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
}



header {
  width: 100%;
  background-color: white;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}



.logo {
  width: 60px;
  height: auto;
}

.user-info {
  display: flex;
  align-items: center;
}



header h1 {
  margin-right: auto;
  font-size: 24px;
}

nav a {
  margin-left: 20px;
  text-decoration: none;
  color: #333;
}

.payment-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f9;
}

.payment-box {
  background-color: #bec1de;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 600px;
}

.payment-content {
  display: flex;
  justify-content: space-between;
}

.left {
  width: 40%;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
}

.card-logos {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-logos img {
  width: 80px;
  height: auto;
  margin: 10px 0;
}

.right {
  width: 55%;
}

form label {
  display: block;
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.total {
  margin-bottom: 20px;
  font-weight: bold;
  text-align: right;
}

.payment-buttons {
  display: flex;
  justify-content: space-between;
}

.pay-button, .cancel-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 48%;
}

.pay-button {
  background-color: #4CAF50;
  color: white;
}

.cancel-button {
  background-color: #F44336;
  color: white;
}

footer {
  background-color: #4CAF50;
  color: black;
  text-align: center;
  padding: 10px 0;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}
</style>