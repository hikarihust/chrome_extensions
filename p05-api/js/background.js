chrome.runtime.onMessage.addListener(getMessage);

window.courseStr = '';
function getMessage( message,  sender,  sendResponse) {
    if(message.task == "findCourse"){
        window.courseStr = message.courseStr;
    }
}