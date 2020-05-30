//dom query
const chatList = document.querySelector('.chat-list');
const rooms = document.querySelector('.chat-rooms');
const newChatForm = document.querySelector('.new-chat');
const newUsername = document.querySelector('.new-name');
const updateMsg = document.querySelector('.update-msg')

//send new message
newChatForm.addEventListener('submit', e => {
  e.preventDefault();

  const message = newChatForm.message.value.trim();
  chatroom.addChat(message)
    .then(() => newChatForm.reset())
    .catch(err => console.log(err));
})

//change username
newUsername.addEventListener('submit', e => {
  e.preventDefault();

  const newUser = newUsername.name.value.trim();
  chatroom.updateName(newUser);

  newUsername.reset()

  //show update message
  updateMsg.innerHTML = `Name was updated to <span style="font-weight:bold">${newUser}<span>`;
  setTimeout(() => updateMsg.innerText = "", 3000);
})


//handle change room
rooms.addEventListener('click', event => {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  chatUI.clear();

  const room = event.target.id;
  chatroom.updateRoom(room);
  chatroom.getChats(data => chatUI.render(data));
})


//class instances
const username = localStorage.username
  ? localStorage.getItem('username')
  : "unknown";
let chatroom = new Chatroom("general", username);
chatroom.getChats(data => chatUI.render(data));

const chatUI = new ChatUI(chatList);