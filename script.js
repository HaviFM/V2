var count = 0;
var carsArray = [];
var voiture = {
  type: null,
  couleur: null,
  vitesse: null,
  file: null,
  top: 0,
  left: 0,
  element: null,
};


window.onload = function () {
  var formElement = document.getElementById("formulaire");
  formElement.addEventListener("submit", function (event) {
    event.preventDefault();
    
    afficherVoiture();
    count++;
    console.log(count);
    if (count >= 4) {
    }
  });
  function afficherVoiture() {
    var selectedCar = document.getElementById("car-select").value;
    var selectedColor = document.getElementById("color-select").value;
    var selectedSpeed = document.getElementById("speed").value;

    if (selectedCar && selectedColor && selectedSpeed) {
      var voitureDiv = document.getElementById("voiture");
      var newImg = document.createElement("img");
      newImg.src = "images/" + selectedCar + ".png";
      newImg.style.backgroundColor = selectedColor;
      var maVoiture = Object.create(voiture);
      maVoiture.type = selectedCar;
      maVoiture.couleur = selectedColor;
      maVoiture.vitesse = selectedSpeed;

      var nbVoit = carsArray.length;
      var top = 60 * nbVoit;
      maVoiture.top = top;
      newImg.style.top = top + "px";

      maVoiture.element = newImg;
      carsArray.push(maVoiture);

      voitureDiv.appendChild(maVoiture.element);

      //console.log(maVoiture.element);
    }
  }
   
  document.getElementById("course").addEventListener("click", function () {
    //if (carsArray.length < 4) return;
    // setInterval(race, 1000);
    var audio = new Audio("https://lasonotheque.org/UPLOAD/mp3/0600.mp3");
    audio.play();
    var board = document.getElementById("board");
    var boardBound = board.getBoundingClientRect().right;

    // test
    var winners = [];
    carsArray.forEach(function (car) {
      var speed = car.vitesse / 2;
      var i = 0;
      var myInterval = setInterval(function () {
        i += speed;
        car.left = car.left + car.vitesse;
        car.element.style.left = i + "px";
        var carBound = car.element.getBoundingClientRect().right;
        if (carBound > boardBound) {
          console.log("finished");
          winners.push(car);
          clearInterval(myInterval);
          if (winners.length == 4) {
            console.log("DONE");
          }
        }
      }, 100);
    });
  });
};
