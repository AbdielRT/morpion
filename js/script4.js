var casilla = document.getElementsByClassName('casilla');
var compteur = new Array(9);
var tour = true;
var player = ['Orange','Blue'];

for ( i = 0 ; i < casilla.length ; i++ ){
	casilla[i].onclick = function clickCasilla(event){
		j = parseInt(event.target.id);

		event.target.innerHTML = (tour)? 'x' : 'o';
		compteur[j] = (tour)? 'x' : 'o' ;
		event.target.style.background = (tour)? 'orangered' : "darkcyan" ;
		
		if (compteur.includes(undefined)){
			for (l = 0; l < 2; l++){	// loop player[] 
				for (k =0;k<7;k+=3){ 	// check for rows
					if (compteur[k]===player[l] && compteur[k+1]===player[l] && compteur[k+2]===player[l]){
						alert('Joueur '+player[l]+' a gagné !');
						document.location.reload();}
				}
				for (k =0;k<3;k++){ 	// check for columns
					if (compteur[k]===player[l] && compteur[k+3]===player[l] && compteur[k+6]===player[l]){
						alert('Joueur '+player[l]+' a gagné !');
						document.location.reload();}
					}
					// check for diagonals
				if (compteur[0]===player[l] && compteur[4]===player[l] && compteur[8]===player[l] ||
					compteur[6]===player[l] && compteur[4]===player[l] && compteur[2]===player[l]){	
						alert('Joueur '+player[l]+' a gagné !');
						document.location.reload();}
			}
		}		
		else {
			alert('Essaie encore !'); 
			document.location.reload();
		}
		tour = !tour;
	}
}

