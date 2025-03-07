
let nbAllumettes = 20
let userNb

function boucleJeu (){

    while (nbAllumettes > 0){
        userNb = prompt(`Il reste ${nbAllumettes} allumettes ! Combien d'allumettes veux-tu retirer cette fois-ci ?`, "Donne un chiffre entre 1 et 6")

        while (isNaN(userNb) || userNb > 6 || userNb < 0){
            console.log("pas un chiffre entre 0 et 6 !")
            userNb = prompt("J'ai vraiment besoin d'un chiffre entre 0 et 6 ! Merci, bisous.")
        }

        // console.log(userNb)
        nbAllumettes -= Number(userNb)
        console.log(nbAllumettes)

    }

    while(nbAllumettes < 0){
        console.log(`${nbAllumettes} Solde négatif !`)
        nbAllumettes += Number(userNb)
        userNb = prompt(`Impossible ! Solde négatif. Reprenons, il reste ${nbAllumettes} allumettes. Combien en retires-tu ?`)
        nbAllumettes -= Number(userNb)
        console.log(nbAllumettes)
    }   
    
    alert("Bravo ! Il ne reste plus d'allumettes, la partie est terminée. ")
    
}

boucleJeu(nbAllumettes)

