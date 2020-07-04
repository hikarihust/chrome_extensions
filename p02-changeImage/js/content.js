$(document ).ready(function() {
    let myImages = [
        "demo1.jpg",
        "demo2.jpg",
    ];

    $('img').each(function() {
        let index       = Math.floor(Math.random() * myImages.length);
        let imageSrc    = 'images/' + myImages[index];

        $(this).attr('src', chrome.extension.getURL(imageSrc));
    });
});