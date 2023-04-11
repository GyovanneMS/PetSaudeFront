import {BASE_URL} from "../../lib/_base_url";

const token = localStorage.getItem('__user_JWT')

export async function searchCity() {
    const url = `${BASE_URL}user/all`
    const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`

        },
        body: JSON.stringify()
    })


    let resposta = await response.json()
    const arrayCity = []

    resposta.map(async (item) => {

        const nothing = []
        if(await item.isVet == true){
            arrayCity.push(await item)
        }  else {
            nothing.push(await item)
        }
     });


    return arrayCity
}