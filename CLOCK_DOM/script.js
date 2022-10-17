'use strict'
document.querySelector('#createBtn').addEventListener('click', createClock, false);

function createClock(eo) {
  eo=eo || window.event;
  eo.preventDefault();

    let userSetup = parseFloat(document.querySelector('#userSetup').value);    
  if ( userSetup < 200 ||  userSetup > 800 || isNaN(userSetup) ) {
    return alert('Размер должен составлять от 200 до 800');
  }  
 
  
let clockFace = document.createElement('div');


 clockFace.style.width = userSetup +'px';
 clockFace.style.height = userSetup +'px'; 

    clockFace.className = "clock";
    document.body.appendChild(clockFace);

    
    createClockNum();
    createClockCenter();
    createHandHour();
    createHandMin();
    createHandSec();
    createDate();
  
    pos();
    setInterval(setHands,1000);
    document.forms['clockForm'].classList.add('toHide');
  }



  function createClockNum() {
    let clockFace = document.querySelector('.clock');
  
    for(let i = 0; i <= 12; i++) {
      let clockNum = document.createElement('div');
      clockNum.style.width = clockFace.offsetWidth/9 + 'px'; 
      clockNum.style.height = clockFace.offsetHeight/9 + 'px'; 
  
      let clockNumText = document.createTextNode(i); 
      clockNum.appendChild(clockNumText);
      clockNum.className = 'clock_num';   
  
      clockFace.appendChild(clockNum);
  
      clockNum.style.fontSize = clockNum.offsetWidth/1.5 + 'px'; 
    }
  }

  
  function createClockCenter () {
    let clockFace = document.querySelector('.clock');
  
    let clockCenter = document.createElement('div');
    clockCenter.style.width = 3 + 'px'; 
    clockCenter.style.height = 3 + 'px'; 
    clockCenter.className = 'clock_center';
  
    clockFace.appendChild(clockCenter);
  }

  function createHandHour () {
    let clockFace = document.querySelector('.clock');
  
    let handHour = document.createElement('div');
    handHour.style.width = clockFace.offsetHeight/25 + 'px';
    handHour.style.height = clockFace.offsetWidth/3 + 'px';
    handHour.className = 'hand_hour';
    clockFace.appendChild(handHour);
  }
 
  function createHandMin () {
    let clockFace = document.querySelector('.clock');
  
    let handMin = document.createElement('div');
    handMin.style.width = clockFace.offsetHeight/40 + 'px';
    handMin.style.height = clockFace.offsetWidth/2.5 + 'px';
    handMin.className = 'hand_min';
    clockFace.appendChild(handMin);
  }

  function createHandSec () {
    let clockFace = document.querySelector('.clock');
  
    let handSec = document.createElement('div');
    handSec.style.width = clockFace.offsetHeight/55 + 'px';
    handSec.style.height = clockFace.offsetHeight/2.1 + 'px';
    handSec.className = 'hand_sec';
    clockFace.appendChild(handSec);
  }

  function createDate () {
    let clockFace = document.querySelector('.clock');
  
    let date = document.createElement('div');
    date.style.width = 100 + '%';
    date.style.height = date.offsetHeight + 'px';
    date.className = 'clock_date';
    clockFace.appendChild(date);
  
    date.style.fontSize = clockFace.offsetHeight/10 + 'px';
  }
 
  // Позиционирование элементов
  function pos() { 
    let clockFace=document.querySelector('.clock');
    let clockNum=document.querySelectorAll('.clock_num');
    let clockDate=document.querySelector('.clock_date');  
    let clockCenter=document.querySelector('.clock_center');
    let handHour=document.querySelector('.hand_hour');
    let handMin=document.querySelector('.hand_min');
    let handSec=document.querySelector('.hand_sec');
  
   
    let clockFaceCenterX = clockFace.offsetWidth/2;  
    let clockFaceCenterY = clockFace.offsetHeight/2;
  
    // Позиционирование таблички с временем
    clockDate.style.left = clockFaceCenterX-clockDate.offsetWidth/2 + 'px';
    clockDate.style.top = clockFaceCenterY-clockFaceCenterY/2 + 'px';
  
    // позиционирование центра
    clockCenter.style.left = clockFaceCenterX-clockCenter.offsetWidth/2 + 'px';
    clockCenter.style.top = clockFaceCenterY-clockCenter.offsetHeight/2 + 'px';
  
    // позиционирование часовой стрелки
    handHour.style.left = clockFaceCenterX-handHour.offsetWidth/2 + 'px';
    handHour.style.top = clockFaceCenterY-(handHour.offsetHeight*0.9) + 'px';
   
    handHour.style.transformOrigin = 'center 90%';
  
    // позиционирование минутной стрелки 
    handMin.style.left = clockFaceCenterX-handMin.offsetWidth/2 + 'px';
    handMin.style.top = clockFaceCenterY-(handMin.offsetHeight*0.9) + 'px';
    
    handMin.style.transformOrigin = 'center 90%';
  
    // позиционирование секундной стрелки
    handSec.style.left = clockFaceCenterX-handSec.offsetWidth/2 + 'px';
    handSec.style.top = clockFaceCenterY-(handSec.offsetHeight*0.9) + 'px';
    
    handSec.style.transformOrigin ='center 90%';
  
    
    for(let i = 0; i < clockNum.length; i++){
  
      let angle = parseFloat(i*360/12)/180*Math.PI;
      let radius = parseFloat(clockFace.offsetWidth/2.5);
  
      let clockNumCenterX = clockFaceCenterX+radius*Math.sin(angle);
      let clockNumCenterY = clockFaceCenterY-radius*Math.cos(angle);
  
      clockNum[i].style.left = Math.round(clockNumCenterX-clockNum[i].offsetWidth/2) + 'px';
      clockNum[i].style.top = Math.round(clockNumCenterY-clockNum[i].offsetHeight/2) + 'px';
    }
  
    setHands(); 
  }
  
  function setHands() {
    let dateTime = new Date();
  
    let hour = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    
    let angleHour =  360/12* (hour+min /60)
    let angleMin =  360/60*min  
    let angleSec = 360/60*sec;  
  
    document.querySelector('.clock_date').innerHTML = dateTime.toLocaleTimeString();
    document.querySelector('.hand_hour').style.transform = 'rotate(' + angleHour +'deg)';
    document.querySelector('.hand_min').style.transform = 'rotate(' + angleMin +'deg)';
    document.querySelector('.hand_sec').style.transform = 'rotate(' + angleSec +'deg)';
  }
  

  