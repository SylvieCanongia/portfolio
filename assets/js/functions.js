// Calculate my age for displaying it in "A propos" section

function getAge(birthday) { 
    var diff = Date.now() - birthday.getTime();
    var age = new Date(diff); 
    return Math.abs(age.getUTCFullYear() - 1970);
}

// My birthday
let myAge = `${getAge(new Date(1974, 6, 12))} ans`;

let displayAge = document.getElementById('age');
displayAge.innerHTML = myAge;