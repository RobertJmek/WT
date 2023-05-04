let dictionar = 
    { "masina": "car" ,
    "acesta": "this",
     "un": "a" ,
    "caine": "dog" ,
     "apa" : "water",
     "Eu": "I" ,
     "am vazut": "I saw",
    };
fraza = prompt("Scrieti o fraza pe care vreti sa o trsduceti(fara semne de punctuatie): ");
let listacuv = fraza.split(" ");
let propozitietradusa = "";
for ( el of listacuv ){
    if ( el in dictionar ){
        propozitietradusa += " " + dictionar[el];
    }
    else 
        propozitietradusa += " " + el + "?";
}


/// Am mers cu masina si am vazut un caine
