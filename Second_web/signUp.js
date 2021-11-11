const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
	let warnings = ""
	let entrar = false
	let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ /*expresiones regulares*/
    parrafo.innerHTML = ""
	if(nombre.value.length < 6 ){
		 warnings += `El nombre es demasiado corto <br>`
		 entrar = true
	}
    console.log(regexEmail.test(email.value))
	if(regexEmail.test(email.value)){

		warnings += `el email no es válido <br>`
		entrar = true
	}
	if(pass.value.length < 8 ){
		warnings += `la contraseña no es válida <br>`
		entrar = true
	}
	if(entrar){
		parrafo.innerHTML = warnings
	}else{
		parrafo.innerHTML = 'enviado'
	}
})







/*var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var password = document.getElementById('password');
var error = document.getElementById('error');

error.style.color = 'red';


function enviarFormulario (){
	console.log('Enviando formulario');

	var messagesError = [];

	if(nombre.value === null || nombre.value === ''){
		messagesError.push ('Enter your name');
	}

	if(email.value === null || email.value === ''){
		messagesError.push ('Enter your email');
	}

	if(password.value === null || password.value === ''){
		messagesError.push ('Enter your password');
	}

	error.innerHTML = messagesError.join(', ');

	return false;

}


























/*
console.clear();

const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

loginBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			signupBtn.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

signupBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			loginBtn.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});*/