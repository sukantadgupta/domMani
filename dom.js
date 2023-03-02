document.title = 123;

let header = document.getElementById("main-header");

header.style.borderBottom = "3px solid #000";

let title = document.getElementById("add-items");

console.log(title);

title.style.color = "green";

title.style.fontWeight = "bold";

// let items = document.getElementsByClassName("list-group");
// items[2].style.backgroundColor = "green";


// for(let i = 0; i < items.length; i++){
//     items[i].style.fontWeight = "bold";
// }

let items = document.getElementsByTagName("li");
// items[2].style.backgroundColor = "green";


for(let i = 0; i < items.length; i++){
    items[i].style.fontWeight = "bold";
}

var li_five = document.getElementsByClassName("list-five")[0];
li_five.style.backgroundColor = "green";





