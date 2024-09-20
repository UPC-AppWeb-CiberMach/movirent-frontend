<template>
  <div class="faq-container">
    <Accordion>
      <AccordionTab v-for="(faq, index) in faqs" :key="index" :header="faq.question">
        <p>{{ faq.answer }}</p>
      </AccordionTab>
    </Accordion>
  </div>
</template>

<script>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

export default {
  name: 'FrequentlyQuestionsComponent',
  components: {
    Accordion,
    AccordionTab
  },
  data() {
    return {
      //luego cambiare las preguntas y añadiré muchos más
      faqs: [
        { question: '¿Cómo puedo registrarme en MoviRent?', answer: 'Puedes registrarte fácilmente en la plataforma ingresando tu nombre, correo electrónico y creando una contraseña.' },
        { question: '¿Puedo usar MoviRent sin tener un scooter?', answer: 'Sí, puedes utilizar la plataforma para alquilar scooters eléctricos como cliente. No es necesario que seas propietario de un scooter para disfrutar de nuestros servicios.' },
        { question: '¿Cómo puedo alquilar una scooter?', answer: 'Solo necesitas buscar el scooter que te interesa en nuestra plataforma, selecciona la fecha y hora de inicio y fin, y confirma la reserva. Una vez confirmada, recibirás todos los detalles para recoger el vehículo.' },
        { question: '¿Qué sucede si el scooter que reservamos no está disponible?', answer: 'Si el scooter no está disponible, te avisaremos inmediatamente y te recomendaremos otro vehículo disponible en la plataforma.' },
        { question: '¿Cómo puedo poner mi scooter en alquiler?', answer: 'Como propietario, solo necesitas registrarte en la plataforma, subir los detalles de tu scooter, agregar fotos y establecer la tarifa por hora o por día. También puedes definir las reglas de uso y la disponibilidad del vehículo.".' },
        { question: '¿Puedo editar los detalles de mi scooter después de haberlo publicado?', answer: 'Sí, puedes editar la información de tu scooter, cambiar las tarifas y actualizar la disponibilidad en cualquier momento.' },
        { question: '¿Cómo se calculan las tarifas de alquiler?', answer: 'Las tarifas dependen del tiempo de uso del scooter. Los propietarios pueden establecer tarifas por hora, día o semana, y el costo final dependerá de la duración de la reserva.' },
        { question: '¿Es posible calificar a un propietario o a un cliente después de un alquiler?', answer: 'Sí, ambos usuarios (propietarios y clientes) pueden dejar reseñas y calificaciones una vez finalizado el alquiler, lo que ayuda a la comunidad a conocer la reputación de cada usuario y scooter.' },
        { question: '¿Qué debo hacer si tengo un problema con mi scooter durante el alquiler?', answer: 'Si surge algún problema, puedes comunicarte con el propietario del scooter o con nuestro equipo de soporte, quienes te ayudarán a resolver cualquier inconveniente.' },
        { question: '¿Cómo contacto al servicio de atención al cliente?', answer: 'Puedes comunicarte con nuestro equipo de soporte a través de la sección "Contacto" en la plataforma o enviarnos un mensaje a nuestro correo electrónico de soporte.' }
      ]
    };
  }
};
</script>

<style scoped>
.faq-container {
  font-family: 'Open Sans', sans-serif;
  background-color: white;
  color: black;
  padding: 20px;
}

p {
  margin: 0;
  font-size: 1rem;
  color: black;
}

h1, h2, h3, h4 {
  color: black;
}

.accordion-header {
  font-weight: 600;
}
</style>