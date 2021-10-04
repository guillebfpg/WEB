//Programa para jugar al tres en raya

let celda, 
    turno = "X",
    cont = 0;

function jugar(celda) {

    casilla = document.querySelector(celda);
    //casilla.style.backgroundColor = "pink";
    //casilla.innerHTML = "pink";

    if (casilla.innerHTML == "") {

        casilla.innerHTML = turno;

        //Controlar turno
        if (turno == "X") {
            turno = "O";
        } else {
            turno = "X";
        }
    } else {
        document.getElementById('venA').style.display = "flex";
        //alert("Casilla ocupada");
    }
    
    //Comprobaciones
    vCasilla1 = document.querySelector("#uno").innerHTML;
    vCasilla2 = document.querySelector("#dos").innerHTML;
    vCasilla3 = document.querySelector("#tres").innerHTML;
    vCasilla4 = document.querySelector("#cuatro").innerHTML;
    vCasilla5 = document.querySelector("#cinco").innerHTML;
    vCasilla6 = document.querySelector("#seis").innerHTML;
    vCasilla7 = document.querySelector("#siete").innerHTML;
    vCasilla8 = document.querySelector("#ocho").innerHTML;
    vCasilla9 = document.querySelector("#nueve").innerHTML;
    
    //Gana X
    if ((vCasilla1 == vCasilla2 && vCasilla2 == vCasilla3 && vCasilla3 == "X") ||//1
        (vCasilla4 == vCasilla5 && vCasilla5 == vCasilla6 && vCasilla6 == "X") ||//2
        (vCasilla7 == vCasilla8 && vCasilla8 == vCasilla9 && vCasilla9 == "X") ||//3
        (vCasilla1 == vCasilla4 && vCasilla4 == vCasilla7 && vCasilla7 == "X") ||//4
        (vCasilla2 == vCasilla5 && vCasilla5 == vCasilla8 && vCasilla8 == "X") ||//5
        (vCasilla3 == vCasilla6 && vCasilla6 == vCasilla9 && vCasilla9 == "X") ||//6
        (vCasilla1 == vCasilla5 && vCasilla5 == vCasilla9 && vCasilla9 == "X") ||//7
        (vCasilla3 == vCasilla5 && vCasilla5 == vCasilla7 && vCasilla7 == "X")   //8
       ){document.getElementById('venX').style.display = "flex";}
         //{alert("¡EL GANADOR ES... X!")};
         //location.reload();}
    
    //Gana O
    if ((vCasilla1 == vCasilla2 && vCasilla2 == vCasilla3 && vCasilla3 == "O") ||//1
        (vCasilla4 == vCasilla5 && vCasilla5 == vCasilla6 && vCasilla6 == "O") ||//2
        (vCasilla7 == vCasilla8 && vCasilla8 == vCasilla9 && vCasilla9 == "O") ||//3
        (vCasilla1 == vCasilla4 && vCasilla4 == vCasilla7 && vCasilla7 == "O") ||//4
        (vCasilla2 == vCasilla5 && vCasilla5 == vCasilla8 && vCasilla8 == "O") ||//5
        (vCasilla3 == vCasilla6 && vCasilla6 == vCasilla9 && vCasilla9 == "O") ||//6
        (vCasilla1 == vCasilla5 && vCasilla5 == vCasilla9 && vCasilla9 == "O") ||//7
        (vCasilla3 == vCasilla5 && vCasilla5 == vCasilla7 && vCasilla7 == "O")   //8
       ){document.getElementById('venO').style.display = "flex";}
		 //alert("¡EL GANADOR ES... O!");}
         //location.reload();}
    
    cont ++;
    //console.log("La variable cont es: " + cont);
    if (cont === 10){document.getElementById('venE').style.display = "flex";}
        //alert("¡EMPATE!");
        //location.reload();
}

let player;

function closet(ces){
    player = document.querySelector(ces);
    player.style.display = "none";
}
        