// chiediamo all'utente il nome
const userName = prompt('Come ti chiami?');
console.log(userName);
const userLastName = prompt('Quale è il tuo cognome?');
console.log(userLastName);
const userColor = prompt('Quale è il tuo colore preferito?');
console.log(userColor);
//Creo il messaggio di saluto
// const userMessage = 'Ciao' + ' ' + userName;
const userMessage = `La password generata è: ${userName}${userLastName}${userColor}21`;
console.log(userMessage);
//stampiamo a video
document.getElementById('user-message').innerHTML = userMessage;

