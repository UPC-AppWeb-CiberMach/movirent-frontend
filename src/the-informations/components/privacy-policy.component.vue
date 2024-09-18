<template>
  <div class="privacy-policy p-4">
    <h1 class="text-center">Políticas de Privacidad</h1>

    <section class="mb-4">
      <h2>1. Información que Recopilamos</h2>
      <p>Recopilamos información personal cuando interactúas con nuestra plataforma, ya sea al registrarte, realizar una reserva, publicar scooters o contactar con nuestro equipo. Los tipos de información que podemos recopilar incluyen:</p>
      <ul>
        <li><strong>Información de cuenta:</strong> Nombre, correo electrónico, contraseña y otros detalles que proporcionas al registrarte.</li>
        <li><strong>Información de uso:</strong> Datos sobre las reservas que realizas, scooters que publicas y el historial de actividades dentro de la plataforma.</li>
        <li><strong>Información financiera:</strong> Detalles de pago o tarjetas para la adquisición de planes o reservas.</li>
        <li><strong>Información técnica:</strong> Datos sobre el dispositivo que usas para acceder a MoviRent (tipo de navegador, dirección IP, sistema operativo).</li>
        <li><strong>Calificaciones y reseñas:</strong> Las evaluaciones que dejas sobre scooters y propietarios, así como los comentarios.</li>
      </ul>
    </section>

    <section class="mb-4">
      <h2>2. Uso de la Información</h2>
      <p>Utilizamos la información que recopilamos para:</p>
      <ul>
        <li><strong>Proveer y gestionar el servicio:</strong> Facilitar el alquiler de scooters, permitir la publicación de scooters por parte de los owners, gestionar reservas y calificaciones.</li>
        <li><strong>Mejorar nuestra plataforma:</strong> Analizar el comportamiento de los usuarios para optimizar la experiencia, solucionar problemas y realizar mejoras.</li>
        <li><strong>Comunicación:</strong> Enviarte notificaciones importantes relacionadas con tu cuenta, reservas, actualizaciones de servicio o marketing (si has optado por recibirlo).</li>
        <li><strong>Cumplimiento legal:</strong> Cumplir con obligaciones legales, responder a solicitudes gubernamentales o proteger los derechos de los usuarios y de MoviRent.</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PrivacyPolicy'
}
</script>

<style scoped>
.privacy-policy {
  background-color: white;
  color: black;
  font-family: 'Open Sans', sans-serif;
}
h1, h2 {
  color: #333;
}
p, ul {
  line-height: 1.6;
}
ul {
  list-style-type: disc;
  padding-left: 20px;
}
</style>