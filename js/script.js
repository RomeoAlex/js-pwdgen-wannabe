// chiediamo all'utente il nome
const userName = prompt('Come ti chiami?');
console.log(userName);
//Creo il messaggio di saluto
// const userMessage = 'Ciao' + ' ' + userName;
const userMessage = `Ciao ${userName}`;
console.log(userMessage);
//stampiamo a video
document.getElementById('user-message').innerHTML = userMessage;

