export class Api {
  constructor() {
  }

  getUserInfo() {
    return fetch(process.env.NODE_ENV === 'production' ? 'https://praktikum.tk/cohort11/users/me' : 'http://praktikum.tk/cohort11/users/me', {
      headers: {
        authorization: '38f54b4a-ae5c-44e1-aa2c-ca646ca0ecc7'
      }
    })
      .then((res) => {
        if(res.ok){
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
  }

  setUserInfo(name, about, avatar) {
    return fetch( process.env.NODE_ENV === 'production' ? 'https://praktikum.tk/cohort11/users/me' : 'http://praktikum.tk/cohort11/users/me', {
      method: 'PATCH',
      headers: {
        authorization: '38f54b4a-ae5c-44e1-aa2c-ca646ca0ecc7',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: about,
        avatar: avatar,
      })
    })
      .then((res) => {
        if(res.ok){
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
  }

  getCard() {
  return  fetch(process.env.NODE_ENV === 'production' ? 'https://praktikum.tk/cohort11/cards' : 'http://praktikum.tk/cohort11/cards', {
      headers: {
        authorization: '38f54b4a-ae5c-44e1-aa2c-ca646ca0ecc7'
      }
    })
      .then((res) => {
        if(res.ok){
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })

  }
}
