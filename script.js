
let nbAllumettes = 20
let userNb
let joueurs = ["Joueur 1","Joueur 2"]
let i = 0

// fonction tour de jeu : tout ce qu'il se passe lorsque c'est le tour d'un joueur, jusqu'au résultat du nombre d'allumettes restantes
function promptUser(joueur){

    // prompt pour récupérer le nombre d'allumettes à retirer
    userNb = prompt(`${joueur} : Il reste ${nbAllumettes} allumettes ! Combien d'allumettes veux-tu retirer cette fois-ci ?`, "Donne un chiffre entre 1 et 6")

    // boucle pour s'assurer de la conformité du chiffre donné
    while (isNaN(userNb) || userNb > 6 || userNb < 1){
        console.log("pas un chiffre entre 1 et 6 !")
        userNb = prompt("J'ai vraiment besoin d'un chiffre entre 1 et 6 ! Merci, bisous.")
    }

    // mise à jour du nombre d'allumettes restantes
    nbAllumettes -= Number(userNb)

    // boucle pour vérifier que le chiffre donné n'induit pas une erreur (retirer plus d'allumettes qu'il n'en reste)
    while(nbAllumettes < 0){
        console.log(`${nbAllumettes} Solde négatif !`)
        nbAllumettes += Number(userNb)
        userNb = prompt(`Impossible ! Solde négatif. Reprenons : ${joueur}, il reste ${nbAllumettes} allumettes. Combien en retires-tu ?`)
        while (isNaN(userNb) || userNb > 6 || userNb < 1){
            userNb = prompt(`J'ai toujours besoin d'un chiffre entre 1 et 6 ! Je répète, il reste donc ${nbAllumettes} allumettes.`)
        }
        nbAllumettes -= Number(userNb)
        console.log(nbAllumettes)
    }  
    
    return nbAllumettes
}

// fonction principale qui fait tourner tout le jeu
function boucleJeu (){

    console.log("je suis dans boucleJeu")

    // boucle de tour de jeu par joueur, ce qu'il se passe tant que le solde d'allumettes restantes est positif
    while(nbAllumettes > 0){

        nbAllumettes = promptUser(joueurs[i]) // tour de jeu par joueur
        console.log(nbAllumettes + joueurs[i])

        // condtions pour 
        if (nbAllumettes > 0){ 
            i++

            // réinitialisation du tour des joueurs lorsque tout le monde a joué
            if (i === joueurs.length) {
            i = 0
            }
        }      
        
    }

    // la victoire !
    alert(`Bravo ${joueurs[i]} ! Il ne reste plus d'allumettes, la partie est terminée.`)
    
}

boucleJeu()


