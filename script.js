var text = document.createElement('div');
text.className = 'text';
text.innerHTML = 'Here we are';
document.body.appendChild(text);

var desk = document.createElement('div');
desk.className = 'desk';
document.body.appendChild(desk);

for (var i = 65; i <= 72;i++){
var tabup = document.createElement('div');
tabup.className = 'tabup';
tabup.innerHTML = String.fromCharCode(i);
desk.appendChild(tabup);
}

for(var i= 1 ;i<= 8;i++){
  for(var j = 65;j<=72;j++){
    if((i+j)%2){
      var black = document.createElement('div');
      black.className = 'black ';
      black.id = String.fromCharCode(j)+i;
      desk.appendChild(black);
    }
    else{
      var white = document.createElement('div');
      white.className = 'white ';
      white.id = String.fromCharCode(j)+i;
      desk.appendChild(white);
    }
  }
}

/*for(var i=0;i<8;i++){
  for(var j = 0;j<8;j++){
    if((i+j)%2){
      var black = document.createElement('div');
      black.className = 'black ';
      desk.appendChild(black);
    }
    else{
      var white = document.createElement('div');
      white.className = 'white ';
      desk.appendChild(white);
    }
  }
}*/

for (var i = 65; i <= 72;i++){
var tabdown = document.createElement('div');
tabdown.className = 'tabdown';
tabdown.innerHTML = String.fromCharCode(i);
desk.appendChild(tabdown);
}

var colleft = document.createElement('div');
colleft.className ='colleft';
document.body.appendChild(colleft);

for (var i = 1; i <=8;i++){
  var number = document.createElement('div');
  number.className = 'number';
  number.innerHTML = ''+i;
  colleft.appendChild(number);
}

var colright = document.createElement('div');
colright.className ='colright';
document.body.appendChild(colright);

for (var i = 1; i <=8;i++){
  var number2 = document.createElement('div');
  number2.className = 'number2';
  number2.innerHTML = ''+i;
  colright.appendChild(number2);
}
