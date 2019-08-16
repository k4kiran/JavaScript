function validateForm()
{
  //validating name
  var uname = document.getElementById("inputname1").value;
  console.log("printing" + uname );
  
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
  //validating first name
  var namefirst = document.getElementById("inputname1").value;
  console.log("my first name is " + namefirst);
  var fnameformat = /^[A-Za-z]+$/ 
  if(namefirst.match(fnameformat)){
    console.log("first name matched");
  }
  else{
    alert("first name not matched");
  }

  //validating last name
  var namelast = document.getElementById("inputname2").value;
  console.log("my last name is " + namefirst);
  var fnameformat = /^[A-Za-z]+$/ 
  if(namefirst.match(fnameformat)){
    console.log("last name matched");
  }
  else{
    alert("last name not matched");
  }
}