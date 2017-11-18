
function sendWindowsNotify(title, msg) {
    var notificationId, callback
    var options = {
        type : "basic",
        iconUrl : "icon.png",
        title : title,
        message : msg
    }

    chrome.notifications.create(notificationId, options, callback)
}



chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    switch (request.func) {
        case "sendWindowsNotify" :
            sendWindowsNotify(request.args.title, request.args.msg)
            break;
    }
});


// 屏蔽广告
chrome.webRequest.onBeforeRequest.addListener(function (details) {
    return { cancel: true };
}, {urls: ["*://pubads.g.doubleclick.net/*"]}, ["blocking"]);
