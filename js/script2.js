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
			// Check if player X wins
			for (k =0;k<7;k+=3){ 	// check for rows
				if (compteur[k]=== 'x' && compteur[k+1]=== 'x' && compteur[k+2]=== 'x'){
					alert('Joueur Orange a gagné !');
					document.location.reload();}
				else if (compteur[k]=== 'o' && compteur[k+1]=== 'o' && compteur[k+2]=== 'o' ){
					alert('Joueur Blue a gagné !');
					document.location.reload();}
			}
			for (k =0;k<3;k++){ 	// check for columns
				if (compteur[k]=== 'x' && compteur[k+3]=== 'x' && compteur[k+6]=== 'x'){
					alert('Joueur Orange a gagné !');
					document.location.reload();}
				else if (compteur[k]=== 'o' && compteur[k+3]=== 'o' && compteur[k+6]=== 'o' ){
					alert('Joueur Blue a gagné !');
					document.location.reload();
				}
			}	
			if (
					compteur[0]=== 'x' && compteur[4]=== 'x' && compteur[8]=== 'x' ||		//check 'x'
					compteur[6]=== 'x' && compteur[4]=== 'x' && compteur[2]=== 'x'	 		//diagonals
					){ alert('Joueur Orange a gagné !')
					document.location.reload();}
			else if (
					compteur[0]=== 'o' && compteur[4]=== 'o' && compteur[8]=== 'o' ||		//check 'o'
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

