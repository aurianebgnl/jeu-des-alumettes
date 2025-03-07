
let nbAllumettes = 20
let userNb
let joueur1 = "Joueur 1"
let joueur2 = "Joueur 2"

function boucleJeu (){

    while(nbAllumettes > 0){

        nbAllumettes = promptUser(joueur1)
        console.log(nbAllumettes + "joueur1")
    
        nbAllumettes = promptUser(joueur2)
        console.log(nbAllumettes + "joueur2")

    }

    alert(`Bravo ! Il ne reste plus d'allumettes, la partie est terminée.`)
    
}

boucleJeu(nbAllumettes)

function promptUser(joueur){

    userNb = prompt(`${joueur} : Il reste ${nbAllumettes} allumettes ! Combien d'allumettes veux-tu retirer cette fois-ci ?`, "Donne un chiffre entre 1 et 6")

    while (isNaN(userNb) || userNb > 6 || userNb < 1){
        console.log("pas un chiffre entre 1 et 6 !")
        userNb = prompt("J'ai vraiment besoin d'un chiffre entre 1 et 6 ! Merci, bisous.")
    }

    // console.log(userNb)
    nbAllumettes -= Number(userNb)
    // console.log(nbAllumettes)

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

/* lancement boucleJeu
tant que nb allumettes n'est pas de 0, ça joue
d'abord, le prompt pour le joueur 1
une fois que joueur 1 a bien répondu,
prompt pour joueur 2

(prompt bien répondu = function prompt(joueur1), avec la boucle while isNaN etc dedans)

une fois que nbAllumettes < 0,
dire QUI a gagné (c'est à dire, le joueur qui fait tomber le nbAllum a 0)

faire un tableau des joueurs joueurs[i]
avec une boucle for 
condition entrée : nbAllu > 0
condition de sortie : nbAllu < 0
itération: passe au joueur suivant i++ 

*/


