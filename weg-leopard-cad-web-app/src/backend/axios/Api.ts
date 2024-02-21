import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001', // json-server port
  timeout: 5000, 
  headers: {
    'Content-Type': 'application/json',
    //TODO: Outros cabeçalhos personalizados, se necessário
  },
});

export default axiosInstance;
