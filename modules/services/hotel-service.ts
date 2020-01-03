import axios from 'axios';

const urlApi = 'http://localhost:4000/'

//Obtener lista de hoteles
async function getAll() {
  // return await axios.get(`https://jsonplaceholder.typicode.com/todos/1`)
  return await axios.get(`${urlApi}/hotel`)
    .then((response) => {
      return response.data
    });
}

//Obtener hotel por id
async function getById(id: string) {
  return await axios.get(`${urlApi}/hotel/${id}`)
    .then((response) => {
      return response.data
    });
}

export const HotelService = {
  getAll,
  getById
}
