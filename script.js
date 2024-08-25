let btn = document.querySelector(".btn");

function showSuccessMessage() {
  var options = {
    body: "you have successfully subscribe to our notif service",
    icon: "./img.png",
    image: "./img.png",
    badge: "./img.png",
    dir: "rtl",
    vibrate: [100, 50, 200],
  };
  new Notification("subscribe generated !", options);
}

function reqPermision() {
  console.log("dd");

  Notification.requestPermission((userChoice) => {
    console.log("reesult : ", userChoice);

    if (userChoice === "denied") {
      console.log("notif denied");
    } else {
      console.log("notif accept");
      showSuccessMessage();
    }
  });
}

btn.addEventListener("click", () => {
  if ("Notification" in window || "seviceWorker" in navigator) {
    reqPermision();
  }
});
