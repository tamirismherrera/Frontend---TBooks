import axios from 'axios'; // importando a biblioteca

const api = axios.create({ // criando uma variavel e atribuindo a ela a estrutura base da api  
    baseURL: 'http://localhost:8088',
})

export default api;