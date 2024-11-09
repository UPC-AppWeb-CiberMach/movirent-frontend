import { createI18n } from 'vue-i18n';

const messages = {
    es: {
        scooterCard: {
            btnDetalle: 'Ver Detalle'
        },
        scooterAdd: {
            title: 'Agregar Reseña',
            recuerda: 'Recuerda siempre ser respetuoso con los comentarios y opiniones',
            puntuacion: 'Puntuación:',
            comentario: 'Comentario:',
            btnEnviar: 'Enviar',
            btnCancelar: 'Cancelar'
        },
        paymentView: {
            title: 'Medio de pago',
            recuerda: 'Recuerda poner los datos reales o el pago será denegado',
            numTarjeta: 'Número de tarjeta válido es requerido',
            fechaExp: 'Fecha de vencimiento válida es requerida',
            cvv: 'CVV válido es requerido',
            advertencia: 'No habrá devolución una vez realizado',
            btnPagar: 'Pagar',
            btnCancelar: 'Cancelar'
        },
        paymentScooter: {
            title: 'Pago de Alquiler de Scooter',
            subtitle: 'Recuerda poner los datos reales o el pago será denegado',
            numTarjeta: 'Número de tarjeta válido es requerido',
            fechaExp: 'Fecha de vencimiento válida es requerida',
            cvv: 'CVV válido es requerido',
            advertencia: 'No habrá devolución una vez realizado',
            btnPagar: 'Pagar',
            btnCancelar: 'Cancelar'
        },
        userview: {
            title: '¿Tus datos son incorrectos o deseas actualizarlos? ¡Edítalos!',
            info: 'Recuerda siempre tener tus datos correctos y actualizados para así generar más confianza entre los usuarios,',
            name: 'Nombres Completos',
            contrasena: 'Contraseña',
            celular: 'Celular',
            email: 'Correo Electrónico',
            dni: 'DNI',
            URL: 'URL de la imagen',
            dirrecion: 'Dirección',

            confMessage: 'Puedes cambiarla cuantas veces quieras',
            confDelete: 'Tus datos no podrán ser recuperados',

            btnHistorial: 'Ver Historial',
            btnGuardar: 'Guardar',
            btnBorrar: 'Borrar',
            btnEliminar: 'Eliminar',
            btnCancelar: 'Cancelar',
            btnEditar: 'Editar',
        },
        movirent: {
            name: 'Nombre del equipo',
            address: 'Dirección',
            marca: 'Marca de Scooter',
            phone: 'Teléfono',
            model: 'Modelo de Scooter',
            imgUrl: 'URL de la imagen',
            price: 'Costo de alquiler',
            tituloResultado: 'Sus Scooter registrados',
            titleGeneral: 'Registro de Scooter',
            nuevoScooter: 'Registrar nuevo Scooter',
            titleCard: 'Mis Scooter',
            redesSociales: 'Nuestras redes sociales',
            soporte: 'Soporte',
            names: 'Quienes Somos',
            question: 'Preguntas Frecuentes',
            policy: 'Políticas de Privacidad',
            description: '© 2024 -Todos los derechos reservados - MoviRent',
            titleQuienesSomos: '¿Quiénes somos?',
            welcome: '¡Bienvenido a MoviRent!'
        },
        buttons: {
            profile: 'Perfil',
            subscription: 'Mi Suscripción',
            reviews: 'Reseñas',
            reservations: 'Reservas',
            scooter: 'Scooter',
            history: 'Historial',
            logout: 'Cerrar Sesión'
        },
        titles: {
            title: '¿Tus datos son incorrectos o deseas actualizarlos? ¡Edítalos!'
        }
    },
    en: {
        userview: {
            "title": "Are your details incorrect or do you want to update them? Edit them!",
            "info": "Always remember to keep your information correct and updated to generate more trust among users.",
            "name": "Full Name",
            "contrasena": "Password",
            "celular": "Mobile",
            "email": "Email Address",
            "dni": "ID Number",
            "URL": "Image URL",
            "direccion": "Address",

            "confMessage": "You can change it as many times as you want.",
            "confDelete": "Your data cannot be recovered.",

            "btnHistorial": "View History",
            "btnGuardar": "Save",
            "btnBorrar": "Delete",
            "btnEliminar": "Remove",
            "btnCancelar": "Cancel",
            "btnEditar": "Edit"
        },
        movirent: {
            name: 'Team Name',
            address: 'Address',
            marca: 'Scooter Brand',
            phone: 'Phone',
            model: 'Scooter Model',
            imgUrl: 'Image URL',
            price: 'Rental Cost',
            tituloResultado: 'Your Registered Scooters',
            titleGeneral: 'Scooter Registration',
            nuevoScooter: 'Register New Scooter',
            titleCard: 'My Scooters',
            redesSociales: 'Our Social Networks',
            soporte: 'Support'
        },
        buttons: {
            profile: 'Profile',
            subscription: 'My Subscription',
            reviews: 'Reviews',
            reservations: 'Reservations',
            scooter: 'Scooter',
            history: 'History',
            logout: 'Logout'
        },
        titles: {
            title: 'Is your information incorrect or do you want to update it? Edit them!'
        }
    }
};

const i18n = createI18n({
    locale: 'es',
    fallbackLocale: 'es',
    messages
});

export default i18n;