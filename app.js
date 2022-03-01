document.addEventListener("DOMContentLoaded", function () {
  var friends = ["John", "David", "Will", "Jordan", "Norman"];
  var locations = [
    "bathroom",
    "basement",
    "front yard",
    "closet",
    "pantry",
    "bedroom",
    "attic",
    "wine cellar",
    "den",
    "Wal-Mart",
  ];
  var weapons = [
    "gun",
    "knife",
    "machete",
    "banana",
    "cell phone",
    "Topo Chico",
    "bazooka",
    "tank",
    "rotweiler",
    "mountain lion",
    "can opener",
    "coffee maker",
    "pizza cutter",
    "microwave",
    "pillow",
    "sweet jam",
    "guitar solo",
    "reverse round kick",
    "clothes hanger",
    "whip",
  ];

  for (var i = 1; i < 101; i++) {
    var h3new = document.createElement("h3");
    h3new.innerText = "Accusation " + i + ":";
    document.body.appendChild(h3new);

    h3new.addEventListener("click", accusation(i));
  }

  function accusation(accusationNum) {
      
      function newAlert() {
          var name = friends[accusationNum % 5];
          var location = locations[accusationNum % 10];
          var weapon = weapons[accusationNum % 20];
          alert(`I accuse ${name} with the ${weapon} in the ${location}!`);
    }
    return newAlert;
  }
});
