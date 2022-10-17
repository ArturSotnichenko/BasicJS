var formDef1 =
    [
        { label: 'Название сайта:', kind: 'longtext', name: 'sitename' },
        { label: 'URL сайта:', kind: 'longtext', name: 'siteurl' },
        { label: 'Посетителей в сутки:', kind: 'number', name: 'visitors' },
        { label: 'E-mail для связи:', kind: 'shorttext', name: 'email' },
        {
            label: 'Рубрика каталога:', kind: 'combo', name: 'division',
            variants: [{ text: 'здоровье', value: 1 }, { text: 'домашний уют', value: 2 }, { text: 'бытовая техника', value: 3 }]
        },
        {
            label: 'Размещение:', kind: 'radio', name: 'payment',
            variants: [{ text: 'бесплатное', value: 1 }, { text: 'платное', value: 2 }, { text: 'VIP', value: 3 }]
        },
        { label: 'Разрешить отзывы:', kind: 'check', name: 'votes' },
        { label: 'Описание сайта:', kind: 'memo', name: 'description' },
        { caption: 'Опубликовать', kind: 'submit' },
    ];

var formDef2 =
    [
        { label: 'Фамилия:', kind: 'longtext', name: 'lastname' },
        { label: 'Имя:', kind: 'longtext', name: 'firstname' },
        { label: 'Отчество:', kind: 'longtext', name: 'secondname' },
        { label: 'Возраст:', kind: 'number', name: 'age' },
        { caption: 'Зарегистрироваться', kind: 'submit' },
    ];

function buildForm(formDef, formElem) {
   
    formDef.forEach( elemDef => {
        switch (elemDef.kind) {
            case 'longtext': {
                const labelElem = document.createElement('span');
                labelElem.innerHTML = elemDef.label;
                const inputElem = document.createElement('input');
                inputElem.type = "text";
                inputElem.name = elemDef.name
                formElem.appendChild(labelElem);
                formElem.appendChild(inputElem);
                
                break;
            }

            case 'number': {
                const labelElem = document.createElement('span');
                labelElem.innerHTML = elemDef.label;
                const inputElem = document.createElement('input');
                inputElem.type = "number";
                inputElem.name = elemDef.name
                formElem.appendChild(labelElem);
                formElem.appendChild(inputElem);
               
                break;
            }
        
            case 'shorttext': {
                const labelElem = document.createElement('span');
                labelElem.innerHTML = elemDef.label;
                const inputElem = document.createElement('input');
                inputElem.type = "email";
                inputElem.name = elemDef.name
                formElem.appendChild(labelElem);
                formElem.appendChild(inputElem);
            

                break;
            }
            case 'combo': {
                const labelElem = document.createElement('span');
                labelElem.innerHTML = elemDef.label;
                const selectElem = document.createElement('select');
                 selectElem.name = elemDef.name
                 const br = document.createElement('br');
                const subarr =  elemDef.variants;
                for (let i=0; i<subarr.length; i++){
                    let  item = subarr[i];
                    let optionElem = document.createElement('option');
                    optionElem.textContent = item.text;       

                    selectElem.appendChild(optionElem);
                }
             
                formElem.appendChild(labelElem);
                formElem.appendChild(selectElem);
                formElem.appendChild(br);


                break;
            }
            case 'radio': {
                const labelElem = document.createElement('span');
                labelElem.innerHTML = elemDef.label;
                formElem.appendChild(labelElem);
                const br = document.createElement('br');
              let radioarr = elemDef.variants;
              for ( let k=0; k<radioarr.length; k++){
                let radioitem = radioarr[k];  
                const sublabel = document.createElement('span');    
                sublabel.textContent = radioitem.text;  
              const inputElem = document.createElement('input');
                inputElem.type = "radio";  
                inputElem.name = elemDef.name;
                inputElem.value = radioitem.value;
               
                formElem.appendChild(sublabel);
                  formElem.appendChild(inputElem);
              }
              formElem.appendChild(br);
                break;
            }
           
            case 'check': {
                const labelElem = document.createElement('span');
                labelElem.innerHTML = elemDef.label;
                const inputElem = document.createElement('input');
                inputElem.type = "checkbox";
                inputElem.name = elemDef.name
                const br = document.createElement('br');
                   formElem.appendChild(labelElem);
                formElem.appendChild(inputElem);
                formElem.appendChild(br);
                break;
            
        }
        case 'memo': {
            const labelElem = document.createElement('span');
            labelElem.innerHTML = elemDef.label;
            const textareaElem = document.createElement('textarea');
            textareaElem.type = "textarea";
            textareaElem.name = elemDef.name
            formElem.appendChild(labelElem);
            formElem.appendChild(textareaElem);
            break;
        
    }

    case 'submit': {
        const labelElem = document.createElement('span');
        labelElem.innerHTML = elemDef.caption;
        const inputElem = document.createElement('input');
        inputElem.type = "submit";
        inputElem.name = elemDef.name
        inputElem.value = (elemDef.caption).replace(':', '');
        ;
        formElem.appendChild(inputElem);

        break;
    }

        }
    });

}
let form1 = buildForm(formDef1, formElem1);
let form2 = buildForm(formDef2, formElem2);