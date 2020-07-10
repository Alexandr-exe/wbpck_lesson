export class UserInfo {
  constructor(name, job, nameText, about) {
    this.name = name;
    this.job = job;
    this.nameText = nameText;
    this.about = about;
  }

  setUserInfo(nameText, jobText,avatar) {
    this.name.value = nameText;
    this.job.value = jobText;
    this.nameText.textContent = nameText;
    this.about.textContent = jobText;
  }

  updateUserInfo(nameText, jobText) {
    this.nameText.textContent = nameText;
    this.about.textContent = jobText;
  }
}
