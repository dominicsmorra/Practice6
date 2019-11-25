
//example function that 
function idsOnly(users){
    var ids = users.map(function(user){
        return user.id;
    });
    return ids;
}

const users = [
    { id: 1, name: 'John', age: 22, gender: 'm' },
    { id: 2, name: 'Ellis', age: 46, gender: 'f'},
    { id: 3, name: 'Sara', age: 33, gender: 'f'},
    { id: 4, name: 'Will', age: 30, gender: 'm'},
    { id: 5, name: 'Jane', age: 35, gender: 'f'},
    { id: 6, name: 'Mike', age: 52, gender: 'm'},
   ]

   function malesOnly(){
       users.forEach(element => {
           if(element.gender == 'm'){
            console.log(element.name + "," + element.age)
           }
       });
   }

   function onlyNamesThatStartWithJ(){
       let arr = []
       users.forEach(element => {
           if(element.name.startsWith("J")){
               arr.push(element.name)
           }
       })
       console.log(arr)
       return arr

       
   }

   function femalesOver40(){
       return users.filter((element) => {
           return element.age > 40 && element.gender == 'f'
       })

   }

   onlyNamesThatStartWithJ();