function displayDetails(){
 

  document.getElementById('detailsemail').innerHTML = document.getElementById("inputemail").value;

  document.getElementById('detailsname').innerHTML = document.getElementById("inputname1").value + document.getElementById("inputname2").value;

  document.getElementById('detailsradio').innerHTML = document.getElementById("radio1").value;

  document.getElementById('detailsphone1').innerHTML = document.getElementById("inputphone1").value;

  document.getElementById('detailsphone2').innerHTML = document.getElementById("inputphone2").value;

  document.getElementById('detailsstreet').innerHTML = document.getElementById("inputstreet").value;

  document.getElementById('detailscity').innerHTML = document.getElementById("inputcity").value;

  document.getElementById('detailsstate').innerHTML = document.getElementById("inputstate").value;

  document.getElementById('detailscode').innerHTML = document.getElementById("inputcode").value;
  
  document.getElementById("showdetails").style.display = "block";
}