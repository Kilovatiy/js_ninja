
class ChatUI {
  constructor(list) {
    this.list = list;
  }

  render(data) {
    //dateFns.format(data.created_at.toDate(), 'DD/MM/YYYY HH:mm:ss')
    const when = dateFns.distanceInWordsToNow(
      data.created_at.toDate(),
      { addSuffix: true });
    const html = `
      <li class="list-group-item">
        <span clas="username">${data.username}</span>
        <span clas="message">${data.message}</span>
        <div class="time">${when}</div>
      </li>
    `;
    this.list.innerHTML += html;
  }
  clear() {
    this.list.innerHTML = "";
  }
}