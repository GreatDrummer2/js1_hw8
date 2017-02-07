var text = document.createElement('div'); // создаем заголовок
text.className = 'text';
text.innerHTML = 'Here we are';
document.body.appendChild(text);

var desk = document.createElement('div'); // формируем шахматную доску
desk.className = 'desk';
document.body.appendChild(desk);


var tup = document.createElement('div'); // 
tup.className = 'tup';
document.body.appendChild(tup);

var tdown = document.createElement('div'); // 
tdown.className = 'tdown';
document.body.appendChild(tdown);

for (var i = 0; i <8;i++){  //буквы снизу
var tabdown = document.createElement('div');
tabdown.className = 'tabdown';
tabdown.innerHTML = String.fromCharCode(65+i);
tdown.appendChild(tabdown);
}


for (var i = 0; i <8;i++){
var tabup = document.createElement('div'); // буквы сверху
tabup.className = 'tabup';
tabup.innerHTML = String.fromCharCode(65+i);
tup.appendChild(tabup);
}


for(var i= 1 ;i<= 8;i++){
  for(var j = 0;j<8;j++){
    if((i+j)%2){
      var black = document.createElement('div');
      black.className = 'black';
      black.id = String.fromCharCode(65+j)+i;
      desk.appendChild(black);
    }
    else{
      var white = document.createElement('div');
      white.className = 'white';
      white.id = String.fromCharCode(65+j)+i;
      desk.appendChild(white);
    }
  }
}
var coord;
desk.onclick = function(event){
  coord = document.getElementById('coordinates');
  coord.innerHTML = event.target.id;
}
var counter_for_keyboard = 0;
document.body.onkeydown = function(event){ 
  var coord = document.getElementById('coordinates');
  if(event.keyCode == 39){
    coord = document.getElementById('coordinates');
    if(counter_for_keyboard == 64) counter_for_keyboard = 0;
    coord.innerHTML = desk.children[counter_for_keyboard].id;
    counter_for_keyboard++;
  }
  else if(event.keyCode == 37){
     counter_for_keyboard--;
    if(counter_for_keyboard<=0) counter_for_keyboard=64;
    coord.innerHTML = desk.children[counter_for_keyboard-1].id;
  }
  else if(event.keyCode == 38){
    ;
  }
  else if(event.keyCode == 40){
    coord.innerHTML = desk.children[counter_for_keyboard+8].id;
    counter_for_keyboard=counter_for_keyboard+8;
  }
}

var colleft = document.createElement('div'); //боковые цифры
colleft.className ='colleft';
document.body.appendChild(colleft);

for (var i = 1; i <=8;i++){
  var number = document.createElement('div'); //создание цифр
  number.className = 'number';
  number.innerHTML = ''+i;
  colleft.appendChild(number);
}

var colright = document.createElement('div'); //боковые цифры
colright.className ='colright';
document.body.appendChild(colright);

for (var i = 1; i <=8;i++){
  var number2 = document.createElement('div'); //создание цифр
  number2.className = 'number2';
  number2.innerHTML = ''+i;
  colright.appendChild(number2);
}

