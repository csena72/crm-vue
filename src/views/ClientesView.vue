<script setup>
import { onMounted, ref, computed } from 'vue'
import ClienteService from '../services/ClienteService'
import RouterLink from '../components/UI/RouterLink.vue'
import Heading from '../components/UI/Heading.vue'
import Cliente from '../components/Cliente.vue'



const clientes = ref([])

onMounted(() => {
    ClienteService.obtenerClientes()
        .then(({data}) => clientes.value = data)
        .catch(error => console.log('Hubo un error', error))
})

defineProps({
    title: {
        type: String
    }
})

const existenClientes = computed(() => clientes.value.length > 0)

const actualizarEstado = (id, estado) => {
    const nuevoEstado = estado === 1 ? 0 : 1
    ClienteService.editarCliente(id, { estado: nuevoEstado })
        .then(() => {
            const index = clientes.value.findIndex(cliente => cliente.id === id)
            clientes.value[index].estado = nuevoEstado
        })
        .catch(error => console.log('Hubo un error', error))
}

const eliminarCliente = (id) => {
    ClienteService.borrarCliente(id)
        .then(() => {
            const index = clientes.value.findIndex(cliente => cliente.id === id)
            clientes.value.splice(index, 1)
        })
        .catch(error => console.log('Hubo un error', error))
}

</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="agregar-cliente">{{ title }}</RouterLink>
        </div>

        <Heading>Listado de Clientes</Heading>

        <div v-if="existenClientes" class="flow-root mx-auto  mt-10 p-5 bg-white shadow">
            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table class="min-w-full divide-y divide-gray-300">
                        <thead>
                        <tr>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Nombre</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Empresa</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Estado</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Acciones</th>
                        </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">

                            <Cliente 
                                v-for="cliente in clientes" 
                                :key="cliente.id" 
                                :cliente="cliente"
                                @actualizar-estado="actualizarEstado"
                                @eliminar-cliente="eliminarCliente"
                            />

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div v-else class="mx-auto mt-10 bg-white shadow rounded p-6 max-w-6xl">
            <p class="text-center my-10">No hay clientes</p>
        </div>

    </div>
</template>


