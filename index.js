document.getElementById('btnModifier')
document.getElementById('btnSupprimer')
document.getElementById('btnEnregistrer')

// Fonction pour ajouter une ligne
function ajouterLigne() {
// Récupérer les valeurs du formulaire
var employeeName = document.getElementById('employeeName').value;
var signature = ''; 

//var newRow = '<tr><td>' + employeeName + '</td><td>' + signature + '<td>' + h + '</td>' + '<td>' + h + '</td>' + '<td>' + h + '</td>' + '<td>' + h + '</td>' + '<td>' + h + '</td>' + '<td>' + h + '</td></tr>';
var newRow = '<tr><td>' + employeeName + '</td>' +
'<td><input type="checkbox" name="signature"></td>' +
'<td><input type="checkbox" name="hour1"></td>' +
'<td><input type="checkbox" name="hour2"></td>' +
'<td><input type="checkbox" name="hour3"></td>' +
'<td><input type="checkbox" name="hour4"></td>' +
'<td><input type="checkbox" name="hour5"></td>' +
'<td><input type="checkbox" name="hour6"></td>' +
'<td><input type="checkbox" name="hour7"></td></tr>';
// Ajouter la nouvelle ligne au tableau
document.getElementById('presenceTableBody').innerHTML += newRow;
}

// Fonction pour enregistrer le formulaire
function enregistrerFormulaire() {
// Récupérer les valeurs du formulaire
var employeeName = document.getElementById('employeeName').value;
var functionValue = document.getElementsByName('function')[0].value;
var department = document.getElementsByName('department')[0].value;
var dateValue = document.getElementById('date').value;

// Affichage 
console.log('Enregistrer les données :', { employeeName, functionValue, department, dateValue });
}




// Fonction pour modifier une ligne
function modifierLigne() {
var employeeName = document.getElementById('employeeName').value;
var functionValue = document.getElementsByName('function')[0].value;
var department = document.getElementsByName('department')[0].value;
var dateValue = document.getElementById('date').value;
console.log('Modifier la ligne');
}

// Fonction pour supprimer une ligne
function supprimerLigne() {

console.log('Supprimer la ligne');
}




//Affichage 
console.log('Enregistrer les données :', { employeeName, functionValue, department, dateValue });



//fonction de login
function login() {
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;

if (username === 'admin' && password === 'admin') {
    alert('Connexion réussie !'); 
    window.location.href = 'index.html'; 
} else {
    alert('Nom d\'utilisateur ou mot de passe incorrect.');
}
}



