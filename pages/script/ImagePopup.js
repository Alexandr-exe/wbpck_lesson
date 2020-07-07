class ImagePopup {
  constructor(container, img, place) {
    this.container = container;
    this.img = img
    this.place = place

    this.getAttribute = this.getAttribute.bind(this)
    this.open = this.open.bind(this)
  }

  getAttribute(event) {
    const backgroundUrl = event.target.style.backgroundImage
    return backgroundUrl.substr(5, backgroundUrl.length - 7)
  }

  open(event) {
    if (event.target.style.backgroundImage !== '') {
      this.img.src = this.getAttribute(event)
      this.container.querySelector(".popup[data-modal='image']").classList.add('popup_is-opened')
    }
  }
}
