import axios from "axios";

//BASE DA URL: https://api.themoviedb.org/3
//URL A API https://api.themoviedb.org/3/movie/now_playing?api_key=4f44254ad07d4d08665b54bf16e1ffa9&lagugage=pt-BR

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default api;
