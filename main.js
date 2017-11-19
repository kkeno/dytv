

var questioncd = 22 * 60 *1e3
function startQuestionTimerLoop(){
	sendWindowsNotify("title", "QuestionTimer")
	setInterval(function(){
		sendWindowsNotify("title", "QuestionTimer")
	}, questioncd)
}

function initQuestionTimer() {
	var now = new Date()
	var month = now.getMonth()
	var day = now.getDate()
	var year = now.getFullYear()
	var midday = new Date(year, month, day, 12)
	var diff = now - midday
	if (diff < 0) {
		setTimeout(startQuestionTimerLoop, -diff)		
		console.log("QuestionTimer1", -diff)
	}else{
		var next = Math.ceil(diff/questioncd) * questioncd - diff
		setTimeout(startQuestionTimerLoop, next)
		console.log("QuestionTimer2", next)
	}
}


$(document).ready(function(){

	injectJS("idy_chat.js")
	injectJS("idy_gift.js")

	initQuestionTimer()


	console.log("test end")


})