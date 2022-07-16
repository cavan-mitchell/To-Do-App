let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

//inputField.value
addToDoButton.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = inputField.value;

  //This is important but why do we need to initialize inputField.value with ""?
  toDoContainer.appendChild(paragraph);
  inputField.value = "";

  //Line Through
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });

  //Delete
  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
  });
});
