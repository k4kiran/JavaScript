function myPrime()
{
  var prime = " ";
  var newlimit = document.getElementById("limit").value;
  for(var i = 2; i <= newlimit; i++){
    var isPrime = 0;
    for(var j = 2; j <= i/2; j++){
        if(i % j == 0){
            isPrime = 1;
            break;
        }
    }
      
    if(isPrime==0 && newlimit!= 1)
        console.log(i);
        prime += i;
        prime += "</br>";   
}
document.getElementById("outputheading").innerHTML = "The prime numbers are</br>";
document.getElementById("output").innerHTML = prime;
}