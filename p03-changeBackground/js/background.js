chrome.browserAction.onClicked.addListener(iconExtensionClicked);

function random_item(items)
{
    return items[Math.floor(Math.random()*items.length)];
}

function iconExtensionClicked(tab){
    let color = random_item(["#FF5733", "#3CFF33", "#E5F985", "#1D45F7", "#F71DF0"]);
    chrome.tabs.sendMessage(tab.id, {
        task: "changeBackgroundColor", // changeTextColor
        valueColor: color
    });
}