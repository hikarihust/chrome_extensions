function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

$(document ).ready(function() {
    // removeElementsByClass("article-summary");
    $('a').css("font-size", "20px");
    $('a').css("color", "red");
});
