function randomValue(){
  const randomNumber = Math.floor(Math.random() * 16777215);
  const hexValue = "#" + randomNumber.toString(16);
  document.body.style.backgroundColor = hexValue;
  document.getElementById('color-code').innerText = hexValue;  
}

document.getElementById('btn').addEventListener("click", randomValue);
