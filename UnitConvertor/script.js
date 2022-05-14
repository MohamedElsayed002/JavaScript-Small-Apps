let number = document.getElementById('number');
let length = document.getElementById('length');
let volume = document.getElementById('volume');
let mass = document.getElementById('mass');
let SearchNumber = 10;

function Nnumber() {
    number.innerHTML = SearchNumber;
}
Nnumber()

function Llength() {
    let feet1 = SearchNumber * 0.3048;
    let result1 = feet1.toFixed(3);
    let feet = SearchNumber * 3.28084;
    let result = feet.toFixed(3)
    console.log(result)
    length.innerText = SearchNumber + "meters = " + result + " feet |" + SearchNumber + " feet = " + result1 + " meters"
}
Llength();

function Vvolume() {
    let liter = SearchNumber * 3.78541;
    let result1 = liter.toFixed(3);
    let gallons = SearchNumber * 0.264172;
    let result = gallons.toFixed(3);


    volume.textContent = SearchNumber + " Liters = " + result + " gallons  |" + SearchNumber + " Gallons = " + result1 + " liters"
}
Vvolume();

function Mmass() {
    let kilo = SearchNumber * 2.20462;
    let result = kilo.toFixed(3);
    let pounds = SearchNumber * 0.453592;
    let result1 = pounds.toFixed(3);



    mass.innerText = SearchNumber + " kilos = " + result + " pounds | " + SearchNumber + "pounds =" + result1
}

Mmass();