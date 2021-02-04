console.log("töötab!");

var muutuja = "muutuja";
document.getElementById("htmli_id").innerHTML = muutuja; // veendu kas tekst muutub (!)

var arr = ["Mouse", "Cat", "Dog"];

arr.push("Horse");    //PUSHI UUS ELEMENT
console.log(arr[0]);  //vaata, milline element arrays on indeksiga 1 
arr[2] = "Cow";
arr.push("Tiger");    //PUSHI UUS ELEMENT 
console.log(arr);
arr.push("Mule");     //PUSHI UUS ELEMENT
console.log(arr);
console.log(arr[arr.length-1]); // indeksit võib anda ka massiivi pikkusega - siin küsime viimast elementi
/* NB! viimane element on alati ühe võrra väiksem - indeks on 0,1,2,3,4 jne ... 
 array pikkus length on kas 1, 2, 3, 4, 5, 6, jne
*/
var animal ="turtle~21.08.2020-kasutaja-true"; // selliseid näiteid võib tulla logifailidest reaalses praktikas
console.log(animal.split("~"));
/* inimloetava teksti huvides, saab ebavajalikest märkidest lahti JA SEE MASSIIVIKS muuta, 
kui tahta kuupäeva siis saab seda välja kutsuda: */
console.log(animal.split("~")[1]);
/* */
var holder = document.getElementById("holder"); // saame kätte elemendi id'ga "holder" HTML-st
console.log(holder); // kuvame seda konsoolis
for(var i=0; i < arr.length; i++); // käime läbi massiivi kus on loomad
    holder.innerHTML += "<p>" + (i+1) + ". " +arr[i]+"</p>"; // KUVAME SEDA LIITES += abil juurde 

holder.innerHTML += animal.split("~");
