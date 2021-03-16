var budgetObj =[];

var count=0;

function Budget(clientName, projectName, budgetAmount) {

    this.clientName = clientName;
    this.projectName = projectName;
    this.budgetAmount=budgetAmount;

}

function retrieveFromSession() {
    console.log("budgetObj: ", budgetObj)
    var obj = sessionStorage.getItem("budgetInfo");
    var varcount = sessionStorage.getItem("countrows");
    console.log("obj: ", obj);
    console.log(varcount);
    console.log("Object 1", obj[0-20]);

    var hotelHeaderRow = "<tr><th> Client Name</th> <th>Project Name</th> <th>Budget</th></tr> ";
    for (var i = 0; i < varcount; i++) {
        hotelHeaderRow += "<tr><td>" + obj[i].clientNam + "</td>";
        hotelHeaderRow += "<td>" + obj[i].projectName + "</td>";
        hotelHeaderRow += "<td>" + obj[i].budgetAmount + "</td>";
    }
    var hotelTable = "<table border=\'1'\>" + hotelHeaderRow + "</table>";
    document.getElementById("hotelList").innerHTML = hotelTable;
        
    // var table = document.getElementById("budgetList")
    // var body = table.getElementsByTagName("tbody")[0];
    // var newRow = body.insertRow(body.length);  // row created 

    // var cell1 = newRow.insertCell(0);          // cell created 
    // cell1.innerHTML=data.name;                 // value placed 

    // var cell2 = newRow.insertCell(1);          // cell created 
    // cell2.innerHTML=data.age;  
    // var cell2 = newRow.insertCell(1);          // cell created 
    // cell2.innerHTML=data.age;  
}


function onBudgetSubmit(){
    
    var budgetData = readFormData();
    // insertNewRecord(budgetData);
    // console.log("Coient: ", budgetData.clientName);
    // console.log("Project: ", budgetData.projectName);
    // console.log("amount: ", budgetData.budgetAmount);

    // budgetObj.push(JSON.stringify(budgetData));
    budgetObj.push(budgetData);

    count=count+1;
    console.log("budgetData: ", budgetData);  
    console.log("budgetObj: ", budgetObj)
    //in empObj
    // console.log("Increment",count);
    resetData(); 
    
    // sessionStorage.setItem("budgetI: nfo",budgetObj)  
    // sessionStorage.setItem("budgetObj: ",budgetObj); 
    // sessionStorage.setItem("countrows", count); 
}

function goback(){
    sessionStorage.setItem("budgetInfo",JSON.stringify(budgetObj)); 
    console.log("Helllo");
    console.log("budgetObj", budgetObj);
}

function readFormData() {
    // var obj = {}    // empty object
    // obj.name = document.getElementById("name").value;
    // obj.age = document.getElementById("age").value;
    // console.log(obj);
    // return obj; 
    // sessionStorage.setItem("budgetInfo",budgetObj)
    var tempBudget = new Budget();
    tempBudget.clientName = document.getElementById("clientName").value;
    tempBudget.projectName = document.getElementById("projectName").value;
    tempBudget.budgetAmount = document.getElementById("budgetAmount").value;
    console.log("temp: ", tempBudget);
    return tempBudget;
}

function insertNewRecord(data){
 var table = document.getElementById("employeeList")
 var body = table.getElementsByTagName("tbody")[0];
 var newRow = body.insertRow(body.length);  // row created 

 var cell1 = newRow.insertCell(0);          // cell created 
 cell1.innerHTML=data.name;                 // value placed 

 var cell2 = newRow.insertCell(1);          // cell created 
 cell2.innerHTML=data.age;                 // value placed

}

function resetData() {
document.getElementById("clientName").value="";
document.getElementById("projectName").value="";
document.getElementById("budgetAmount").value="";
}

function display(){
    console.log(budgetObj);
}