import axios from 'axios'

const api = axios.create({
  //baseURL: 'https://localhost:3333'
  baseURL: 'http://192.168.1.212:3333' // Usa-se o IP da maquina quando o servidor esta rodar localmente
})

export default api
