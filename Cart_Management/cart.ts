
interface Item {
    title:string;
    price:string;
}
var cartitems: string[];

let item1:Item={title:"Laptop",price:"1000$"};
let item2:Item={title:"Iphone",price:"900$"};
let item3:Item={title:"Samsung",price:"800$"};
let item4:Item={title:"Jacket",price:"150$"};
let item5:Item={title:"Airpods",price:"200$"};
let item6:Item={title:"Bag",price:"50$"};

let items=[item1, item2,item3,item4,item5,item6];

document.getElementById("itemname1").innerHTML = item1.title;
document.getElementById("itemprice1").innerHTML = item1.price;
document.getElementById("itemname2").innerHTML = item2.title;
document.getElementById("itemprice2").innerHTML = item2.price;
document.getElementById("itemname3").innerHTML = item3.title;
document.getElementById("itemprice3").innerHTML = item3.price;
document.getElementById("itemname4").innerHTML = item4.title;
document.getElementById("itemprice4").innerHTML = item4.price;
document.getElementById("itemname5").innerHTML = item5.title;
document.getElementById("itemprice5").innerHTML = item5.price;
document.getElementById("itemname6").innerHTML = item6.title;
document.getElementById("itemprice6").innerHTML = item6.price;

var itemscount:number=0;

function addToCart(){
    itemscount = itemscount+1;
    var count= itemscount.toString();
    document.getElementById("itemscount").innerHTML = count;
    cartitems.push(items[0].title);
    document.getElementById("checkoutitems").innerHTML = cartitems[0];
}
