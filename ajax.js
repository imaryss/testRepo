//?DOM manipulation
//^every html element is a node

//^GetElementById()
// const title = document.getElementById("main-heading");
// console.log(title);
//^GetElementByClassName()
// const listItems = document.getElementsByClassName("list-items");
// console.log(listItems);
//^GetElementByTagName()
// const li = document.getElementsByTagName("li");
// console.log(li);
//^querySelector()
// const container = document.querySelector("div");
// console.log(container);
//^querySelectorAll()
// const container = document.querySelectorAll("div");
// console.log(container);
//^DOM NODES
// let para = document.createElement("p");
// let node = document.createTextNode("Up above the world so high");
// para.appendChild(node);
// var parent = document.getElementsByClassName("container");
// var parent = document.getElementById("id");
// parent.appendChild(para);
// console.log(parent);
//^

//^Styling Elements
// const title = document.querySelector("#main-heading");
// console.log(title);
// title.style.color = "red";
// const listItems = document.querySelectorAll(".list-items");
// console.log(listItems);

// for (i = 0; i < listItems.length; i++) {
//   listItems[i].style.color = "red";
//   console.log(listItems[i]);
// }
//^Creating Elements
// const ul = document.querySelector("ul");
// const li = document.createElement("li");
//^Adding Elements
// ul.append(li);
// console.log(ul);
//^Modifying the text
// const firstListItem = document.querySelector(".list-items");
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);
// li.innerText = "X-MEN";
//^Modifying Attributes
// li.setAttribute("id", "main-heading");
// console.log(li);
// li.removeAttribute("id");
// const h1 = document.querySelector("#main-heading");
// console.log(h1.getAttribute("id"));
// li.classList.add("list-items");
// li.classList.remove("list-items");
// li.classList.remove("list-items");
//checking if an element contains a class
// console.log(li.classList.contains("list-items"));
//^Remove Elements
// li.remove();
//^Traverse the DOM

// let ul = document.querySelector("ul");
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);
// const html = document.documentElement;
// console.log(html);
//? console.log(html.parentNode);
// will try to retrieve any type of node
//returns the parent of the specified node in the DOM tree.
//more common to use
//? console.log(html.parentElement);
//the read-only parentElement returns the DOM node's parent Element
// or NULL if the node either has no parent,
//or its parent isn't a DOM Element
//^Parent Node Traversal
// let ul = document.querySelector("ul");
// console.log(ul.childNodes);
//?the identation between nodes is counted by
//?js as text nodes and that's why I have the
//?[text-node] structure here
//console.log(ul.firstChild);
//console.log(ul.lastChild);
//ul.childNodes[1].style.backgroundColor = "pink";

//^Child Node Traversal
// let ul = document.querySelector("ul");
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);
//^Sibling Node Traversal
// let ul = document.querySelector("ul");
// const div = document.querySelector("div");
// console.log(div.childNodes);
// console.log(ul.previousSibling);
// console.log(ul.nextSibling);
//?alternatives
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

//*Event Listeners

//^

//^

//^
