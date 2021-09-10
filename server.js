var http = require("http");
var url = require("url");
var fs =require('fs')
const {create_menu,checkMenu,menus} = require('./Menu')
const {orders,create_order} = require('./order')
const {create_customer} = require('./Customer')
http.createServer(function (req, res) {
    var data = url.parse(req.url, true);
    var request_path = url.parse(req.url, true);
    var message = "";
    var status = 200;
    var data = "";
    switch(request_path.pathname){




      case '/menus' :
        try{
          let text = menus()
          message += `มีเมนูทั้งหมด = ${text[1]} เมนู ได้แก่ ${text[0]}  ` 
          data = text
          console.log(` จำนวน = ${text[1]} เมนู เมนูทั้งหมดมี = ${text[0]}`) 
      }catch(err){
          status = 400;
          message += err
          console.log(err)
      }        
          break;



      case '/menu' :
        try{
          let text = checkMenu(request_path.query.id)
          message += `เมนูที่  ${request_path.query.id}.${text[0]} ราคา ${text[1]} จำนวณ ${text[2]} ชิ้น`
          data = text
          console.log (`เมนูที่ ${request_path.query.id}.${text[0]} ราคา ${text[1]}`)
          
      }catch(err){
          status = 400;
          message += err
          console.log(err)
      }        
          break;

          case '/order':
            try{
              let text = orders(request_path.query.id)
              message += `ลูกค้า id ที่ ${text[0]} ได้ซื้อ ${text[1].name} จำนวณ ${text[1].qty} ชิ้น ยอดชำราเงิน  ${text[2]} บาท`
              data = text
          // console.log (`เมนูที่ id ${request_path.query.id} คือ  ${text[0]} ราคา ${text[1]} `)
            
              
          }catch(err){
              status = 400;
              message += err
              console.log(err)
          } 
          break;   
          
         case '/addcustomer':
            try{
              let text = create_customer(request_path.query.fname,request_path.query.lname,request_path.query.address,request_path.query.tel)
              message += `Create Account Sucess Your id is ${text}`
              data = text
                
          }catch(err){
              status = 400;
              message += err
              console.log(err)
          } 
          break;   

          case '/addorder':
            try{
              let text = create_order(request_path.query.name,request_path.query.price)
              message += `Create Order Sucess Your id is ${text}`
              data = text
                
          }catch(err){
              status = 400;
              message += err
              console.log(err)
          } 
          break;   
          case '/addmenu':
            try{
             
              let text = create_menu(request_path.query.name,request_path.query.price)
              message += `Create New Menu Sucess Your id is ${text}`
            
              data = text
              console.log (`เมนูที่ ${request_path.query.id}.${text[0]} ราคา ${text[1]}`)
              
          }catch(err){
              status = 400;
              message += err
              console.log(err)
          }        
              break;
              case '/editprofile' :
                try{
                  let tx = EditProfile(request_path.query.id,request_path.query.fname,request_path.query.lname,request_path.query.address,request_path.query.tel)
                  message += `Edit id${request_path.query.id} Sucess`
                  data = tx
                  console.log(`Edit id${request_path.query.id} Sucess`) 
              }catch(err){
                  status = 400;
                  message += err
                  console.log(err)
              }  
              break;
         


        default: 
        status = 404
        message = ' Not Found '
        break;
    }
  
    let response_obj = {
        status: status,
        message: message,
        data: data,
       
      };

    res.writeHead(status, {'Content-Type': 'application/json'});
	res.end(JSON.stringify(response_obj));

  })
  .listen(8080);
console.log("Server running on port 8080.");
