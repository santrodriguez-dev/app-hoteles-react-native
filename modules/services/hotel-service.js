import axios from 'axios';

const urlApi = 'http://localhost:4000/'

//Obtener lista de hoteles
async function getAll() {
  return await axios.get(`${urlApi}`)
    .then((response) => {
      return response.data
    });
}

export const HotelService = {
  getAll
}
