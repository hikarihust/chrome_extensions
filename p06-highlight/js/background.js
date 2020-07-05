let contextMenuHighlight = {
    'id': 'contextMenuHighlight',
    'title': 'My Highlight',
    'contexts': ['selection']
}

chrome.contextMenus.create(contextMenuHighlight);

chrome.contextMenus.onClicked.addListener(function(info){
    if(info.menuItemId == "contextMenuHighlight" && info.selectionText){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                task: "hightlight", 
                selectionText: info.selectionText
            });
        });
    }
})
