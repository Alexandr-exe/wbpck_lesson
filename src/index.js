  import './style.css';
  import {Api} from "./script/Api";
  import {Card} from "./script/Card";
  import {CardList} from "./script/CardList";
  import {Popup} from "./script/Popup";
  import {UserInfo} from "./script/UserInfo";
  import {ImagePopup} from "./script/ImagePopup";
  import {FormValidator} from "./script/FormValidator";



  const root = document.querySelector('.root');
  const placesList = document.querySelector('.places-list');
  const spinner = document.querySelector('.spinner');
  const editButton = document.querySelector('.button[data-modal=edit]');
  const addButton = document.querySelector('.button[data-modal=card]');
  const crosses = document.querySelectorAll('.popup__close');
  const imgUrl = document.querySelector('.popup__image');
  const infoName = document.querySelector('.user-info__name');
  const infoJob = document.querySelector('.user-info__job');

  const add = document.forms.new;
  const edit = document.forms.edit;
  const { name, job } = edit.elements;

  function openImg(event) {
    const imagePopup = new ImagePopup(root, imgUrl, placesList)
    return imagePopup.open(event)
  }

  function card(name, link) {
    const card = new Card(openImg)
    card.create(name, link);
    card.setEventListeners()
    return card.element
  }

  const cardList = new CardList(card, placesList, spinner);
  const popup = new Popup(crosses, root);
  const userInfo = new UserInfo(name, job, infoName, infoJob);
  const editFormValidator = new FormValidator(edit);
  const addFormValidator = new FormValidator(add);
  const api = new Api()

  function apiSetUser() {
    api.getUserInfo()
      .then((res) => {
        const info = res
        userInfo.setUserInfo(info.name, info.about)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function apiUpdateInfo() {
    api.setUserInfo(name.value, job.value).then((res) => {
      userInfo.updateUserInfo(res.name, res.about)
      popup.close()
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function apirenderCards() {
    cardList.renderLoading(true)
    api.getCard()
      .then((array) => {
        cardList.render(array)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        cardList.renderLoading(false)
      })
  }

  function editSetButton(event) {
    const { submit } = edit.elements
    editFormValidator.setSubmitButton(submit, true)
    editFormValidator.resetError()
    popup.open(event)
  }

  function addSetButton(event) {
    let { submit } = add.elements
    addFormValidator.setSubmitButton(submit, false)
    addFormValidator.resetError()
    add.reset()
    popup.open(event)
  }

  function addCard(event) {
    event.preventDefault();
    const { name, link } = add.elements;
    cardList.addCard(name.value, link.value);
    add.reset();
    popup.close();
  }

  function updateUser(event) {
    event.preventDefault();
    apiUpdateInfo()
  }

  addButton.addEventListener('click', addSetButton);
  editButton.addEventListener('click', editSetButton);
  add.addEventListener('submit', addCard);
  edit.addEventListener('submit', updateUser);

  apiSetUser()
  apirenderCards()


/*
 Что понравилось:
 - Структура кода
 Можно лучше:
 - Вынести блок
 (res) => {
 if (res.ok) {
 return res.json()
 }
 return Promise.reject(`Ошибка: ${res.status}`);
 }
 return Promise.reject(`Ошибка: ${res.status}`)
 в отдельную функцию
 - Вынести опции запросов в отдельный объект с данными. Так, при инициализации класса API, можно ему передавать объект,
 в котором будут содержаться headers, domain.
 - Разобраться со способом построения класса API на async/await
 Полезные материалы:
 Статья про построение async/await API на английском https://dev.to/shoupn/javascript-fetch-api-and-using-asyncawait-47mp
 */
