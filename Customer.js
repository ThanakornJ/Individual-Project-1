let fs = require('fs')
var Customer = require('./json/Customer.json')

Savefile = () =>{

    fs.writeFile('./json/Customer.json', JSON.stringify(Customer), function(err) {
        if(err) throw err;
    });
}


EditProfile = (id,fname,lname,address,tel) =>{
    for(data in Customer){
        if(Customer[data].id == id){
         Customer[data].firsname = fname 
         Customer[data].LastName = lname 
         Customer[data].Address = address
         Customer[data].Tel = tel 
        }
        
    }
    Savefile()
    
}
create_customer = (fname,lname,address,tel) =>{
    Customer.push({"id":parseInt((Customer.length)+1),"firstName":fname,"LastName":lname,"Address":address,"Tel":tel})
    Savefile()
    return parseInt((Customer.length))
}
module.exports={
    // EditProfile : EditProfile,
    create_customer : create_customer
}

