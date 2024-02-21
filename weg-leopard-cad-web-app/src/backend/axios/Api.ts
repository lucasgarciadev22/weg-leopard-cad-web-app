import axios from "axios";

const axiosInstance = axios.create({
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    //TODO: Outros cabeçalhos personalizados, se necessário
  },
});

export default axiosInstance;
