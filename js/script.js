const casilla = document.getElementsByClassName('casilla');
const compteur = new Array(9);
const player = ['Orange','Bleu'];
var tour = true;

for ( i = 0 ; i < casilla.length ; i++ ){
	casilla[i].onclick = function clickCasilla(event){
		j = parseInt(event.target.id);
		
		if (tour) {
			event.target.innerHTML = 'x';
			compteur[j] = 'Orange';
			event.target.style.background = 'orangered';
		} else {
			event.target.innerHTML = 'o';
			compteur[j] = 'Bleu' ;
			event.target.style.background = "darkcyan" ;
		}
		
		if (compteur.includes(undefined)){
			for(k = 0; k < 2; k++){ // loop over the players
				if (	// check columns 
					compteur[0]==player[k] && compteur[1]==player[k] && compteur[2]==player[k] || 
					compteur[3]==player[k] && compteur[4]==player[k] && compteur[5]==player[k] ||
					compteur[6]==player[k] && compteur[7]==player[k] && compteur[8]==player[k] ||
						// check rows 
					compteur[0]==player[k] && compteur[3]==player[k] && compteur[6]==player[k] ||
					compteur[1]==player[k] && compteur[4]==player[k] && compteur[7]==player[k] ||
					compteur[2]==player[k] && compteur[5]==player[k] && compteur[8]==player[k] ||
						// check diagonals
					compteur[0]==player[k] && compteur[4]==player[k] && compteur[8]==player[k] ||
					compteur[6]==player[k] && compteur[4]==player[k] && compteur[2]==player[k]	
					){ alert('Joueur ' + player[k] + ' a gagné !')
					document.location.reload();
				} 
			} 
		}else {
				alert('Essaie encore !'); 
				document.location.reload();
		}
	tour = !tour;
	}
}

