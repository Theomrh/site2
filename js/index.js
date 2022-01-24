function validate(){
    var login = document.forms["form"]["login"];
    var pwd = document.forms["form"]["pwd"];

    if(login.value ==""){
        alert("veuillez saisir votre login!");
        login.focus();
        return false;
    } else if (pwd.value == "") {
        alert("Vous avez oublié de saisir le champ password!");
        pwd.focus();
        return false;
    }
    
    return true;
}

function check() {
    var nom = document.forms["form"]["nom"];
    var prenom = document.forms["form"]["prenom"];
    var email = document.forms["form"]["email"];
    var message = document.forms["form"]["message"];

    if (nom.value == "" || prenom.value == "" || email.value == "" || message.value == "") {
        alert("Vous avez oublié de saisir un champ!");
        return false;
    }

    return true;
}