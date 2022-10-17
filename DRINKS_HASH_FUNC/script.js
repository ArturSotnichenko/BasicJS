'use strict';

class HashStorageClass{
  constructor(){
    this.storage={};
  }
    addValue(key, value){
      this.storage [key]=value;
    };
    getValue(key){
      return this.storage[key];
    };
    deleteValue(key){
      if(key in this.storage){
        delete this.storage[key];
      return true;
      }
      return false;
    };
    getKeys(){
      return Object.keys(
        this.storage
      );
    };
}

   let drinkStorage=new HashStorageClass();

  function addInfo(){
    let name = prompt('Введите название напитка');
    let alco = confirm('Если напиток содержит алкоголь, нажмите "ОК"'); 
    let reci = prompt('Введите рецепт приготовления напитка');
 

    drinkStorage.addValue(name, {alco, reci});
  }

  function getInfo(){
    let name = prompt('Введите название напитка');
    let rem = drinkStorage.getValue(name);
      if (rem !== undefined){
        alert(
          "Напиток: " +name+ '\n' +
          "Алкогольный: " +(rem.alco?"Да":"Нет")+ '\n' +
          "Рецепт: " +rem.reci+ '\n'          
        );
      }
      else {
        alert("В списке отсуствует");      
      }
  }

  function delInfo(){  
  let name = prompt('Введите название напитка, который хотите удалить');
    let del = drinkStorage.deleteValue(name);
    
    alert(del?"Напиток успешно удален":"Такого напитка в списке нет"); }

    function listDrink(){
      let theList = drinkStorage.getKeys();
        alert("Список: " + theList);
    }