let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017"


let app = require("express")();
let http = require("http").Server(app);   // to load the library we have run port number using hhtp module 
let io = require("socket.io")(http);

app.get("/",(req,res)=> {
    res.sendFile(__dirname+"/index.html");
})

var name;
var message;
var count=0;

io.on("connection",(socket)=> {
    console.log("Client connected to application.....");
    
    socket.on("chat",(msg)=> {
        id=count++;
        name=msg.name;
        message = msg.message;
        var obj = { "name": name, "message": message};
        // JsonData = JSON.parse(obj);
        // console.log("JsonData: ", JsonData);
        
        mongoClient.connect(url, {useUnifiedTopology: true },(err1,client)=>{
            if(!err1){
                        let db = client.db("chatlogs");
                        db.collection("chats").insertOne(obj,(err2,result)=>{
                        if(!err2){
                            console.log(result.insertedCount);
                            
                        }else {
                            console.log(err2.message);
                        }
                        client.close();    
                    });
                    
                }
            });
    })


})
http.listen(9090,()=>console.log('server running on port number 9090'));

console.log(name);
console.log(message);

// mongoClient.connect(url, {useUnifiedTopology: true },(err1,client)=>{
// if(!err1){
//             let db = client.db("callrecordings");
//             db.collection("CallData").insertMany(jsonData,(err2,result)=>{
//             if(!err2){
//                 console.log(result.insertedCount);
//             }else {
//                 console.log(err2.message);
//             }
//             client.close();    
//         });
        
//     }
// });
