import api from '../lib/axios'


export default {
    obtenerClientes() {
        return api.get('/clientes')
    },

    agregarCliente(cliente) {
        return api.post('/clientes', cliente)
    },

    obtenerCliente(id) {
        return api.get(`/clientes/${id}`)
    },

    editarCliente(id, cliente) {
        return api.put(`/clientes/${id}`, cliente)
    },

    borrarCliente(id) {
        return api.delete(`/clientes/${id}`)
    }
}