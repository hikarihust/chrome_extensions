chrome.runtime.onInstalled.addListener(function(){

    let initConfig = {
        'extension_background': '#F71DF0',
        'list_task_show'      : 'all'
    }

    chrome.storage.sync.set({
        config: initConfig
    });
});