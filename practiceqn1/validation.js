function validateForm()
{
  //validating first name
  var namefirst = document.getElementById("inputname1").value;
  console.log("my first name is " + namefirst);
  var textformat = /^[A-Za-z]+$/ 
  if(namefirst.match(textformat)){
    console.log("first name matched");
  }
  else{
    alert("first name not matched");
  }

  //validating last name
  var namelast = document.getElementById("inputname2").value;
  console.log("my last name is " + namefirst);
  var tetformat = /^[A-Za-z]+$/ 
  if(namefirst.match(textformat)){
    console.log("last name matched");
  }
  else{
    alert("last name not matched");
  }

  //validating phone number
  var phnumber = document.getElementById("inputphone2").value;
  console.log("my number is " + phnumber);
  var phoneformat = /^\d{10}$/
  if(phnumber.match(phoneformat)){
    console.log("number matched");
  }
  else{
    alert("number not matched");
  }

  //validating city
  var city = document.getElementById("inputcity").value;
  console.log("my last name is " + city);
  var textformat = /^[A-Za-z]+$/ 
  if(city.match(textformat)){
    console.log("city  matched");
  }
  else{
    alert("city not matched");
  }

  //validating state
  var state = document.getElementById("inputstate").value;
  console.log("my state is " + state);
  var textformat = /^[A-Za-z]+$/ 
  if(state.match(textformat)){
    console.log("state  matched");
  }
  else{
    alert("state not matched");
  }

  //validating zip code
  var zipcode = document.getElementById("inputcode").value;
  console.log("my zipcode is " + zipcode);
  var zipformat = /^\d{6}$/ 
  if(zipcode.match(zipformat)){
    console.log("zipcode matched");
  }
  else{
    alert(" zipcode not matched");
  }
}