<script setup>
import { onMounted, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import ClienteService from '../services/ClienteService'
import { FormKit } from '@formkit/vue'
import RouterLink from '../components/UI/RouterLink.vue'
import Heading from '../components/UI/Heading.vue'


const router = useRouter()
const route = useRoute()
const { id } = route.params

const formData = reactive({})

onMounted(() => {
    ClienteService.obtenerCliente(id)
        .then(({data}) => Object.assign(formData, data))
        .catch(error => console.log('Hubo un error', error))
})

defineProps({
    title: {
        type: String
    }
})

const handleSubmit = (data) => {
    ClienteService.editarCliente(id,data)
        .then(({data}) => {
            router.push({ name: 'inicio' })
        })
        .catch(error => console.log('Hubo un error', error))
}

</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="inicio">
                Volver
            </RouterLink>
        </div>
        <Heading>{{ title }}</Heading>

        <div class="mx-auto mt-10 bg-white shadow rounded p-6 max-w-6xl">
            <div class="mx-auto md:w-2/3 py-10 px-6">
                <FormKit
                    type="form"
                    submit-label="Guardar Cambios"
                    incomplete-message="Por favor llene todos los campos"
                    @submit="handleSubmit"
                    :value="formData"
                >

                    <FormKit
                        type="text"
                        label="Nombre"
                        name="nombre"
                        placeholder="Nombre del Cliente"
                        validation="required|length:3,20"
                        validation-visibility="live"
                        :validation-messages="{ 
                            required: '* El nombre es obligatorio', 
                            length: 'El nombre debe ser entre 3 y 20 caracteres'
                        }"
                        v-model="formData.nombre"
                    />

                    <FormKit
                        type="text"
                        label="Apellido"
                        name="apellido"
                        placeholder="Apellido del Cliente"
                        validation="required|length:3,20"
                        validation-visibility="live"
                        :validation-messages="{ 
                            required: '* El apellido es obligatorio', 
                            length: 'El apellido debe ser entre 3 y 20 caracteres'
                        }"
                        v-model="formData.apellido"
                    />
                    <FormKit
                        type="text"
                        label="Email"
                        name="email"
                        placeholder="Email del Cliente"
                        validation="required|email"
                        validation-visibility="live"
                        :validation-messages="{ 
                            required: '* El email es obligatorio', 
                            email: 'El email debe ser un email válido'
                        }"
                        v-model="formData.email"
                    />
                    <FormKit
                        type="text"
                        label="Teléfono"
                        name="telefono"
                        placeholder="Telefono: ej. 11 3456 7890"
                        validation="?matches:/^[0-9]{2} [0-9]{4} [0-9]{4}$/"
                        validation-visibility="live"
                        :validation-messages="{ 
                            matches: 'El formato no es válido'
                        }"
                        v-model="formData.telefono"
                    />
                    <FormKit
                        type="text"
                        label="Empresa"
                        name="empresa"
                        placeholder="Empresa del Cliente"
                        v-model="formData.empresa"
                    />
                    <FormKit
                        type="text"
                        label="Puesto"
                        name="puesto"
                        placeholder="Puesto del Cliente"
                        v-model="formData.puesto"
                    />

                </FormKit>
            </div>
        </div>
    </div>
</template>

<style>
    .formkit-wrapper {
        max-width: 100%!important;
    }
</style>