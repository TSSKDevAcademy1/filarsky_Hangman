/* var secret = 'Nazdar';
var lettersGuessed = 'a';

function getGuessedWord(secret, lettersGuessed) {
var length = secret.length;
var length2 = lettersGuessed.length;
var i;
var j;
var el = document.getElementById('secret');
var array = secret.split('');
for(i = 0;i<length;i++){
	for(j=0;j<length2;j++){
		if(array[i] != lettersGuessed[j]) {
			array[i] = '_';
          //console.log(secret[i]);
		}
	}
  
}
	el.textContent = array;
  return array;
}

var element;
var g;
var t;
for(g=65;g<=90;g++){
	element = document.createElement('button');
	element.setAtribute('type','button');
	element.textContent(String.fromCharCode(65));
	t = decument.getElementById('buttons');
	t.appendChild(element);
} */
////
var secret ='JAVASCRIPT';
var lettersGuessed ='';
var counter = 1;

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

  	for(var btn of document.getElementById('button')){
  		btn.setAttribute('disabled', 'disabled');
  	}
  }

}

//initialization
var el= document.getElementById('secret');
el.textContent = getGuessedWord(secret,lettersGuessed);

var group = document.getElementById('buttons');
for(var c of 'ABCDEFGHIJKLMNOPRSTUVWXYZ') {
	//create button
	var btn =  document.createElement('button');
	btn.setAttribute('type','button');
	btn.setAttribute('class', 'btn btn-primary');
	btn.addEventListener('click', onClick);
	btn.textContent = c;

	//append button
	group.appendChild(btn);
}

console.log('initialized');

