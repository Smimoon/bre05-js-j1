const nombre = 87;
let choix = parseInt(window.prompt("Choisissez un nombre entre 0 et 100"));
while(choix!==nombre){
    if(choix<nombre) {
        window.alert("Le nombre mystère est plus grand");
        choix = parseInt(window.prompt("Choisissez un nombre entre 0 et 100"));
    }
    else if(choix>nombre) {
        window.alert("Le nombre mystère est plus petit");
        choix = parseInt(window.prompt("Choisissez un nombre entre 0 et 100"));
    }
}
window.alert("Bravo vous avez gagné !");


