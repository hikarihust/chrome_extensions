chrome.runtime.onMessage.addListener(getMessage);

function getMessage( message,  sender,  sendResponse) {
    if(message.task == "changeText"){
        $('h1,h2,h3,h4,h5,h6,span,a,p').html(message.val);
    }
}