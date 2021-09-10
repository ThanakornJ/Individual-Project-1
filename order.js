let fs = require('fs')
var menu = require('./json/order.json')


Savefile = () =>{

    fs.writeFile('./json/order.json', JSON.stringify(order), function(err) {
        if(err) throw err;
    });
}
create_order = (name,price) =>{
    order.push({"id":parseInt((order.length)+1),"Name":name,"price":price})
    console.log(`asd`);
    Savefile()
    return parseInt((order.length))
}

orders = (item) =>{





    for(data in menu){
        
      
        if(item==menu[data].id){
            // console.log(menu[data].id);
            let x = parseInt(menu[data].menus[data].price);
            let y = parseInt(menu[data].menus[data].qty);
            
            let sum = x*y;
            console.log(sum);

           
             return  [menu[data].customer_id,menu[data].menus[data],sum]
           
            
        }
       
    }
 
  };

module.exports={
    create_order:create_order,
    orders:orders
}
