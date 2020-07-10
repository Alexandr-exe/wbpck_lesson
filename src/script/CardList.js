export class CardList {
  constructor(create, container, spinner) {
    this.create = create
    this.container = container;
    this.spinner = spinner

    this.addCard = this.addCard.bind(this)
    this.render = this.render.bind(this)
  }

  addCard(name, link) {
    this.container.appendChild(this.create(name, link));
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this.spinner.classList.add('spinner_visible')
      this.container.classList.add('root__section_hidden')
    } else {
      this.spinner.classList.remove('spinner_visible')
      this.container.classList.remove('root__section_hidden')
    }
  }

  render(cards) {
    for (let i of cards) {
      this.addCard(i.name, i.link)
    }
  }
}
