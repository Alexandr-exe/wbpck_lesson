export class Card {
  constructor(open) {
    this.open = open

    this.create = this.create.bind(this)
  }
  create(name, link) {
    const markCard = `
<div class="place-card">
<div class="place-card__image" style="background-image:url(${link})" data-modal="image">
  <button class="place-card__delete-icon"></button>
</div>
<div class="place-card__description">
  <h3 class="place-card__name">${name}</h3>
  <button class="place-card__like-icon"></button>
</div>
</div>
`;
    const fragment = document.createElement('div');
    fragment.insertAdjacentHTML('afterbegin', markCard);

    this.element = fragment.firstElementChild;
    return fragment.firstElementChild;
  }

  like(event) {
    event.target.classList.toggle('place-card__like-icon_liked')
  }

  remove(event) {
    event.target.closest('.place-card').remove();
  }

  setEventListeners() {
    this.element.querySelector('.place-card__like-icon').addEventListener('click', this.like);
    this.element.querySelector('.place-card__delete-icon').addEventListener('click', this.remove);
    this.element.querySelector('.place-card__image').addEventListener('click', this.open)
    /*
     Можно лучше:
     - Вынести элементы лайка, удаления, картинки в свойства класса
    */
  }
}
