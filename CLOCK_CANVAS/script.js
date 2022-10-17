'use strict'
document.querySelector('#createBtn').addEventListener('click', cvsElem, false);

function cvsElem() {
  let canvasElem = document.createElement ('canvas');
  canvasElem.id = 'clock';
  canvasElem.setAttribute("width", userSetup);
  canvasElem.setAttribute("height", userSetup);
  
  document.body.appendChild(canvasElem); 
  
  createClock();
}



function createClock( ) {
 

    
    let userSetup = parseFloat(document.querySelector('#userSetup').value);
    if (userSetup < 200 || userSetup > 800 || isNaN(userSetup)) {
        return alert('Размер должен составлять от 200 до 800');
    }

    document.forms['clockForm'].classList.add('toHide'); 

    
   
    
    let clock = document.getElementById('clock');
    let context= clock.getContext('2d');

    clock.setAttribute("width", userSetup);
    clock.setAttribute("height", userSetup);

    let clockRadius= userSetup/2-5;
    let clockCenterX = userSetup/2
    let clockCenterY = userSetup/2;
    

    context.fillStyle = 'white';
    context.fillRect(0,0,userSetup,userSetup);  
  
  context.beginPath();
  context.strokeStyle = 'black';
  context.fillStyle = '#fcca66';
  context.lineWidth = 3;
  context.arc(clockCenterX, clockCenterY, clockRadius, 0, Math.PI*2, false);
  context.stroke();
  context.fill();
 
  let clockWidth = userSetup;

// зеленые круги
  for(let i = 1; i <= 12; i++) {

    let angle = parseFloat(i*360/12)/180*Math.PI;
    let numX = clockCenterX+(clockRadius-clockWidth/10)*Math.sin(angle);
    let numY = clockCenterY-(clockRadius-clockWidth/10)*Math.cos(angle);
    let numRadius = clockRadius/8.5;

    context.beginPath();
    context.strokeStyle = 'black';
    context.fillStyle = '#48b382';
    context.lineWidth = 2;
    context.arc(numX, numY, numRadius, 0, Math.PI*2, false);
    context.stroke();
    context.fill();
     }

// цифры
     for(let i = 1; i <= 12; i++) {
     let angle = parseFloat(i*360/12)/180*Math.PI;
     let textX = clockCenterX+(clockRadius-clockWidth/10)*Math.sin(angle);
     let textY = clockCenterY-(clockRadius-clockWidth/10)*Math.cos(angle);
     let textSize = clockWidth/12 + 'px';
     
     context.beginPath();
     context.fillStyle='black';
     context.font= textSize+' Arial';
    if (i > 9) {
        context.fillText(i, textX-clockWidth/20, textY+clockWidth/38)
    }
    else{context.fillText(i, textX-clockWidth/38, textY+clockWidth/38);
     }
     
   }
   
   
   let hourHand = clockRadius - clockRadius * 0.5;
   let minHand = clockRadius - clockRadius/2.8;
   let secHand = clockRadius - clockRadius/6;

     let time = new Date();

  let angleHour = (time.getHours()%12)/12*360+time.getMinutes()/60*(360/12);
  let angleMin = time.getMinutes()/60*360;
  let angleSec = time.getSeconds()/60*360;

// часовая стрелка
  context.beginPath();
  context.lineWidth = clock.offsetWidth/27;
  context.lineCap='round';
  context.moveTo(clockCenterX, clockCenterY);
  context.lineTo(clockCenterX + hourHand*Math.cos(Math.PI/2 -angleHour*(Math.PI/180)),
  clockCenterY - hourHand*Math.sin(Math.PI/2 -angleHour*(Math.PI/180)));
  context.stroke();

  //минутная стрелка
  context.beginPath();
  context.lineWidth = clock.offsetWidth/35;
  context.strokeStyle = 'black';
  context.moveTo(clockCenterX, clockCenterY);
  context.lineTo(clockCenterX + minHand*Math.cos(Math.PI/2 -angleMin*(Math.PI/180)),
        clockCenterY - minHand*Math.sin(Math.PI/2 -angleMin*(Math.PI/180)));
  context.stroke();
  

  //  секундную стрелку
  context.beginPath();
  context.lineWidth = clock.offsetWidth/50;
  context.strokeStyle = 'black';
  context.moveTo(clockCenterX, clockCenterY);
  context.lineTo(clockCenterX + secHand*Math.cos(Math.PI/2 - angleSec*(Math.PI/180)),
  clockCenterY - secHand*Math.sin(Math.PI/2 - angleSec*(Math.PI/180)));
  context.stroke();
  

  let clockHeight= userSetup;
  let textSizeT = clockWidth/12 + 'px';

  context.beginPath();
  context.fillStyle='black';
  context.fillText(time.toLocaleTimeString(), clockCenterX-clockWidth/6, clockCenterY-clockHeight/6);
  context.font= textSizeT +' Arial';
  context.closePath();

  setTimeout(createClock,1000);

}