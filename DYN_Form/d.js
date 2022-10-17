'use strict'

var formDef1=
[
  {label:'Название сайта:',kind:'longtext',name:'sitename'},
  {label:'URL сайта:',kind:'longtext',name:'siteurl'},
  {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
  {label:'E-mail для связи:',kind:'shorttext',name:'email'},
  {label:'Рубрика каталога:',kind:'combo',name:'division',
    variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
  {label:'Размещение:',kind:'radio',name:'payment',
    variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
  {label:'Разрешить отзывы:',kind:'check',name:'votes'},
  {label:'Описание сайта:',kind:'memo',name:'description'},
  {label:'Опубликовать:',kind:'submit'},
];
var formDef2=
[
  {label:'Фамилия:',kind:'longtext',name:'lastname'},
  {label:'Имя:',kind:'longtext',name:'firstname'},
  {label:'Отчество:',kind:'longtext',name:'secondname'},
  {label:'Возраст:',kind:'number',name:'age'},
  {label:'Зарегистрироваться:',kind:'submit'},
];
function formCreate (source, parent){
  var doc = document;
  for (var i=0; i<source.length; i++){
      var formElem = source[i];     
      switch (formElem.kind){
        case "longtext":
          var label = doc.createElement('label');
          label.textContent=formElem.label;          
          var input = doc.createElement('input');
            input.type = 'text';
            input.name = formElem.name;
          var br = doc.createElement('br');
          parent.appendChild(label);
          label.appendChild(input);
          parent.appendChild(br);
        break;
        case "number":
          var label = doc.createElement('label');
          label.textContent=formElem.label;          
          var input = doc.createElement('input');  
            input.type = 'number';
            input.name = formElem.name;
          var br = doc.createElement('br')
          parent.appendChild(label);          
          label.appendChild(input);
          parent.appendChild(br);
        break;
        case 'shorttext':
          var label = doc.createElement('label');
            label.textContent = formElem.label;          
          var input = doc.createElement('input');
            input.type = 'email';
            input.name = formElem.name;  
          var br = doc.createElement('br')
            parent.appendChild(label);
            label.appendChild(input); 
            parent.appendChild(br);
        break;
        case 'combo':
          var label = doc.createElement('label');
            label.textContent = formElem.label;           
          var select = doc.createElement('select');
            select.name = formElem.name;
          var subarr = formElem.variants;           
           for (var l=0; l<subarr.length; l++){
            var item = subarr[l];              
            var option = doc.createElement('option');      
              option.textContent = item.text;                          
              select.appendChild(option);
            } 
            var br = doc.createElement('br')
            parent.appendChild(label);
            parent.appendChild(select);             
            parent.appendChild(br);           
        break;
        case 'radio':
          var label = doc.createElement('label');
          label.textContent = formElem.label;            
          parent.appendChild(label);   
          var radioarr = formElem.variants; 
          for (var k=0; k<radioarr.length; k++){
            var radioitem = radioarr[k];  
            var sublabel = doc.createElement('label');      sublabel.textContent = radioitem.text;     
            var input = doc.createElement('input'); 
              input.name = formElem.name;  
              input.type = 'radio'; 
              input.value = radioitem.value;              
              parent.appendChild(sublabel);
              sublabel.appendChild(input);               
             }
            var br = doc.createElement('br')              
            parent.appendChild(br);
        break;
        case 'check':
          var label = doc.createElement('label');
            label.textContent = formElem.label;          
          var input = doc.createElement('input');
            input.type = 'checkbox';
            input.name = formElem.name;  
          var br = doc.createElement('br')        
            parent.appendChild(label);
            label.appendChild(input); 
            parent.appendChild(br);
        break;
        case 'memo':
          var label = doc.createElement('label');
            label.textContent = formElem.label;          
          var textarea = doc.createElement('textarea');
            textarea.name = formElem.name;
          var br = doc.createElement('br');
            parent.appendChild(label);
            label.appendChild(textarea); 
            parent.appendChild(br);
        break; 
        case 'submit':
          var label = doc.createElement('label');          
          var input = doc.createElement('input');
            input.type = 'submit';
            input.value = (formElem.label).replace(':', '');
          var br = doc.createElement('br'); 
            parent.appendChild(label);
            label.appendChild(input); 
            parent.appendChild(br);            
        break; 
      }                   
}                  
};
var formA = formCreate(formDef1, ff1);
var formB = formCreate(formDef2, ff2);