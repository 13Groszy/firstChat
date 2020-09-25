//dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const rooms = document.querySelector('.chat-rooms');

//add the new chat
newChatForm.addEventListener('submit', e=>{
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err));
});
//update name
newNameForm.addEventListener('submit', e =>{
    e.preventDefault();
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName)
        newNameForm.reset();
        alert(`Your name was succesfully changed to ${newName}`);

});

// update the chat room
rooms.addEventListener('click', e =>{
    if (e.target.tagName === 'BUTTON'){
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => chatUI.render(chat));
    }
});

//check local storage for a name
const username = localStorage.username ? localStorage.username : 'guest';


// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', username);

// get chats and render
    chatroom.getChats(data => {chatUI.render(data);});