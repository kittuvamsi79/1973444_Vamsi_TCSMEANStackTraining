function addBlog(){
    var title = document.getElementById("title").value;
    var desc = document.getElementById("desc").value;
    var image = document.getElementById("image").files[0];
    console.log(title);
    console.log(desc);

    var reader  = new FileReader();
    reader.onload = function(e)  {
        var image = document.createElement("img");
        image.src = e.target.result;
        document.body.appendChild(image);
    }
    reader.readAsDataURL(image);

    var table = document.getElementById("blogList")

    var newRow = table.insertRow(0);

    var cell1 = newRow.insertCell(0);          // cell created 
    cell1.innerHTML=title;                 // value placed 

    var cell2 = newRow.insertCell(1);          // cell created 
    cell2.innerHTML=desc;
    
    var cell3 = newRow.insertCell(2);          // cell created 
    cell3.innerHTML= document.body.appendChild(image);

}
