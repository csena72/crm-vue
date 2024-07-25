<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    cliente: {
        type: Object,
        required: true
    }
})

const nombreCliente = computed(() => `${props.cliente.nombre} ${props.cliente.apellido}`)

const estadoCliente = computed(() => props.cliente.estado === 1 ? 'Activo' : 'Inactivo')

</script>

<template>
    <tr>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{ nombreCliente }}</p>
            <p class="text-gray-500">{{ cliente.email }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="text-gray-900 font-bold">{{ cliente.empresa }}</p>
            <p class="text-gray-600">{{ cliente.puesto }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm">
            <button
                class="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800"
                :class="[{ 'bg-green-200': cliente.estado === 1 }, { 'bg-red-200': cliente.estado === 0 }]"
            >
                {{ estadoCliente }}
            </button>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
            <RouterLink
                :to="{ name: 'editar-cliente', params: { id: cliente.id } }"
                class="text-indigo-600 hover:text-indigo-900 mr-5"
            >Editar</RouterLink>
            <button
                class="text-red-600 hover:text-red-900"
            >Eliminar</button>
        </td>
    </tr>
</template>


