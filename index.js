function drink() {
  let x = document.getElementById("ageinput").value;
  if (x < 18) {
    document.getElementById("ageoutput").innerHTML = "Non puoi bere 🤐";
  } else if (x >= 18) {
    document.getElementById("ageoutput").innerHTML = "Puoi bere!🍻";
  } else {
    document.getElementById("ageoutput").innerHTML = "Dai, sii serio";
  }
}
