chrome.browserAction.onClicked.addListener(iconExtensionClicked);

function iconExtensionClicked(tab){
    console.log(123);
    console.log(tab);
}