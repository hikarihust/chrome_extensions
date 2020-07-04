$( document ).ready(function() {
    let $inputElement   = $('input[name="input-element"]');
    let $btnSave        = $('button[name="btn-save"]');
    
    $btnSave.click(()=> {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                task: "changeText", // changeTextColor
                val: $inputElement.val()
            });
        });
        window.close();
    });
});