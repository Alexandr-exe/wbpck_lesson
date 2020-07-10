export class Api {
  constructor() {
  }

  getUserInfo() {
      const API_URL = NODE_ENV === 'production' ? 'https://praktikum.tk/cohort11/users/me' : 'http://praktikum.tk/cohort11/users/me';

      return fetch(API_URL, {
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
      const API_URL = NODE_ENV === 'production' ? 'https://praktikum.tk/cohort11/users/me' : 'http://praktikum.tk/cohort11/users/me';

      return fetch( API_URL, {
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
      const API_URL = NODE_ENV === 'production' ? 'https://praktikum.tk/cohort11/cards' : 'http://praktikum.tk/cohort11/cards'

      return  fetch( API_URL, {
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
