var pronoun = ['the','our']; 
var adj = ['great', 'big' ]; 
var noun = ['jogger','racoon'];

let ul = document.getElementById ("dominio"); /*creo la lista*/
    for (let i=0; i < pronoun.length; i++){ /*creo el for para q me lea la info de la var*/
        for(let j=0; j < adj.length; j++){
            for(let k=0; k < noun.length; k++){
                var final = pronoun[i] + adj [j] + noun [k] +".com"; /* para concatenar los for*/
                let li = document.createElement ("li"); /*para crear cada elemento de la lista*/
                li.innerHTML = final; /*para agregar la var final cada elemento de lista*/
                ul .appendChild (li); /*para escribir dentro de la lista el elemento*/
            }
        }
    }

