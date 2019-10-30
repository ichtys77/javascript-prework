function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let playerMove = 'papier';

printMessage('Zagrałeś' + playerMove + '. Jeśli mój ruch to nożyce... Wygrałem!')