// render chat templates to the DOM
// clear the list of chats when the room changes

class ChatUI {
    constructor(list){
        this.list = list;
    }
    clear(){
        this.list.innerHTML = ``;
    }
    render(data){
        const when = dateFns.distanceInWordsToNow(
            data.created_at.toDate()
        );
        const html = `
        <li>
            <span class="username">${data.username}</span>
            <span class="message">${data.message}</span>
            <div class="time">${when} ago</div>
        </li>   
        `;
        this.list.innerHTML += html;
    }
}