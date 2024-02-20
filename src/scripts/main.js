AOS.init();

const dateEvent = new Date("Feb 24, 2024, 19:00:00");
const timeStampToEvent = dateEvent.getTime();

const countIsHours = setInterval(function () {
   const now = new Date();
   const timeStampNow = now.getTime();

   const distItEvent = timeStampToEvent - timeStampNow;

   const dayInMs = 1000 * 60 * 60 * 24;
   const hoursInMs = 1000 * 60 * 60;
   const minutesInMs = 1000 * 60;

   const daysAtEvent = Math.floor(distItEvent / dayInMs);
   const hoursAtEvent = Math.floor((distItEvent % dayInMs) / hoursInMs);
   const minutesAtEvent = Math.floor((distItEvent % hoursInMs) / minutesInMs);
   const secondsAtEvent = Math.floor((distItEvent % minutesInMs) / 1000);

   document.getElementById(
      "contador"
   ).innerHTML = `${daysAtEvent}d ${hoursAtEvent}h ${minutesAtEvent}m ${secondsAtEvent}s`;

   if (distItEvent < 0) {
      clearInterval(dateEvent);
      document.getElementById("contador").innerHTML = "O Evento expirou!";
   }
}, 1000);
