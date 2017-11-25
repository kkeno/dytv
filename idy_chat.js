

// 屏蔽聊天框
function diableChatCont() {
    var q = $("#js-chat-cont")
    var e = q.find(".chat-cont-wrap .c-list").get(0)
    var t = document.createElement("div")
    t.style.height = "200px"
    t.style.padding = "15px"
    t.style.marginTop = "120px"
    t.textContent = "聊天框已被屏蔽"
    var o = e.parentNode
    o.insertBefore(t, e)
    o.removeChild(e)
}
//diableChatCont()


function recChatMsg(callback) {
    define(["shark/observer","shark/util/flash/data/1.0"], function (o,n) {
    	o.on("mod.chat.msg.msg", function (e) {
            console.log("recChatMsg", e);
        })
        callback && callback()
    })
}


//sendChat
var chatSender = {}
chatSender.$target = $("#js-send-msg")
chatSender.$content = chatSender.$target.find('[data-type="cont"]')
chatSender.$send = chatSender.$target.find('[data-type="send"]')
function sendChatMsg(msg) {
	define(["shark/observer"], function (o) {
		if (chatSender.$send.hasClass("b-btn-gray")) {
			o.trigger("mod.chat.msg.msg", "SendBtn还没准备好")
			return
		}
		chatSender.$content.val(msg)
		chatSender.$send.click()
	})
}

function recQuestion() {
	define(["douyu/com/exjsonp"], function (e) {
	
	
	})
}
recQuestion()

