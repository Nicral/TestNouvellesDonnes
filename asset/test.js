let tableauEntiers = [1, 4, 6, 9, 16, 18, 59, 20, 30, 1, 9];
//let phrase = "Testing text parse return value";

function retrouveIndex() {
    let indices = [];
    let nombreTest = Number(document.getElementById("champInput").value);
    let idx = tableauEntiers.indexOf(nombreTest);

    if (idx != -1) {
        while (idx != -1) {
            indices.push(idx);
            idx = tableauEntiers.indexOf(nombreTest, idx + 1);
        }

        if (indices.length >= 2) {
            document.querySelector('#testUn').innerText = `Le nombre ${nombreTest} est en position ${indices} dans le tableau. Il est donc présent plusieurs fois dans le tableau ! (le programme retourne true)`
            return true;
        }
        else { 
            document.querySelector('#testUn').innerText = `Le nombre ${nombreTest} est en position ${indices} dans le tableau.` 
            return true;
        }
    }
    else { 
        document.querySelector('#testUn').innerText = `le nombre n'est pas présent dans le tableau`
        return false;
    }
}

function comparaisonParam() {

    let paramUn = document.getElementById("paramUn").value;
    let paramDeux = document.getElementById("paramDeux").value;
    let phraseDynamique = document.getElementById("phrase").value;
    let upperPhrase = phraseDynamique.toUpperCase();
    let lowerPhrase = phraseDynamique.toLowerCase(); 

    document.querySelector('#testDeuxUpper').innerText = `La phrase en majuscule : ${upperPhrase}`;
    document.querySelector('#testDeuxLower').innerText = `La phrase en minuscule : ${lowerPhrase}`;

    console.log(paramUn);
    console.log(paramDeux);

    if (paramUn === paramDeux && paramUn !== "" && paramDeux !== "") {
        document.querySelector('#testDeuxComparaison').innerText = `1`;
        return 1;
    } 
    else if (paramUn === "" || paramDeux === "") {
        document.querySelector('#testDeuxComparaison').innerText = `L'un ou les deux paramètres sont vides`;
    }
    else {
        document.querySelector('#testDeuxComparaison').innerText = `0`;
        return 0;
    }
}