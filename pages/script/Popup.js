class Popup {
  constructor(crosses, container) {
    this.crosses = crosses;
    this.container = container;

    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
    this.setEventListeners = this.setEventListeners.bind(this)
    this.setEventListeners()
  }

  open(event) {
    const name = event.target.getAttribute('data-modal');
    this
      .container.querySelector(`.popup[data-modal=${name}]`)
      .classList.add('popup_is-opened')
  }

  close() {
    this
      .container
      .querySelector('.popup_is-opened')
      .classList
      .remove('popup_is-opened');
  }

  setEventListeners() {
    this.crosses.forEach(item => {
      item.addEventListener('click', this.close)
    })
  }

}
