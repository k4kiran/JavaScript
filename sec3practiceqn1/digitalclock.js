function updateTime(){
  var timeNow = new Date();
  console.log(timeNow);
  var dateNow = timeNow.getDate();
  var monthNow = timeNow.getMonth();
  var yearNow = timeNow.getFullYear();
  var dateFull = dateNow +"/"+monthNow+"/"+yearNow;
  var hourNow = timeNow.getHours();
  var pmam = "AM";
  if(hourNow > 12)
  {
    pmam = "PM"
    hourNow = hourNow - 12;
  }
  var minuteNow = timeNow.getMinutes();
  var secondsNow = timeNow.getSeconds();
  var timeFull = hourNow + ":" + minuteNow + ":" + secondsNow ;
  console.log(timeFull);

  //printing all info
  $("#datehere").html(dateFull);
  $("#hour").html(hourNow);
  $("#minutes").html(minuteNow);
  $("#seconds").html(secondsNow);
  $("#ampm").html(pmam)
  $("#colon1").html(":");
  $("#colon2").html(":");

 // $("#clocktime").html(timeFull);
}

$(document).ready(function()
{
  $("#timestart").click(function(){
  var timevalue = setInterval('updateTime()',1000);
  $("#timestop").click(function(){
    clearInterval(timevalue);
    });
  });
});

