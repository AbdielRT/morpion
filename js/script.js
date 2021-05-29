var casilla = document.getElementsByClassName('casilla');
var compteur = new Array(9);
var tour = true;

for ( i = 0 ; i < casilla.length ; i++ ){
	casilla[i].onclick = function clickCasilla(event){
		j = parseInt(event.target.id);

		event.target.innerHTML = (tour)? 'x' : 'o';
		compteur[j] = (tour)? 'x' : 'o' ;
		event.target.style.background = (tour)? 'orangered' : "darkcyan" ;
		
		if (compteur.includes(undefined)){
			// Check if player 'x' wins
			if ( 
				compteur[0]=== 'x' && compteur[1]=== 'x' && compteur[2]=== 'x' || 		//check
				compteur[3]=== 'x' && compteur[4]=== 'x' && compteur[5]=== 'x' ||		// for
				compteur[6]=== 'x' && compteur[7]=== 'x' && compteur[8]=== 'x' ||		// rows

				compteur[0]=== 'x' && compteur[3]=== 'x' && compteur[6]=== 'x' ||		//check
				compteur[1]=== 'x' && compteur[4]=== 'x' && compteur[7]=== 'x' ||		// for
				compteur[2]=== 'x' && compteur[5]=== 'x' && compteur[8]=== 'x' ||		// columns

				compteur[0]=== 'x' && compteur[4]=== 'x' && compteur[8]=== 'x' ||		//check
				compteur[6]=== 'x' && compteur[4]=== 'x' && compteur[2]=== 'x'	 		//diagonals
				){ alert('Joueur Orange a gagné !')
				document.location.reload();}
			else if (
			// Check if player 'o' wins
				compteur[0]=== 'o' && compteur[1]=== 'o' && compteur[2]=== 'o' || 		//check
				compteur[3]=== 'o' && compteur[4]=== 'o' && compteur[5]=== 'o' ||		// for
				compteur[6]=== 'o' && compteur[7]=== 'o' && compteur[8]=== 'o' ||		// rows

				compteur[0]=== 'o' && compteur[3]=== 'o' && compteur[6]=== 'o' ||		//check
				compteur[1]=== 'o' && compteur[4]=== 'o' && compteur[7]=== 'o' ||		// for
				compteur[2]=== 'o' && compteur[5]=== 'o' && compteur[8]=== 'o' ||		// columns

				compteur[0]=== 'o' && compteur[4]=== 'o' && compteur[8]=== 'o' ||		//check
				compteur[6]=== 'o' && compteur[4]=== 'o' && compteur[2]=== 'o'	 		//diagonals
			){ alert('Joueur Blue a gagné !')
				document.location.reload();}
		}
		else {
			alert('Essaie encore !'); 
			document.location.reload();
		}
		tour = !tour;
		}
	}

