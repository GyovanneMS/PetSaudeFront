const _BASE_URL = 'http://localhost:8080/'
export const getAllUsers = async () => {
    const url = `${_BASE_URL}user/all`
    const response = await fetch(url)
    return await response.json()
}

export const login = async (loginInfos) => {
    const url = `${_BASE_URL}signup`
    const response = await fetch('http://localhost:8080/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: loginInfos.email, password: loginInfos.password})
    })
    return await response.json()
}

export const signup = async (token) => {
    const url = `${_BASE_URL}auth`
    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return await response.json()
}
