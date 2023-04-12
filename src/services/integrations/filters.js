// Função que faz a requisição GET e recebe um JSON
import {BASE_URL} from "../../lib/_base_url";

export async function getRequest(search) {
    const url = `${BASE_URL}veterinary?userName=${search}`
    return fetch(url)
    .then(response => response.json())
    .catch(error => console.error(error));
  }
  
  // Exemplo de uso da função