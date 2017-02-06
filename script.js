var text = document.createElement('div'); // создаем заголовок
text.className = 'text';
text.innerHTML = 'Here we are';
document.body.appendChild(text);

var desk = document.createElement('div'); // формируем шахматную доску
desk.className = 'desk';
document.body.appendChild(desk);

for (var i = 0; i <8;i++){
var tabup = document.createElement('div'); // буквы сверху
tabup.className = 'tabup';
tabup.innerHTML = String.fromCharCode(65+i);
desk.appendChild(tabup);
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

desk.onclick = function(event){
  var coord = document.getElementById('coordinates');
  coord.innerHTML = event.target.id;
}

for (var i = 0; i <8;i++){  //буквы снизу
var tabdown = document.createElement('div');
tabdown.className = 'tabdown';
tabdown.innerHTML = String.fromCharCode(65+i);
desk.appendChild(tabdown);
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

