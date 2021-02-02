const text = '{ "team" : ['+
'{ "img":"images/Jeff.png" , "fullName":"Alvar Jefte Peniche Rendon." , "designation":"Frontend developer." , "hobbies":"Ver películas de ciencia ficción y jugar Minecraft. 🐱‍🏍 " },' +
'{ "img":"images/Dani.png" , "fullName":"Daniel Antonio Poot Uc." , "designation":"Frontend developer." , "hobbies":"Escuchar música y ver películas. 🤖 " },' +
'{ "img":"images/Shirla.png" , "fullName":"Shirla Pamela Santana Pérez." , "designation":"Frontend developer." , "hobbies":"Beber con los amigos los fines de semana. 🍻 " },' +
'{ "img":"images/Magdiel.png" , "fullName":"Magdiel Joab Pech Menéndez." , "designation":"Frontend developer." , "hobbies":"Jugar videojuegos hasta la madrugada. 🎮" } ]}'; 

var authors = JSON.parse(text);
var i= 0;
function nextMember() {
    if(i<3){
        i++;
        document.querySelector(".photo").src=authors.team[i].img;
        document.getElementById("name").innerHTML=(authors.team[i].fullName);
        document.getElementById("designation").innerHTML=(authors.team[i].designation);
        document.getElementById("hobbie").innerHTML=(authors.team[i].hobbies);
    }
}

function previousMember() {
    if(i>0){
        i--;
        document.querySelector(".photo").src=authors.team[i].img;
        document.getElementById("name").innerHTML=(authors.team[i].fullName);
        document.getElementById("designation").innerHTML=(authors.team[i].designation);
        document.getElementById("hobbie").innerHTML=(authors.team[i].hobbies);
    }
}