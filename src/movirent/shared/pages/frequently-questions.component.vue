<template>
  <div class="faq-container">
    <h2>Preguntas Frecuentes</h2> <br>

    <section>
      <h3>1. ¿Cómo puedo registrarme en MoviRent?</h3>
      <p>Puedes registrarte fácilmente en la plataforma ingresando tu nombre, correo electrónico y creando una contraseña.</p>
    </section>

    <section>
      <h3>2. ¿Puedo usar MoviRent sin tener un scooter?</h3>
      <p>Sí, puedes utilizar la plataforma para alquilar scooters eléctricos como cliente. No es necesario que seas propietario de un scooter para disfrutar de nuestros servicios.</p>
    </section>

    <section>
      <h3>3. ¿Cómo puedo alquilar una scooter?</h3>
      <p>Solo necesitas buscar el scooter que te interesa en nuestra plataforma, seleccionar la fecha y hora de inicio y fin, y confirmar la reserva. Una vez confirmada, recibirás todos los detalles para recoger el vehículo.</p>
    </section>

    <section>
      <h3>4. ¿Qué sucede si el scooter que reservamos no está disponible?</h3>
      <p>Si el scooter no está disponible, te avisaremos inmediatamente y te recomendaremos otro vehículo disponible en la plataforma.</p>
    </section>

    <section>
      <h3>5. ¿Cómo puedo poner mi scooter en alquiler?</h3>
      <p>Como propietario, solo necesitas registrarte en la plataforma, subir los detalles de tu scooter, agregar fotos y establecer la tarifa por hora o por día. También puedes definir las reglas de uso y la disponibilidad del vehículo.</p>
    </section>

    <section>
      <h3>6. ¿Puedo editar los detalles de mi scooter después de haberlo publicado?</h3>
      <p>Sí, puedes editar la información de tu scooter, cambiar las tarifas y actualizar la disponibilidad en cualquier momento.</p>
    </section>

    <section>
      <h3>7. ¿Cómo se calculan las tarifas de alquiler?</h3>
      <p>Las tarifas dependen del tiempo de uso del scooter. Los propietarios pueden establecer tarifas por hora, día o semana, y el costo final dependerá de la duración de la reserva.</p>
    </section>

    <section>
      <h3>8. ¿Es posible calificar a un propietario o a un cliente después de un alquiler?</h3>
      <p>Sí, ambos usuarios (propietarios y clientes) pueden dejar reseñas y calificaciones una vez finalizado el alquiler, lo que ayuda a la comunidad a conocer la reputación de cada usuario y scooter.</p>
    </section>

    <section>
      <h3>9. ¿Qué debo hacer si tengo un problema con mi scooter durante el alquiler?</h3>
      <p>Si surge algún problema, puedes comunicarte con el propietario del scooter o con nuestro equipo de soporte, quienes te ayudarán a resolver cualquier inconveniente.</p>
    </section>

    <section>
      <h3>10. ¿Cómo contacto al servicio de atención al cliente?</h3>
      <p>Puedes comunicarte con nuestro equipo de soporte a través de la sección "Contacto" en la plataforma o enviarnos un mensaje a nuestro correo electrónico de soporte.</p>
    </section>

  </div>
</template>

<script>
export default {
  name: "FAQComponent"
}
</script>

<style scoped>
.faq-container {
  font-family: 'Open Sans', sans-serif;
  background-color: #ffffff;
  color: #000000;
  padding: 20px;
  line-height: 1.6;
}

h2 {
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  color: black;
}
h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1b;
}

p {
  margin-bottom: 15px;
}

section {
  margin-bottom: 20px;
}
</style>