let mongoClient = require("mongodb").MongoClient;
let fs = require("fs");
let url = "mongodb://localhost:27017"

let rawDdata = fs.readFileSync("call_data.json");
let jsonData = JSON.parse(rawDdata);
console.log("JSon Data:; ", jsonData);

mongoClient.connect(url, {useUnifiedTopology: true },(err1,client)=>{
if(!err1){
            let db = client.db("callrecordings");
    db.collection("CallData").insertMany(jsonData,(err2,result)=>{
            if(!err2){
                console.log(result.insertedCount);
            }else {
                console.log(err2.message);
            }
            client.close();    
        });
        
    }
});
