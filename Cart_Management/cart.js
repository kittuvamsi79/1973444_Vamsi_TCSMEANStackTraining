var cartitems;
var item1 = { title: "Laptop", price: "1000$" };
var item2 = { title: "Iphone", price: "900$" };
var item3 = { title: "Samsung", price: "800$" };
var item4 = { title: "Jacket", price: "150$" };
var item5 = { title: "Airpods", price: "200$" };
var item6 = { title: "Bag", price: "50$" };
var items = [item1, item2, item3, item4, item5, item6];
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
var itemscount = 0;
function addToCart() {
    itemscount = itemscount + 1;
    var count = itemscount.toString();
    document.getElementById("itemscount").innerHTML = count;
    cartitems.push(items[0].title);
    document.getElementById("checkoutitems").innerHTML = cartitems[0];
}
