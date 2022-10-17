
function HashStorageFunc () {
   let drinkStorage = {}
   let self = this;
   
   self.addValue = function (key, value) {
     drinkStorage [key]=value }
   
   self.getValue= function (key) {
        return drinkStorage[key]}
    
        self.deleteValue= function (key) {
            if (key in drinkStorage) {
                delete drinkStorage [key];
                return true}
                return false;
                }
    self.getKeys = function () 
    {
        return Object.keys (drinkStorage)
    }
}

let drinkStorage = new HashStorageFunc ();

function addInfo () {
    let drinkName = prompt ( 'Введите название напитка ');
    let containAlcohole = confirm ('Если напиток содержит алкоголь, нажмите "ОК"');
    let itRecipe = prompt('Введите рецепт приготовления напитка');
    
    drinkStorage.addValue (drinkName, {a:containAlcohole, b:itRecipe});
    }


