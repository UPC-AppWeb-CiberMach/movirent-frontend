// Importaciones y lógica del componente
import http from '@/movirent/shared/services/http-common.js'
import Name from '@/movirent/vehicule-management/components/movirent-name-scooter.component.vue'
import Marca from '@/movirent/vehicule-management/components/movirent-brand-scooter.component.vue'
import Model from '@/movirent/vehicule-management/components/movirent-model-scooter.component.vue'
import Price from '@/movirent/vehicule-management/components/movirent-price-scooter.component.vue'
import Address from '@/movirent/vehicule-management/components/movirent-address-scooter.component.vue'
import Contact from '@/movirent/vehicule-management/components/movirent-contact.component.vue'
import Photo from '@/movirent/vehicule-management/components/movirent-photo.component.vue'

export default {
    components: { Name, Marca, Model, Price, Address, Contact, Photo },
    data() {
        return {
            operation: {
                name: '',
                type: '',
                model: '',
                price: null,
                address: '',
                phone: '',
                imageUrl: ''
            },
            operations: [],
            message: '',
            isError: false,
            isEditing: false,
            editingId: null
        }
    },
    methods: {
        async fetchOperations() {
            try {
                const response = await http.get('/operations')
                this.operations = response.data
            } catch (error) {
                console.error('Error fetching operations:', error)
                this.message = 'Failed to load operations'
                this.isError = true;
            }
        },

        async createOperation() {
            if (!this.operation.name || !this.operation.type || !this.operation.model || this.operation.price === null || !this.operation.address || !this.operation.phone || !this.operation.imageUrl) {
                this.message = 'All fields are required';
                this.isError = true;
                console.error('All fields are required');
                return;
            }

            try {
                const response = await http.post('/operations', {
                    name: this.operation.name,
                    type: this.operation.type,
                    model: this.operation.model,
                    price: this.operation.price,
                    address: this.operation.address,
                    phone: this.operation.phone,
                    imageUrl: this.operation.imageUrl
                });

                console.log('Operation created:', response.data);
                this.message = 'Operation created successfully!';
                this.isError = false;
                await this.fetchOperations();
                this.resetForm();
            } catch (error) {
                console.error('Error creating operation:', error);
                this.message = 'Failed to create operation';
                this.isError = true;
            }
        },

        async editOperation(op) {
            // Actualiza las propiedades de operación con los nuevos nombres
            this.operation.name = op.name; // Cambiado de title a name
            this.operation.type = op.type;
            this.operation.model = op.model;
            this.operation.price = op.price;
            this.operation.address = op.address;
            this.operation.phone = op.phone;
            this.operation.imageUrl = op.imageUrl;

            this.isEditing = true;
            this.editingId = op.id;
        },

        async updateOperation() {
            if (!this.operation.name || !this.operation.type || !this.operation.model || this.operation.price === null || !this.operation.address || !this.operation.phone || !this.operation.imageUrl) {
                console.error('All fields are required');
                return;
            }

            try {
                const response = await http.put(`/operations/${this.editingId}`, {
                    name: this.operation.name, // Cambiado de title a name
                    type: this.operation.type,
                    model: this.operation.model,
                    price: this.operation.price,
                    address: this.operation.address,
                    phone: this.operation.phone,
                    imageUrl: this.operation.imageUrl
                });

                console.log('Operation updated:', response.data);
                this.message = 'Operation updated successfully!';
                this.isError = false;
                await this.fetchOperations();
                this.resetForm();

                // Resetear modo edición
                this.isEditing = false;
                this.editingId = null;

            } catch (error) {
                console.error('Error updating operation:', error);
                this.message = 'Failed to update operation';
                this.isError = true;
            }
        },

        async deleteOperation(id) {
            try {
                await http.delete(`/operations/${id}`);
                console.log('Operation deleted:', id);
                this.message = 'Operation deleted successfully!';
                await this.fetchOperations();
            } catch (error) {
                console.error('Error deleting operation:', error);
                this.message = 'Failed to delete operation';
                this.isError = true;
            }
        },

        resetForm() {
            // Reiniciar todos los campos del formulario
            Object.keys(this.operation).forEach(key => {
                if (key === 'price') {
                    return; // Reiniciar price a null
                }
                // Reiniciar otros campos a vacío
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
}