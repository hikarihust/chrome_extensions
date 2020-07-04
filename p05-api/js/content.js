console.log("contentjs");

window.addEventListener('mouseup', function(){
    let selectedText = window.getSelection().toString().trim();
    selectedText     = selectedText.replace(/\s{2,}/g, '');
    console.log(selectedText);
});