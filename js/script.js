// chiediamo all'utente il nome
const userName = prompt('Come ti chiami?');
// il console.log serve solo per il debug
console.log(userName);
const userLastName = prompt('Quale è il tuo cognome?');
console.log(userLastName);
const userColor = prompt('Quale è il tuo colore preferito?');
console.log(userColor);
//Creo il messaggio con la password
// const userPassword = 'La password generata è:' + ' ' + userName + userLastName + userColor +'21';
// const userPassword = `La password generata è: ${userName}${userLastName}${userColor}21`;

// Utilizzo somma per creare la password

const userPassword = userName + userLastName + userColor + 21;
console.log(userPassword);

//stampiamo a video
document.getElementById('user-message').innerHTML = userPassword;

