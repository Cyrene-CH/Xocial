const points = document.querySelectorAll(".point div");

function reset() {
  points.forEach((p) => {
    p.className = "";
  });
}

points.forEach((p) => {
  p.addEventListener("click", function () {
    reset();
    p.className = "active";
  });
});

document.getElementById("one").addEventListener("click", function () {
  document.querySelector(".featurepage .title").innerHTML = "LIVE CHAT SPACE";
  document.querySelector(".featurepage .content").innerHTML =
    "Feeling socially anxious? Things have changed now. Put up lines and Chat with strangers around you.";
  document.getElementById("myvideo").src = "jh.mp4";
});

document.getElementById("zero").addEventListener("click", function () {
  document.querySelector(".featurepage .title").innerHTML =
    "SEEING IS BELIEVING";
  document.querySelector(".featurepage .content").innerHTML =
    "The Internet world is now physically in front of your eyes and under your control. Interact with the world in whatever way you like.";
  document.getElementById("myvideo").src = "bmm.mp4";
});

document.getElementById("two").addEventListener("click", function () {
  document.querySelector(".featurepage .title").innerHTML = "PHYSICALLY REAL";
  document.querySelector(".featurepage .content").innerHTML =
    "Likes, Forwards, Comments, Blocks can be physically seen in your daily routine. No need a phone.";
  document.getElementById("myvideo").src = "upl.mp4";
});

document.getElementById("three").addEventListener("click", function () {
  document.querySelector(".featurepage .title").innerHTML = "THE TERMINAL";
  document.querySelector(".featurepage .content").innerHTML =
    "Manage, reflect on, and envision your social network every day, everywhere.";
  document.getElementById("myvideo").src = "dat.mp4";
});
