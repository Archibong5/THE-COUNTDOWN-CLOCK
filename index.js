const buttons = document.querySelectorAll('[data-time]');
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
let countdown;
function timer(seconds){
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if(secondsLeft <= 0){
      clearInterval(countdown);
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}


function displayTimeLeft(seconds){
  const minutes = Math.floor(seconds /  60);
  const remainderSeconds = seconds % 60;

  const displayCountdown = `${minutes} : ${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  timerDisplay.textContent = displayCountdown;
  document.title = displayCountdown;

}

function displayEndTime(timeStamp){
  const end = new Date(timeStamp);
  const mins = end.getMinutes();
  const hours = end.getHours();
  const adjustedHour = hours > 12 ? hours - 12 : hours;
  const adjustedMinutes = mins < 10 ? '0' : '';
  endTime.textContent = `I'LL SEE YOU GEES IN ${adjustedHour} : ${adjustedMinutes}${mins}`;
  console.log(hours,mins);
}

function startTimer(){
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}



buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e){
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60)
})
