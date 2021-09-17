function benvenuto() {

  
    var username = localStorage.getItem('Username');

    if (username == null) {
        alert('Iscriviti alla nostra Newsletter!');

    }
    else {
        alert('Benvenut*' + ' ' + username + '!');
    }
}



function checkform() {

    var f = document.getElementById('form');
    var iscrizione = true;

    for (var i = 0; i < f.length; i++) {
        if (f[i].value.length == 0)
            iscrizione = false;
    }

    if (iscrizione) {
        document.getElementById('submitbutton').disabled = false;
    }
}
function save() {
    var username = document.getElementById('u').value;

    localStorage.setItem('Username', username);

    onload();
}


function check() {
    var username = localStorage.getItem('Username');

    if (username !== null) {
        let loginForm = document.getElementById('form');
        loginForm.style.display = "none";

        let loginButton = document.getElementById('submitbutton');
        loginButton.style.display = "none";

        let logoutButton = document.getElementById('unsbmitButton');
        logoutButton.style.display = "inline";

    }
    else {
        let logoutButton = document.getElementById('unsbmitButton');
        logoutButton.style.display = "none";
    }
}
function unsubscribe() {
    var logoutButton = document.getElementById('unsubmitButton');
    if (localStorage.getItem('Username') !== null) {
        localStorage.clear();
    }
}