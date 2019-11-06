function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function printResult(res){
	var div = document.createElement('div');
	div.innerHTML = res;
	document.getElementById('result').appendChild(div);
}