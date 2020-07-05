chrome.runtime.onMessage.addListener(getMessage);

function getMessage( message,  sender,  sendResponse) {
    if(message.task == "hightlight"){
        console.log(message.selectionText);
    }
}