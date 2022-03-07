const name = document.querySelector(".name");
function akanName() {
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var myDob = document.getElementById("#Day");
  var myYob = document.getElementById("#Year");
  var myGender = document.getElementById("#Gender");
  var akanName = maleName[finDay];

if (myGender === "Male") {
  alert("Your Akan name is " + maleNames[finDay] + ".");
} else if (myGender === "Female") {
  alert("Your Akan name is " + femaleNames[finDay] + ".")
} else alert("Sorry! Please, try again.")
}
