console.log("JavaScript töötab (!)");
document.getElementById("tekst").innerText = "See on nüüd esimene uus tekst";
document.getElementById("tekst2").innerText = "See on nüüd teine uus tekst";

var frontEnd = ["JavaScript", "PHP", "Java", "HTML", "CSS", "C#"];
var backEnd = ["Ubuntu","Debian","Fedora","FreeBSD","Win10x86", "Win10x64", "Win7SLUx86", "WinXP"];

document.getElementById("tekst").innerText = frontEnd;
document.getElementById("tekst2").innerText = backEnd;
console.log(document.getElementById("tekst"));
console.log(document.getElementById("tekst2"));

/*
//This method removes the first item of an array.
//frontEnd.shift();
// This method removes the last element of an array, and returns that element.
//frontEnd.pop(); 
//This method adds new items to the beginning of an array, and returns the new length.
frontEnd.unshift("Angular");
//This method adds new items to the end of an array, and returns the new length.
frontEnd.push("Python");
//This method adds/removes items to/from an array started from index 0, and returns the removed item(s).
frontEnd.splice(0);
//This method removes 1 item from an array started from index 0, and returns the removed item(s) (= array).
frontEnd.splice(0,1);
//This method removes 3 items from an array started from index 2, and returns the removed item(s) (= array).
frontEnd.splice(2,3);
//This method removes 2 items from an array started from index 5, and returns the removed item(s) (= array).
frontEnd.splice(2,5);
//This method replaces from index 2 (starting from 0) with index 3 (starting from 0) items.
frontEnd[1] = frontEnd [2];

var uusMuutuja = frontEnd[0].split("a"); // making array from string from beginning of 1st string, splitting the string from figure A
//var uusMuutuja = frontEnd[1].split("");    // making array from string, splitting the 2nd string (=võtame teise sõna algustähe)
console.log(uusMuutuja); // = ülemiste harjutuste jaoks.
*/
document.getElementById("tekst").innerText = frontEnd;
console.log(document.getElementById("tekst"));
document.getElementById("tekst2").innerText = backEnd;
console.log(document.getElementById("tekst2"));
