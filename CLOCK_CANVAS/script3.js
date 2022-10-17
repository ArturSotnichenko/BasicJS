'use strict'
document.querySelector('#createBtn').addEventListener('click', createClock, false);

function createClock() {


    let userSetup = parseFloat(document.querySelector('#userSetup').value);
    if (userSetup < 200 || userSetup > 800 || isNaN(userSetup)) {
        return alert('Размер должен составлять от 200 до 800');
    }

    document.forms['clockForm'].classList.add('toHide'); // убираем поле ввода 

    let clockFraim = document.createElement('div'); // создаем div и задаем размеры


    let clockFraimWidth = clockFraim.style.width = userSetup + 'px';
    let clockFraimHeight = clockFraim.style.height = userSetup + 'px';

    clockFraim.className = "clock";
    document.body.appendChild(clockFraim);


    let svgElem = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); // создаем сам SVG
    svgElem.setAttribute('width', clockFraimWidth);
    svgElem.setAttribute('height', clockFraimHeight);
    svgElem.id = 'clock';
    clockFraim.appendChild(svgElem);


    let clock = document.getElementById('clock');

    let clockWidth = parseInt(clock.getAttribute('width'));
    let clockHeigth = parseInt(clock.getAttribute('height'));
    let clockRadius = parseFloat(clockHeigth / 2);
    let clockCenterX = clockWidth / 2;
    let clockCenterY = clockHeigth / 2;

    let clockCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle'); // содаем форму часов
    clockCircle.setAttribute('fill', 'yellow');
    clockCircle.setAttribute('cx', clockCenterX);
    clockCircle.setAttribute('cy', clockCenterY);
    clockCircle.setAttribute('r', clockRadius);

    clock.appendChild(clockCircle);

    // цыфры на часах
    for (let i = 0; i <= 12; i++) {


        let nums = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        nums.setAttribute('class', 'nums')
        clock.appendChild(nums);

        let clockNum = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        let angle = parseFloat(i * 360 / 12) / 180 * Math.PI;

        clockNum.setAttribute('fill', 'green');
        clockNum.setAttribute('cx', clockCenterX + (clockCenterY - clockWidth / 10) * Math.sin(angle));
        clockNum.setAttribute('cy', clockCenterY - (clockRadius - clockWidth / 10) * Math.cos(angle));
        clockNum.setAttribute('r', clockRadius / 10);

        nums.appendChild(clockNum);

        let clockNumCenterX = clockNum.getAttribute('cx');
        let clockNumCenterY = clockNum.getAttribute('cy');
        let clockNumRadius = clockNum.getAttribute('r');


        let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', clockNumCenterX);
        text.setAttribute('y', Number(clockNumCenterY) + clockNumRadius / 2);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('font-size', clockNumRadius * 1.5);

        text.textContent = [i];

        nums.appendChild(text);

    }

 // Создаем часовую стрелку
 let handHour = document.createElementNS('http://www.w3.org/2000/svg','line');
 handHour.setAttribute('stroke','black');
 handHour.setAttribute('stroke-width', clockRadius/15);
 handHour.setAttribute('x1',clockCenterX);
 handHour.setAttribute('y1',clockCenterY*1.1);
 handHour.setAttribute('x2',clockCenterX);
 handHour.setAttribute('y2',clockCenterY*0.5);
 handHour.setAttribute('stroke-linecap', 'round');

 handHour.id = 'hand_hour';

 clock.appendChild(handHour);

// Создаем минутную стрелку
let handMin = document.createElementNS('http://www.w3.org/2000/svg','line');
handMin.setAttribute('stroke','black');
handMin.setAttribute('stroke-width',clockRadius/30);
handMin.setAttribute('x1',clockCenterX);
handMin.setAttribute('y1',clockCenterY*1.1);
handMin.setAttribute('x2',clockCenterX);
handMin.setAttribute('y2',clockCenterY*0.25);
handMin.setAttribute('stroke-linecap', 'round');

handMin.id = 'hand_min';

clock.appendChild(handMin); 

// Создаем секундную стрелку
 let handSec = document.createElementNS('http://www.w3.org/2000/svg','line');
 handSec.setAttribute('stroke','black');
 handSec.setAttribute('stroke-width',clockRadius/83.33);
 handSec.setAttribute('x1',clockCenterX);
 handSec.setAttribute('y1',clockCenterY*1.1);
 handSec.setAttribute('x2',clockCenterX);
 handSec.setAttribute('y2',clockCenterY*0.15);
 handSec.setAttribute('stroke-linecap', 'round');

 handSec.id = 'hand_sec';

 clock.appendChild(handSec);

// создаем табличные часы
let date = document.createElementNS('http://www.w3.org/2000/svg','text');
date.setAttribute('x', clockCenterX);
date.setAttribute('y', clockCenterY-clockRadius/2.75);
date.setAttribute('text-anchor', 'middle');
date.setAttribute('font-size', clockRadius/5);
date.id = 'date';

svgElem.appendChild(date);


setHands();
  setInterval(setHands,1000);
}

function setHands() {
    let dateTime = new Date();
  
    let hour = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    
    
    let angleHour =  360/12* (hour+min /60)
    let angleMin =  360/60*min  
    let angleSec = 360/60*sec;  
  
    let clockCenterXX = parseInt(document.getElementById('clock').getAttribute('width'))/2;
    let clockCenterYY = parseInt(document.getElementById('clock').getAttribute('height'))/2;
  
    document.getElementById('date').textContent = dateTime.toLocaleTimeString();
    document.getElementById('hand_hour').setAttribute('transform', 'rotate('+ angleHour +' '+clockCenterXX+' '+clockCenterYY+')');
    document.getElementById('hand_min').setAttribute('transform', 'rotate('+ angleMin +' '+clockCenterXX+' '+clockCenterYY+')');
    document.getElementById('hand_sec').setAttribute('transform', 'rotate('+ angleSec +' '+clockCenterXX+' '+clockCenterYY+')');
  }
  
 
  
  