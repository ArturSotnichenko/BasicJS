'use strict'


function validDevName (autoFocus) {
   let  errCount =0;
   let  devNameErr = document.getElementById('err1')

  
    if (document.forms.Info.devName.value === "") {
        devNameErr.innerHTML = 'Заполните поле'
    errCount++;
    }
    else if (document.forms.Info.devName.value.length < 3) {
        devNameErr.innerHTML = 'Поле должно содержать не менее 3 символов'
        errCount++;  
    } 
    else {
        devNameErr.innerHTML = ''
    }
    
    
if ( errCount && autoFocus ) {
    document.forms.Info.devName.focus();
  }
  return errCount; 

}


function validwebSiteName(autoFocus) {
    let  errCount =0;
    let webSiteNameErr = document.getElementById('err2')
if (document.forms.Info.webSiteName.value === "") {
    webSiteNameErr.innerHTML = 'Заполните поле'
errCount++;
}
else if (document.forms.Info.webSiteName.value.length > 15) {
    webSiteNameErr.innerHTML = 'Поле должно содержать не более 15 символов'
    errCount++;  
} 
else {
    webSiteNameErr.innerHTML = ''
}



if ( errCount && autoFocus ) {
    document.forms.Info.webSiteName.focus();
  }
  return errCount;  

}

function validUrlName (autoFocus) {

let  errCount =0;
    let urlNameErr= document.getElementById('err3')
   
    if (document.forms.Info.urlName.value === "") {
        urlNameErr.innerHTML = 'Заполните поле'
    errCount++;
    }

    else if (document.forms.Info.urlName.value < 10 || !document.forms.Info.urlName.value.includes('http://'))  {
        urlNameErr.innerHTML = 'URL не может быть менее 10 символов, должен содержать протокол "http://" '
        errCount++;}
    else {
        urlNameErr.innerHTML = ''
    }
    
       
    if ( errCount && autoFocus ) {
        document.forms.Info.urlName.focus();
      }
      return errCount;  
    
    }


