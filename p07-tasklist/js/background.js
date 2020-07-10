chrome.runtime.onInstalled.addListener(function(){

    let initConfig = {
        'extension_background': '#F71DF0',
        'list_task_show'      : 'all'
    }

    chrome.storage.sync.set({
        config: initConfig
    });
});

chrome.storage.onChanged.addListener((changes, namespace)=> {
    if(changes.hasOwnProperty('tasks') && changes.tasks.newValue.length >= 0) {
        chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
        chrome.browserAction.setBadgeText ( { "text": changes.tasks.newValue.length + "" } );
    }
});