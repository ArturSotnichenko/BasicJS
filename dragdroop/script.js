"use strict";

var balls = document.getElementsByTagName('img');

for(var i=balls.length-1; i>=0; i--) {
  var ball = balls[i];
  ball.style.position = 'absolute'
  ball.style.left = ball.offsetLeft + 'px';
  ball.style.top = ball.offsetTop + 'px';
  ball.style.cursor = 'pointer';
  ball.style.margin = '0px';  

  ball.addEventListener('mousedown', mouseDown, false)

  ball.ondragstart = function() {
    return false;
  };
}

function mouseDown(EO) {
  EO = EO||window.event;
  var elem = EO.target;
  var posElem = getElementPos(elem);
  var offsetX = EO.pageX - posElem.left;
  var offsetY = EO.pageY - posElem.top;

  document.body.appendChild(elem);

  function moveElem(EO) {
    elem.style.left = EO.pageX - offsetX + 'px';
    elem.style.top = EO.pageY - offsetY + 'px';
  }

  document.onmousemove = function(EO) {
    EO = EO||window.event;
    moveElem(EO);
  };

  elem.onmouseup = function() {
    document.onmousemove = null;
    elem.onmouseup = null;
  };

}

function getElementPos(elem) {
  var bbox=elem.getBoundingClientRect();
  return {
      left: bbox.left+window.pageXOffset,
      top: bbox.top+window.pageYOffset
  };
}