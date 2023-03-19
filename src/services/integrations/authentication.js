const _BASE_URL = 'http://localhost:3333/'
export const getAllUsers = async () => {
    const url = `${_BASE_URL}user/all`
    const response = await fetch(url)
    return await response.json()
}

export const login = async (loginInfos) => {
    if (loginInfos) {
        const url = `${_BASE_URL}signup`
        return await fetch(url, {
            method: 'POST',
            body: loginInfos
        })
    } else return null
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
