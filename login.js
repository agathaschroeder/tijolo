const form  = {
    user: () => document.getElementById("idInputEmail"),
    senha: () => documento.getElementById("idInputPassword"),
}
const btlogin = document.getElementById("idLogin");

btlogin.addEventListener("click", function(){
    firebase.auth().signInWithEmailAndPassword(form.user().value, form.senha().value).then(response => {
        window.location.href = "home.html";
    }).catch(error => {
        console.log('error')
        alert(getErrorMessage(error));
    });

});

function cadastro(){
    window.location.href="cadastro.html"
}

function cadastrar(){}
    btCadastro = document.getElementById("IdBtCadastro");
    btCadastro.addEventListenner("click" function(){});

    const usuario = form.user().value;
    const password = form.senha().value;

firebase.auth().createUserWithEmailAndPassword(
    usuario, password
).then(() => {
   
    window.location.href = "main.html";
}).catch(error => {
    
    alert(getErrorMessage(error));
})
