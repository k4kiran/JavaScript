function getGenderDetails()
{
  var newgender=document.getElementsByName('optgender');
  for(i=0;i<newgender.length;i++)
  {
    if(newgender[i].checked)
    {
      return newgender[i].value;
    }
  }
}

function displayDetails(){
   document.getElementById("formsection").style.display = "none";
  document.getElementById('detailsemail').innerHTML = document.getElementById("inputemail").value;
  document.getElementById('detailsname').innerHTML = document.getElementById("inputname1").value + " " + document.getElementById("inputname2").value;
  var gendervalue = getGenderDetails();
  document.getElementById('detailsradio').innerHTML = gendervalue;
  document.getElementById('detailsphone2').innerHTML = document.getElementById("inputphone1").value + " " +document.getElementById("inputphone2").value;
  document.getElementById('detailsstreet').innerHTML = document.getElementById("inputstreet").value;
  document.getElementById('detailscity').innerHTML = document.getElementById("inputcity").value;
  document.getElementById('detailsstate').innerHTML = document.getElementById("inputstate").value;
  document.getElementById('detailscode').innerHTML = document.getElementById("inputcode").value;
  document.getElementById("showdetails").style.display = "block";
}