// document.title = 123;

// let header = document.getElementById("main-header");

// header.style.borderBottom = "3px solid #000";

// let title = document.getElementById("add-items");

// console.log(title);

// title.style.color = "green";

// title.style.fontWeight = "bold";

// let items = document.getElementsByClassName("list-group");
// items[2].style.backgroundColor = "green";


// for(let i = 0; i < items.length; i++){
//     items[i].style.fontWeight = "bold";
// }

// let items = document.getElementsByTagName("li");
// // items[2].style.backgroundColor = "green";


// for(let i = 0; i < items.length; i++){
//     items[i].style.fontWeight = "bold";
// }

// var li_five = document.getElementsByClassName("list-five")[0];
// li_five.style.backgroundColor = "green";

// let items = document.querySelectorAll("li");

// // console.log(items);
// items[1].style.backgroundColor = "green";
// items[2].style.display = "none";


//from second part


	// Get the first list item element
const listItem = document.querySelector('#items li');

// Get the parent element of the list item
const parent = listItem.parentElement;

// Get the last child element of the parent
const lastChild = parent.lastElementChild;

// Create a new list item element
const newListItem = document.createElement('li');
newListItem.textContent = 'New Item';

// Append the new list item as the last child of the parent
parent.appendChild(newListItem);

// Set a new attribute to the new list item
newListItem.setAttribute('data-type', 'new-item');

// Create a new text node with some content
const textNode = document.createTextNode('This is a new text node');

// Insert the new text node before the new list item
parent.insertBefore(textNode, newListItem);

// Get the next sibling of the original list item
const nextSibling = listItem.nextSibling;

// Get the previous sibling of the original list item
const previousSibling = listItem.previousSibling;

// Get the next element sibling of the original list item
const nextElementSibling = listItem.nextElementSibling;

// Get the previous element sibling of the original list item
const previousElementSibling = listItem.previousElementSibling;

// Get the first child element of the parent
const firstChild = parent.firstElementChild;

// Get the first element child of the header element
const firstElementChild = document.querySelector('#main-header').firstElementChild;

// Get the last child element of the body element
const lastChildOfBody = document.body.lastChild;






