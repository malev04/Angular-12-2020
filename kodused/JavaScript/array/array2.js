console.log("Jepp: JS töötab");

animals = [
  {name: "Burt Bear", profilePic: "assets/animals/bear.jpg", about: "asdsad", location: "", id: "1"},
  {name: "Charlie Cheetah", profilePic: "assets/animals/cheetah.jpg", about: "qweqwe", location: "", id: "2"},
  {name: "Donald Duck", profilePic: "assets/animals/duck.jpg", about: "", location: "", id: "3"},
  {name: "Eva Eagle", profilePic: "assets/animals/eagle.jpg", about: "", location: "", id: "4"},
  {name: "Ellie Elephant", profilePic: "assets/animals/elephant.jpg", about: "", location: "", id: "5"},
  {name: "Gino Giraffe", profilePic: "assets/animals/giraffe.jpg", about: "", location: "", id: "6"},
  {name: "Isabella Iguana", profilePic: "assets/animals/iguana.jpg", about: "", location: "", id: "7"},
  {name: "Karl Kitten", profilePic: "assets/animals/kitten.jpg", about: "", location: "", id: "8"},
  {name: "Lionel Richey", profilePic: "assets/animals/lion.jpg", about: "", location: "", id: "9"},
  {name: "Molly Mouse", profilePic: "assets/animals/mouse.jpg", about: "", location: "", id: "10"},
  {name: "Paul Puppy", profilePic: "assets/animals/puppy.jpg", about: "", location: "", id: "11"},
  {name: "Rachel Rabbit", profilePic: "assets/animals/rabbit.jpg", about: "", location: "", id: "12"},
  {name: "Ted Turtle", profilePic: "assets/animals/turtle.jpg", about: "", location: "", id: "13"},
  {name: "Donaldo Bucks", profilePic: "assets/animals/duck.jpg", about: "", location: "", id: "14"},
]


console.log(animals);

console.log(animals[0])

console.log(animals.length);

console.log(animals[animals.length-1])

console.log(animals.find(animal => animal.id == "13"))

console.log(animals[5].name)
//---------------------------------------------

animals.push({name: "Tere"});

animals.splice(10, 3);

// slice <- teeb koopia massiivist, et ei muutuks esialgne
// muutuseid teeme funktsioonide kaudu

// split <- stringite jaoks. teeb stringi tähtede massiiviks
// "tükeldab" sõna
animals.push({name: ("Tere~minu~nimi~on").split("~").join(" ")});

animals[6] = {name: "asendatud"}

// document - HTML
// getElementById otsib HTML-st Id'd, mis on sulgude sees

//innerHTMLiga on võimalik väärtust sisse panna
var holder = document.getElementById("holder");

for(var i=0; i < animals.length; i++) {
  holder.innerHTML += "<p>"+animals[i].name+"</p>";
}

var isikukood = "33212180231";
holder.innerHTML = isikukood;

var sugu = "Teadmata";

console.log(isikukood.split(""));
isikukood.split("")[0];
var esimeneNr = isikukood.substring(0,1);

if(esimeneNr=="3") {
  sugu = "Mees";
} 
if(esimeneNr=="4") {
  sugu = "Naine";
}
else {
  sugu = "Naine";
}

// Ternary operator - kui muutujal ei ole väärtust, siis läheb false blokki
var teadmata;

sugu = esimeneNr == "3" ? "Mees" : "Naine";


holder.innerHTML += "<p>" + sugu + "</p>"