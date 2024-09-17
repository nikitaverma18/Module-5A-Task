function feelingunhappy() {
 var feelings = document.getElementById("emotion");
  feelings.textContent = "happy";
  feelings.style.fontSize = "30px"
  feelings.style.borderRadius = "10px"
  feelings.style.backgroundColor = "blue"

  var emoji = document.getElementById("emoji");
  emoji.src = "happyEmoji.png";
  emoji.style.height = "30%";
  emoji.style.width = "30%";
}