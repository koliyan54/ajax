var http = require("http");
http.createServer(function(request,res){
     
    res.end("Hello NodeJS!222");
     
}).listen(3000, "127.0.0.1",function(){
    console.log("Сервер начал прослушивание запросов на порту 3000");
});