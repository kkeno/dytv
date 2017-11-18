
// DOM注入js
function injectJS(src) {
	var elem = document.createElement("script");
	elem.setAttribute("type","text/javascript");
	jsUrl = chrome.extension.getURL(src);
	elem.setAttribute("src", jsUrl);
	document.body.appendChild(elem);
}


// 发送一个windows提醒消息
function sendWindowsNotify(title, msg) {
	chrome.runtime.sendMessage(null, {
		func : "sendWindowsNotify",
		args : {
			title : title,
			msg : msg
		}
	});
}