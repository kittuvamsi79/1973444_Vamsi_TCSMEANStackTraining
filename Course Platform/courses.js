let app = require("express")();
let http = require("http").Server(app);   // to load the library we have run port number using hhtp module 
let io = require("socket.io")(http);
let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017"
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get("/",(req,res)=> {
    res.sendFile(__dirname+"/index.html");
})


app.post('/addCourse', (req, res) => {
    console.log("Hi");
    console.log(req.body);
    mongoClient.connect(url, {useUnifiedTopology: true },(err1,client)=>{
        if(!err1){
            let db = client.db("courses");
            db.collection("course").insertOne(req.body,(err2,result)=>{
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


  // Delete Course
  app.post('/deleteCourse', (req, res) => {
    console.log("Inside Delete");
    console.log(req.body.courseID);
    mongoClient.connect(url, {useUnifiedTopology: true },(err1,client)=>{
        if(!err1){
            let db = client.db("courses");
            db.collection("course").deleteOne({courseID:req.body.courseID},(err2,result)=>{
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

  // Update Course
  app.post('/updateCourse', (req, res) => {
    console.log("Inside Update");
    console.log(req.body.courseID);
    mongoClient.connect(url, {useUnifiedTopology: true },(err1,client)=>{
        if(!err1){
            let db = client.db("courses");
            db.collection("course").updateOne({courseID:req.body.courseID},{$set:{amount:req.body.amount}},(err2,result)=>{
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

  //Fetch
  app.get('/fetchCourse', (req, res) => {
    console.log("Inside fetch");
    // console.log(req.body.courseID);
    mongoClient.connect(url, {useUnifiedTopology: true },(err1,client)=>{
        if(!err1){
            let db = client.db("courses");
            let objects = db.collection("course").find();
            
        });
  })


// app.post("/addCourse",(req,res)=> {
//     //console.log(req.body)
//     // mongoClient.connect()
//     // customers.push(req.body);   // add the data in array 
//     // res.send("Customer records added successfully...");

//     mongoClient.connect(url, {useUnifiedTopology: true },(err1,client)=>{
//         if(!err1){
//                     let db = client.db("meanstack");
//             db.collection("Product").insertOne({_id:102,pname:"Laptop",price:95000},(err2,result)=>{
//                     if(!err2){
//                         console.log(result.insertedCount);
//                     }else {
//                         console.log(err2.message);
//                     }
//                     client.close();    
//                 });
                
//             }
//         });
// })

http.listen(9092,()=>console.log('server running on port number 9090'));