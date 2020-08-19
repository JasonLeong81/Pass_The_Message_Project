const send = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

send.addEventListener('click',sendM)

function sendM(){
    let content = messageIn.value;
    if(content ===''){
        alert('Please enter valid value.');
        return;
    }
    messageOut.innerHTML = content;    
    messageIn.value = '';
}