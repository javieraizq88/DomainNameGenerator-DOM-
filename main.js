var pronoun = ['the','our']; 
var adj = ['great', 'big' ]; 
var noun = ['jogger','racoon'];

for (let i=0; i < pronoun.length; i++){
    for(let j=0; j < adj.length; j++){
        for(let k=0; k < noun.length; k++){
            var final = pronoun[i] + adj [j] + noun [k] +".com"
        }
    }
}


thegreatjogger.com 
thegreatracoon.com 
ourgreatjogger.com 
ourgreatracoon.com 
thebigjogger.com 
thebigracoon.com 
ourbigjogger.com 
ourbigracoon.com


let ul = document.getElementById ("dominio");
let li = document.createElement ("Li");
let textLi = document.createTextNode ("Hola");