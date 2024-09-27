
function initClock() {
  function updateTimestamp() {
    const utcPlus7Time = moment().utcOffset(7 * 60);
    const timestamp = utcPlus7Time.format('HH:mm:ss');
    
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const localtimestamp = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    
    function pad(number) {
      return (number < 10 ? '0' : '') + number;
    }
    
    document.getElementById('timestamp').innerHTML = `${timestamp} (my time) | ${localtimestamp}`;
  }
  
updateTimestamp();
setInterval(updateTimestamp, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
  if (typeof moment !== "undefined") {
    initClock();
  } else {
    setTimeout(initClock, 100);
  }

});

