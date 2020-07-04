console.log("contentjs");

window.addEventListener('mouseup', function(){
    let selectedText = window.getSelection().toString().trim();
    selectedText     = selectedText.replace(/\s{2,}/g, '');
    if(selectedText.length > 0) {
        chrome.runtime.sendMessage({
            task: "findCourse", // changeTextColor
            val: selectedText
        });
    }
});