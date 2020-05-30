//adding new chat documents
//setting up a real-time listener to get new chats
//updating the username
//updating the room

class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = db.collection('chats');
    this.unsub;
  }

  async addChat(message) {
    //compose chat obj
    const now = new Date();
    const chat = {
      message: message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now)
    };
    //save
    const response = await this.chats.add(chat);
    console.log(response);
    return response;
  }

  getChats(callback) {
    this.unsub = this.chats
      .where('room', '==', this.room)
      .orderBy('created_at')
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === 'added') {
            callback(change.doc.data());
          }
        });
      });
  }

  updateName(username) {
    this.username = username;
    localStorage.setItem('username', username);
  }

  updateRoom(room) {
    this.room = room;
    console.log('room is updated');
    if (this.unsub) {
      this.unsub();
    }
  }
}
 
//  chatroom.addChat("Hello everyone")
//    .then(res => console.log(res))
//    .catch(err => console.log(err));
//chatroom.getChats(data => { console.log(data); });

// setTimeout(() => {
//   chatroom.updateName('YoYo');
//   chatroom.updateRoom('Programming');
//   chatroom.getChats(data => {
//     console.log(data);
//   });
//   chatroom.addChat(`hello from ${chatroom.username}`);
// }, 5000);

//chatroom.updateRoom("gaming");
