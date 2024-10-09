// Importaciones y lógica del componente
import http from '@/movirent/shared/services/http-common.js';
import Name from '@/movirent/vehicule-management/components/movirent-name-scooter.component.vue';
import Marca from '@/movirent/vehicule-management/components/movirent-brand-scooter.component.vue';
import Model from '@/movirent/vehicule-management/components/movirent-model-scooter.component.vue';
import Price from '@/movirent/vehicule-management/components/movirent-price-scooter.component.vue';
import Address from '@/movirent/vehicule-management/components/movirent-address-scooter.component.vue';
import Contact from '@/movirent/vehicule-management/components/movirent-contact.component.vue';
import Photo from '@/movirent/vehicule-management/components/movirent-photo.component.vue';

export default {
    components: { Name, Marca, Model, Price, Address, Contact, Photo },

    data() {
        return {
            operation: {
                name: '',
                type: '',
                model: '',
                price: '',
                address: '',
                phone: '',
                imageUrl: ''
            },
            operations: [],
            message: '',
            isError: false,
            isEditing: false,
            editingId: null
        };
    },

    methods: {
        async fetchOperations() {
            try {
                const response = await http.get('/scooters');
                this.operations = response.data;
            } catch (error) {
                this.handleError('Failed to load operations', error);
            }
        },

        async createOperation() {
            if (this.validateOperation()) {
                try {
                    const response = await http.post('/scooters', this.operation);
                    this.handleSuccess('Operation created successfully!', response.data);
                    await this.fetchOperations();
                    this.resetForm();
                } catch (error) {
                    this.handleError('Failed to create operation', error);
                }
            }
        },

        async editOperation(op) {
            // Confirmación antes de editar
            if (confirm('¿Estás seguro de que deseas editar esta operación?')) {
                this.operation = { ...op }; // Cargar datos en el formulario
                this.isEditing = true;
                this.editingId = op.id;
            }
        },

        async updateOperation() {
            if (this.validateOperation()) {
                try {
                    const response = await http.put(`/scooters/${this.editingId}`, this.operation);
                    this.handleSuccess('Operation updated successfully!', response.data);
                    await this.fetchOperations();
                    this.resetForm();
                } catch (error) {
                    this.handleError('Failed to update operation', error);
                }
            }
        },

        async deleteOperation(id) {
            // Confirmación antes de eliminar
            if (confirm('¿Estás seguro de que deseas eliminar esta operación?')) {
                try {
                    await http.delete(`/scooters/${id}`);
                    this.message = 'Operation deleted successfully!';
                    await this.fetchOperations();
                } catch (error) {
                    this.handleError('Failed to delete operation', error);
                }
            }
        },

        validateOperation() {
            const { name, type, model, price, address, phone, imageUrl } = this.operation;
            if (!name || !type || !model || price === null || !address || !phone || !imageUrl) {
                this.message = 'All fields are required';
                this.isError = true;
                console.error('All fields are required');
                return false;
            }
            return true;
        },

        handleSuccess(message, data) {
            console.log(message, data);
            this.message = message;
            this.isError = false;
        },

        handleError(message, error) {
            console.error(message, error);
            this.message = message;
            this.isError = true;
        },

        resetForm() {
            Object.keys(this.operation).forEach(key => {
                this.operation[key] = '';
            });

            // Resetear modo edición al limpiar el formulario
            if (this.isEditing) {
                this.isEditing = false;
                this.editingId = null;
            }
        }
    },

    mounted() {
        // Carga las operaciones al montar el componente
        this.fetchOperations();
    }
};