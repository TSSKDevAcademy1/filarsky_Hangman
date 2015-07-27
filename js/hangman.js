var secret ='JAVASCRIPT';
var lettersGuessed ='';
var counter = 0;

function getGuessedWord(secret, lettersGuessed) {
	var result ='';
	for(var c of secret){
		if(lettersGuessed.indexOf(c) >=0) {
			result +=c;
		} else {
			result += '-';
		}
	} return result;
}

function onClick(event) {

	var el = event.target;
//deactivate button
	el.setAttribute('disabled','disabled');

//update letters guessed
	lettersGuessed += el.textContent;


//update secret
	var els= document.getElementById('secret');
	els.textContent = getGuessedWord(secret,lettersGuessed);

//update image
	if(secret.indexOf(el.textContent) == -1) {
		counter++;
		var img = document.getElementById('situation');
		img.setAttribute('src', 'images/phase' + counter + '.png' );
	}
	//check game state
	if(counter == 5) {
		alert('game over');
		var fn = document.getElementById('button');
		for(var btn of fn){
			btn.setAttribute('disabled', 'disabled');
		}
	}

	if (getGuessedWord(secret, lettersGuessed).length > 0 && getGuessedWord(secret, lettersGuessed).indexOf('-') == -1) {
		alert('Vyhral si');}

}

//initialization
var el= document.getElementById('secret');
el.textContent = getGuessedWord(secret,lettersGuessed);

var group = document.getElementById('buttons');
for(var c of 'ABCDEFGHIJKLMNOPRSTUVWXYZ') {
	//create button
	var btn =  document.createElement('button');
	btn.setAttribute('type','button');
	btn.setAttribute('id','button');
	btn.setAttribute('class', 'btn btn-primary');
	btn.addEventListener('click', onClick);
	btn.textContent = c;

	//append button
	group.appendChild(btn);
}

var btn2 =document.createElement('button');
btn2.setAttribute('type','button');
btn.setAttribute('id','button2');
btn2.setAttribute('class', 'btn btn-primary');
btn2.textContent = 'Restart';
document.getElementById('secret2').appendChild(btn2);

btn2.addEventListener('click', function onClick2() {counter=0;lettersGuessed='';
	document.getElementById('buttons').innerHTML = "";
	document.getElementById('secret').innerHTML = "";
	el.textContent = getGuessedWord(secret,lettersGuessed)
	for(var c of 'ABCDEFGHIJKLMNOPRSTUVWXYZ') {
		//create button
		var btn =  document.createElement('button');
		btn.setAttribute('type','button');
		btn.setAttribute('id','button');
		btn.setAttribute('class', 'btn btn-primary');
		btn.addEventListener('click', onClick);
		btn.textContent = c;

		//append button
		group.appendChild(btn);
		document.getElementById('situation').setAttribute('src', 'images/phase1.png' );
	}})
btn2.textContent = 'Restart';
document.getElementById('secret2').appendChild(btn2);
console.log('initialized');





