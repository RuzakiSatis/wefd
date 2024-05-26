$(document).ready(function(){
  $('.main_slide_one').slick({
    arrow:true,
    dots:true,
		infinite: true,
		slidesToScroll: 1,
		slidesToShow:1,
		autoplay:true,
		speed:2000,
		autoplaySpeed:3000,
  });
});

function formatTime(time) {
	return time < 10 ? "0" + time : time;
}

let seconds = (6 * 3600) + (55 * 60);

function updateTimer() {
	if (seconds > 0) {
		seconds--;
	} else {
		seconds = 0;
		clearInterval(timerInterval);
	}
	let hours = Math.floor(seconds / 3600);
	let minutes = Math.floor((seconds % 3600) / 60);
	let secs = seconds % 60;

	document.getElementById("timer").textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(secs);
}

let timerInterval = setInterval(updateTimer, 1000);