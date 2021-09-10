let fs = require('fs')
var menu = require('./json/menu.json')

Savefile = () =>{

    fs.writeFile('./json/menu.json', JSON.stringify(menu), function(err) {
        if(err) throw err;
    });
}
create_menu= (name,price) =>{
    menu.push({"id":parseInt((menu.length)+1),"name":name,"price":price})
    Savefile()
    return parseInt((menu.length))
}

checkMenu = (item) =>{
    for(let data=0;data<menu.length;data++){
        if(item==menu[data].id){
            console.log(menu[data].id);
            console.log(item);
            return  [menu[data].name,menu[data].price,menu[data].qty]
        }
        var i=menu.length;
    }
   if(item>i){
       let text='ไม่มี id เมนู้นี้'
       let text2=''

    return  [text,text2]
   }
  };

menus = () =>{
    let s = ''
    let totalmenu = 0
    for(data in menu){
        s +=menu[data].id +'.'+menu[data].name +'  ';
       
        totalmenu = parseInt(data);
    }
    return  [s,totalmenu+1]
}



module.exports={

    create_menu:create_menu,
    checkMenu:checkMenu,
    menus:menus,
    
}