function validwebSiteDate (autoFocus) {

    let  errCount =0;
    let webSiteDateErr = document.getElementById('err4')
    let webSiteDate = new Date (document.forms.Info.webSiteDate.value)
    if (document.forms.Info.webSiteDate.value === "") {
        webSiteDateErr.innerHTML = 'Заполните поле'
    errCount++;
    }
    else if (webSiteDate .getFullYear() < 1992)  {
        webSiteDateErr.innerHTML = 'Необходимо указать дату не ранее 1992 года'
        errCount++; }
    else {
        webSiteDateErr.innerHTML = ''
    }
    
    
    
    
    if ( errCount && autoFocus ) {
        document.forms.Info.webSiteDate.focus();
      }
      return errCount;  
    
    }


    function validvisPerDay (autoFocus) {

        let  errCount =0;
        let visPerDayErr= document.getElementById('err5')
        if (document.forms.Info.visPerDay.value === "") {
            visPerDayErr.innerHTML = 'Заполните поле'
        errCount++;
        }

        else if (document.forms.Info.visPerDay.value < 3 )  {
            visPerDayErr.innerHTML = 'Число должно быть больше 3'
            errCount++;
        }
        else {
            visPerDayErr.innerHTML = ''
        }
        
       
        
        
        if ( errCount && autoFocus ) {
            document.forms.Info.visPerDay.focus();
          }
          return errCount;  

    }



    function validemailName (autoFocus) {

        let  errCount =0;
        let emailNameErr= document.getElementById('err6')
        if (document.forms.Info.emailName.value === "") {
            emailNameErr.innerHTML = 'Заполните поле'
        errCount++;
        }
        else if (!document.forms.Info.emailName.value.includes ('@') )  {
            emailNameErr.innerHTML = 'Поле должно содержать "@"'
            errCount++;
        }
        else {
            emailNameErr.innerHTML = ''
        }
        
       
        
        if ( errCount && autoFocus ) {
            document.forms.Info.emailName.focus();
          }
          return errCount;  

    }



    function validrubricName(autoFocus) {
        let  errCount =0;
        let rubricNameErr= document.getElementById('err7')
      
       

        if (document.forms.Info.rubricName.value === "3") {
            rubricNameErr.innerHTML = 'Этот раздел в разработке'
        errCount++;
        }


        else {
            rubricNameErr.innerHTML = ''
        }
          
        
        if ( errCount && autoFocus ) {
            document.forms.Info.rubricName.focus();
          }
          return errCount;  

    }



    function validcostName(autoFocus) {
        let  errCount =0;
        let costNameErr= document.getElementById('err8')
    
  
        switch(document.forms.Info.costName.value) {
            case (''):
                costNameErr.innerHTML = "Заполните поле";
              errCount++;
              break;
            case ('1'):
                costNameErr.innerHTML = "в данный момент недоступен";
              errCount++;
              break;
            case ('2'):
                costNameErr.innerHTML = "доступен только  VIP";
              errCount++;
              break;
            default: 
            costNameErr.innerHTML="";
          }
       
        
        if ( errCount && autoFocus ) {
            document.forms.Info.costName [2].focus();
          }
          return errCount;  

    }
   
    function validcommentName(autoFocus) {
        let  errCount =0;
        let commentNameErr= document.getElementById('err9')
      
  
        if (!document.forms.Info.commentName.checked) {
            commentNameErr.innerHTML = 'Заполните поле'
        errCount++;
        }
        
        else {
            commentNameErr.innerHTML = ''
        }
          
        
        if ( errCount && autoFocus ) {
            document.forms.Info.commentName.focus();
          }
          return errCount;  

    }

    function validcontentName(autoFocus) {
        let  errCount =0;
        let contentNameErr = document.getElementById('err10')
      
  
        if (document.forms.Info.contentName.value.trim () === '') {
            contentNameErr.innerHTML = 'Заполните поле'
        errCount++;
        }
        
        else {
            contentNameErr.innerHTML = ''
        }
          
        
        if ( errCount && autoFocus ) {
            document.forms.Info.contentName.focus();
          }
          return errCount;  

    }
   

    document.forms.Info.devName.onblur=function() { validDevName(false); }
    document.forms.Info.webSiteName.onblur=function() {  validwebSiteName(false); }
    document.forms.Info.urlName.onblur=function() { validUrlName(false); }
    document.forms.Info.webSiteDate.onblur=function() { validwebSiteDate(false); }
    document.forms.Info.visPerDay.onblur=function() { validvisPerDay(false); }
    document.forms.Info.emailName.onblur=function() { validemailName(false); }
    document.forms.Info.rubricName.onchange=function() { validrubricName(false); }
    document.forms.Info.costName[0].onchange=function() {  validcostName(false); }
    document.forms.Info.costName[1].onchange=function() {  validcostName(false); }
    document.forms.Info.costName[2].onchange=function() {  validcostName(false); }
    document.forms.Info.commentName.onchange=function() {  validcommentName(false); }
    document.forms.Info.contentName.onblur=function() {validcontentName(false); }

    

    
    function validAll(eo) {
       eo=eo||window.event;
      
        try {
            var totalErrCount=0;
            totalErrCount+= validDevName( !totalErrCount );
            totalErrCount+=validwebSiteName( !totalErrCount );
            totalErrCount+=validUrlName( !totalErrCount );
            totalErrCount+=validwebSiteDate( !totalErrCount );
            totalErrCount+= validvisPerDay( !totalErrCount );
            totalErrCount+=validemailName( !totalErrCount );
            totalErrCount+=validrubricName( !totalErrCount );
            totalErrCount+=validcostName( !totalErrCount );
            totalErrCount+=validcommentName( !totalErrCount );
            totalErrCount+=validcontentName( !totalErrCount );
      
            if ( totalErrCount ) 
                eo.preventDefault();
        }

        catch ( ex ) {
            alert('Извините, что-то пошло не так, неожиданный сбой! Пересмотрите заполнение формы, возможно, это всё из-за вас!');
                      eo.preventDefault(); 
        }
      }
      
      document.forms.Info.addEventListener('submit',validAll,false);
