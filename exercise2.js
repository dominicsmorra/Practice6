
//example function that 
function idsOnly(users){
    var ids = users.map(function(user){
        return user.id;
    });
    return ids;
}