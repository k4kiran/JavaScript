
//Function to get time elements

function updateTime(){
  var timeNow = new Date();
  console.log(timeNow);
  var dateNow = timeNow.getDate();
  var monthNow = timeNow.getMonth();
  var yearNow = timeNow.getFullYear();
  
  //conversion of hours
  if( dateNow > 12 )
  {
    dateNow = dateNow - 12;
  }
  console.log(dateNow +" "+monthNow+" "+yearNow);
  var hourNow = timeNow.getHours();
  var minuteNow = timeNow.getMinutes();
  var secondsNow = timeNow.getSeconds();
  var timeFull = hourNow + ":" + minuteNow + ":" + secondsNow ;
  console.log(timeFull);
  $("#clocktime").html(timeFull);
}

//calling clock functions on buttons
$(document).ready(function()
{
  $("#timestart").click(function(){
  var timevalue = setInterval('updateTime()',1000);
  
  $("#timestop").click(function(){
    clearInterval(timevalue);
    });
  });

});

