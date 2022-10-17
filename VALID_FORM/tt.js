"use strict"

var doc = document
var formObject = doc.forms.formFull;
//в первую очередь объявляю переменную для формы
//далее обработчики на потерю фокуса
formObject.elements.razrName.addEventListener('blur', (EO) => razrValid(false), false);
formObject.elements.webName.addEventListener('blur', (EO) => webValid (false), false);
formObject.elements.urlName.addEventListener('blur', (EO) => urlValid(false), false);
formObject.elements.dateName.addEventListener('blur', (EO) => dateValid(false), false);
formObject.elements.visitsName.addEventListener('blur', (EO) => visitValid(false), false);
formObject.elements.emailName.addEventListener('blur', (EO) => emailValid(false), false);
//не допустимо пустая строка и "архив"
formObject.elements.topicName.addEventListener('change', topicValid, false);
//checkbox - не даст снять проставленую ранее галочку
//по этой же причине нет подобного обработчика на радиокнопку, т.е. выделение кнопки снять нельзя
formObject.elements.commentName.addEventListener('click', commentValid, false);
var radioa = document.getElementById('buttona');
var radiob = document.getElementById('buttonb');
var radioc = document.getElementById('buttonc');
radioa.onclick=tariffValid;
radiob.onclick=tariffValid;
radioc.onclick=tariffValid;
formObject.elements.contentName.addEventListener('blur', (EO) => contentValid(false), false);
formObject.onsubmit = (EO) =>{
  var meet = true;
//все 10 форм, radiobutton проверяется только здесь
    meet = razrValid(meet) && meet;
    meet = webValid(meet) && meet;
    meet = urlValid(meet) && meet;
    meet = dateValid(meet) && meet;
    meet = visitValid(meet) && meet;
    meet = emailValid(meet) && meet; 
    meet = topicValid(meet) && meet;
    meet = tariffValid(meet) && meet;
    meet = commentValid(meet) && meet;
    meet = contentValid(meet) && meet;
    if (!meet){
      EO.preventDefault()
    }
};
//Поле разработчики - не должно быть пустое + не более 30 символов
function razrValid(errfocus) {
  var razr = formObject.razrName;
  var razrValue = razr.value;
    if (razrValue == '' || razrValue.length > 30) {
      doc.getElementById('err1').innerHTML = "Введите свое имя (не более 30 символов)";
      err1.style.color = 'red';
        if(errfocus){
          razr.focus();
        }
      razr.scrollIntoView();
      return false;
    }
    else {
      doc.getElementById('err1').innerHTML = '';    
      return true;
    } 
}
//Поле название сайта - не должно быть пустое + не более 20 символов
function webValid(errfocus) {
  var web = formObject.webName;
  var webValue = web.value;
    if (webValue == '' || webValue.length > 20) {
      doc.getElementById('err2').innerHTML = "Введите название сайта (не более 20 символов)";
      err2.style.color = 'red';
        if(errfocus){
          web.focus();
        }   
      web.scrollIntoView();
      return false;
    }
    else {
      doc.getElementById('err2').innerHTML = '';    
      return true;
    }
}
//поле URL сайта - не должно быть пустое + не более 25 символов
function urlValid(errfocus) {
  var url = formObject.urlName;
  var urlValue = url.value;
    if (urlValue == '' || urlValue.length > 25) {
      doc.getElementById('err3').innerHTML = "Введите URL сайта (не более 30 символов)";
      err3.style.color = 'red';
        if(errfocus){
          url.focus();
        } 
      url.scrollIntoView();
      return false;
    }
    else {
      doc.getElementById('err3').innerHTML = '';    
      return true;
    }
}
//Дата запуска сайта - не пустое + равно 8 символов (пример в сообщении об ошибке)
function dateValid(errfocus) {
  var date = formObject.dateName;
  var dateValue = date.value;
    if (dateValue == '' || dateValue.length !== 8) {
      doc.getElementById('err4').innerHTML = "Введите дату в цифровом формате дд.мм.гг";
      err4.style.color = 'red';
        if(errfocus){
          date.focus();
        }
      date.scrollIntoView();
      return false;
    }
    else {
      doc.getElementById('err4').innerHTML = '';    
      return true;
    }
}
//Посетителей в сутки - не пустое + не NaN
function visitValid(errfocus) {
  var visit = formObject.visitsName;
  var visitValue = visit.value;
    if (isNaN(visitValue) || visitValue == '') {
      doc.getElementById('err5').innerHTML = "Введите количество посетителей";
      err5.style.color = 'red';
        if(errfocus){
          visit.focus();
        }
      visit.scrollIntoView();
      return false;
    }
    else {
      doc.getElementById('err5').innerHTML = '';    
      return true;
    }
}
//Email - не пустое + не пробел
function emailValid(errfocus) {
  var email = formObject.emailName;
  var emailValue = email.value;
    if (emailValue == ''|| emailValue == ' ' ) {
      doc.getElementById('err6').innerHTML = "Введите корректный email";
      err6.style.color = 'red';
        if(errfocus){
          email.focus();
        }
      email.scrollIntoView();
      return false;
    }
    else {
      doc.getElementById('err6').innerHTML = '';   
      return true;
    }
}
//Рубрика каталога - не значение 1(пустое) или 6(архив) 
function topicValid() {
  var topic = formObject.topicName;
  var topicValue = topic.value;
    if (topicValue == 1 || topicValue == 6 ) {
      doc.getElementById('err7').innerHTML = "Вы выбрали несуществующий/ неактуальный каталог";
      err7.style.color = 'red';
      topic.scrollIntoView();
      return false;
    }
    else {
      doc.getElementById('err7').innerHTML = '';    
      return true;
    }
}
//Размещение - проверка только по submit, так как снять выделение кнопки нельзя
function tariffValid() {
  var tariff = formObject.tariffName;
  var tariffValue = false;
    for(var i=0; i<tariff.length;i++){
      if (tariff[i].checked == true) {
        tariffValue = true;
        doc.getElementById('err8').innerHTML = '';   
        return true; 
      }        
    }
    if (!tariffValue){
      doc.getElementById('err8').innerHTML = "Подтвердите тарифразмещения";
      err8.style.color = 'red';
      return false;
    }
}
//Разрешить отзывы - пустое поле/ не пустое
  function commentValid() {
  var comment = formObject.commentName;  
  var commentValue = comment.checked;
    if (!commentValue) {
      doc.getElementById('err9').innerHTML = "Подтвердите отзывы";
      err9.style.color = 'red'; 
      comment.scrollIntoView();
      return false;
    }
    else {
      doc.getElementById('err9').innerHTML = '';   
      return true;
    }
}
//Описание сайта - не пустое + не более 50 символов
function contentValid(errfocus) {
  var content = formObject.contentName;
  var contentValue = content.value;
    if (contentValue.trim() == '' || contentValue.length>50) {
      doc.getElementById('err10').innerHTML = "Заполните форму (не более 50 символов)";
      err10.style.color = 'red';
        if(errfocus){
          content.focus();
        }
      content.scrollIntoView();
      return false;
    }
    else {
      doc.getElementById('err10').innerHTML = '';    
      return true;
    }
}

//setInterval(function(){
    //err10.style.opacity ^= 1;
      //},1e3);



      formTag.addEventListener ('focusout', validateInfoForm,false);
formTag.addEventListener('change', validateInfoForm, false);
formTag.addEventListener ('change', callOffWarning, false);
formTag.addEventListener('submit',validateAllInfoForm,false);

function validateInfoForm(eo) {
    eo=eo||window.event;
    const errTag = document.getElementsByTagName('span')
    }
