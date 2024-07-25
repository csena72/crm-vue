<script setup>
import { FormKit } from '@formkit/vue'
import RouterLink from '../components/UI/RouterLink.vue'
import Heading from '../components/UI/Heading.vue'

defineProps({
    title: {
        type: String
    }
})

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
                        placeholder="Telefono: ej. 11 34567890"
                        validation="required"
                        validation-visibility="live"
                        :validation-messages="{ 
                            required: '* El teléfono es obligatorio', 
                            email: 'El teléfono debe ser un número válido'
                        }"
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