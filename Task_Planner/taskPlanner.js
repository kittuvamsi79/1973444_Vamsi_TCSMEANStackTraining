let http = require("http");
let url = require("url");
let fs=require("fs");

let port = 9999;
let taskinfo = `
    <form action="/addTask" method="get">
        <h3>Add Task</h3>
        <label>Employee ID</label>
        <input type="number" name="employee"/><br/>
        <br>
        <br>
        <label>Task ID: </label>
        <input type="number" name="taskID"/><br/>
        <br>
        <br>
        <label>Task Name: </label>
        <input type="text" name="taskName"/><br/>
        <br>
        <br>
        <label>Deadline: </label>
        <input type="date" name="deadline"/><br/>
        <br>
        <br>
        <input type="submit" value="Add Task"/>
    </form>

    <form action="/deleteTask" method="get">
        <h3>Delete Task</h3>
        <label>Task Id: </label>
        <input type="number" name="deleteId"/><br/>
        <br>
        <input type="submit" value="Delete Task"/>
        <br>
    </form>

    <form action="/displayTask" method="get">    
        <br>
        <input type="submit" value="List all tasks"/>
    </form>
`
let server = http.createServer((req,res)=> {
    //console.log(url.parse(req.url,true))
    var pathInfo = url.parse(req.url,true).pathname;
    if(req.url=="/"){
        res.setHeader("content-type","text/html");  // by default data consider as a html 
        res.end(taskinfo);
    }
    else if(pathInfo=="/addTask"){
        var data = url.parse(req.url,true).query;
        var tasks = new Array();
        var task = new Object();
        task.employee = data.employee;
        task.id = data.taskID;
        task.name = data.taskName;
        task.deadline = data.deadline;
        tasks.push(task);
        console.log("Task: ", task);
        const jsondata = JSON.stringify(tasks);
        console.log("jsondata: ", jsondata);
        var existingFile = fs.readFileSync("user.json");
        existingData = JSON.parse(existingFile);
        console.log("existinData: ", existingData);
        existingData.push(task);
        task=null;
        fs.writeFile('user.json', JSON.stringify(existingData), (err) => {
            if (err) {
                throw err;
            }
            console.log("JSON data is saved.");
        });
        res.write("Task Added!");
        
    }
    else if(pathInfo=="/deleteTask"){
        console.log("Deleting");
        var data1 = url.parse(req.url,true).query;
        console.log("data1.deleteId: ", data1.deleteId);
        var deletingFile = fs.readFileSync("user.json");
        deletingData = JSON.parse(deletingFile);
        console.log("Before deleting: ", deletingData);
        const index = deletingData.findIndex(x => x.id ==data1.deleteId);
        if (index !== undefined) deletingData.splice(index, 1);
        console.log("After deleting: ", deletingData);
        fs.writeFile('user.json', JSON.stringify(deletingData), (err) => {
            if (err) {
                throw err;
            }
            console.log("JSON data is saved.");
        });
        res.write("Task Deleted!");
        // res.end();
    }
    else if(pathInfo=="/displayTask"){

        var displayFile = fs.readFileSync("user.json");
        displayData = JSON.parse(displayFile);
        console.log("displayData", displayData);
        console.log("length: ", displayData.length);

        var displayTable = `
        <table border ="1">
        <tr>
            <th>Employee ID</th>
            <th>Task ID</th>
            <th>Task Name</th>
            <th>Date</th>
        </tr>
        `

        for(let i=0; i<displayData.length;i++){
            const dispTask = displayData[i];
            displayTable+=`
            
            <tr>
                <td>${dispTask.employee}</td>
                <td>${dispTask.id}</td>
                <td>${dispTask.name}</td>
                <td>${dispTask.deadline}</td>
            </tr>
        `
            
        }
        displayTable+=`</table>`
        res.end(displayTable);
        res.end();
    }
    
})
server.listen(port,()=>console.log(`running on port num ${port}`));




// let http = require("http");
// let url = require("url");
// let port = 9999;
// let loginInfo = `
//     <form action="/store" method="get">
//         <label>UserName</label>
//         <input type="text" name="user"/><br/>
//         <label>Password</label>
//         <input type="password" name="pass"/><br/>
//         <input type="submit" value="Sign In!"/>
//         <input type="reset" value="reset"/>
//     </form>
// `
// let server = http.createServer((req,res)=> {
//     //console.log(url.parse(req.url,true))
//     var pathInfo = url.parse(req.url,true).pathname;
//     if(req.url=="/"){
//     res.setHeader("content-type","text/html");  // by default data consider as a html 
//     res.end(loginInfo);
//     }else if(pathInfo=="/store"){
//     var data = url.parse(req.url,true).query;
//     if(data.user=="Ajay" && data.pass=="Kumar"){
//         res.write("Successfully Login!");
//     }else {
//         res.write("Failure try once again");
//     }
//     res.end();
//     }
// })
// server.listen(port,()=>console.log(`running on port num ${port}`));


