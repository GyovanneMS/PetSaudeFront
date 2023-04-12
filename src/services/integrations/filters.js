// Função que faz a requisição GET e recebe um JSON
export async function getRequest(url) {
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        return json;
      })
      .catch(error => console.error(error));
  }
  
  // Exemplo de uso da função
  getRequest('http://localhost:8080/veterinary?userName=D');