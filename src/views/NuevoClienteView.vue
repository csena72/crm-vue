<script setup>
import { useRouter } from 'vue-router'
import axios from 'axios'
import { FormKit } from '@formkit/vue'
import RouterLink from '../components/UI/RouterLink.vue'
import Heading from '../components/UI/Heading.vue'


const router = useRouter()

defineProps({
    title: {
        type: String
    }
})

const formData = {}

const handleSubmit = (data) => {
    axios
        .post('http://localhost:4000/clientes', data)
        .then(({data}) => {
            console.log(data)
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
                    submit-label="Agregar Cliente"
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
                    />
                    <FormKit
                        type="text"
                        label="Empresa"
                        name="empresa"
                        placeholder="Empresa del Cliente"
                    />
                    <FormKit
                        type="text"
                        label="Puesto"
                        name="puesto"
                        placeholder="Puesto del Cliente"
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