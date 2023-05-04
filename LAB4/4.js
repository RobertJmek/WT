let arrobj = [
    { name: "Vasile", age: 12 },
    { name: "Maricica", age:21 },
    { name: "Marius", age: 34 },
    { name: "Fabian", age:20 },
    { name: "Robert", age:19 },
    { name: "Hagi", age: 23 },
]
const age = +prompt("Ziceti varsta: ");
const filtered = arrobj.filter( ( el ) => el.age <= age );
alert( filtered.length + " persoane:\n" + filtered.map(p => p.name).join('\n'));