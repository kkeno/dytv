

// 屏蔽广告
var blockList = [
	//"<all_urls>"
	"*://pubads.g.doubleclick.net/*"
]
chrome.webRequest.onBeforeRequest.addListener(function (details) {
	//console.log("onBeforeRequest", details)
    return { cancel: true }
}, {urls: blockList}, ["blocking"]);



// Debug 协议

var filterList = [
	//"<all_urls>"
	//"*://webim.tim.qq.com/*"
	//"*://pubads.g.doubleclick.net/*"
	//"*://*.douyucdn.cn/*"
	"*://webconf.douyucdn.cn/resource/common/activity/question/*"
]
chrome.webRequest.onBeforeRequest.addListener(function (details) {
	console.log("onBeforeRequest", details)
    return { cancel: false }
}, {urls: filterList}, ["blocking"]);


chrome.webRequest.onResponseStarted.addListener(function (details) {
	console.log("onResponseStarted", details)
}, {urls: filterList});





console.log("bg_dy.js load")