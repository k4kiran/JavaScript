//manage function starts here


function manageFunction()
{
  var response = "";
  response += validateFName();
  response += validateLName();
  response += validatePhNumber();
  response += validateCity();
  response += validateState();
  response += validateZipcode();
  
  console.log("you are here"+response);
  if(response!="")
  {
    return false;
  }
  displayDetails();
  return true;
}  

//validating first name
function validateFName()
{
  var namefirst = document.getElementById("inputname1").value;
  console.log("my first name is " + namefirst);
  var textformat = /^[A-Za-z]+$/ ;
  if(!namefirst.match(textformat))
  {
    document.getElementById("nameerror").style.display = "block";
    return false;
  }
  document.getElementById("nameerror").style.display = "none";
  return "";
}


//validating last name
function validateLName()
{
  var namelast = document.getElementById("inputname2").value;
  console.log("my last name is " + namelast);
  var textformat = /^[A-Za-z]+$/ ;
  if(!namelast.match(textformat))
  {
    document.getElementById("nameerror").style.display = "block";
    return false;
  }
  document.getElementById("nameerror").style.display = "none";
  return "";
}
//validating phone number
function validatePhNumber()
{
  var phnumber = document.getElementById("inputphone2").value;
  console.log("my number is " + phnumber);
  var phoneformat = /^\d{10}$/ ;
  if(!phnumber.match(phoneformat))
  {
    document.getElementById("phoneerror").style.display = "block";
    return false;
  }
  document.getElementById("phoneerror").style.display = "none";
  return "";
}

 //validating city
function validateCity()
{
  var city = document.getElementById("inputcity").value;
  console.log("my city is " + city);
  var textformat = /^[A-Za-z]+$/ ;
  if(!city.match(textformat))
  {
    document.getElementById("cityerror").style.display = "block";
    return false;
  }
  document.getElementById("cityerror").style.display = "none";
  return "";
}

//validating state
function validateState()
{
  var state = document.getElementById("inputstate").value;
  console.log("my state is " + state);
  var textformat = /^[A-Za-z]+$/ ;
  if(!state.match(textformat))
  {
    document.getElementById("stateerror").style.display = "block";
    return false;
  }
  document.getElementById("stateerror").style.display = "none";
  return "";
}
//validating zipcode
function validateZipcode()
{
  var zipcode = document.getElementById("inputcode").value;
  console.log("my zipcode is " + zipcode);
  var zipformat = /^\d{6}$/ ;
  if(!zipcode.match(zipformat))
  {
    document.getElementById("ziperror").style.display = "block";
    return false;
  }
  document.getElementById("ziperror").style.display = "none";
  return "";
}

//Display function starts here

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