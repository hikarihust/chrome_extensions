chrome.runtime.onMessage.addListener(getMessage);

function getMessage( message,  sender,  sendResponse) {
    if(message.task == "hightlight"){
        console.log(message.selectionText);

        let htmlReplace = `<span style="
                        color:red; 
                        font-size:20px;
                        background-color:yellow;
                        font-weight:bold;
                    ">${message.selectionText}</span>`;
        // php
        $('p:contains("' + message.selectionText + '")').each(function() {
            let text = $(this).text();
            text     = text.replace(new RegExp(message.selectionText, 'g'), htmlReplace);
            $(this).html(text);
        });
    }
}