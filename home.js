const addButton = document.getElementById("push");
const addButton2 = document.getElementById("push2");
const addButton3 = document.getElementById("push3");
const addButton4 = document.getElementById("push4");
const addButton5 = document.getElementById("push5");
const addButton6 = document.getElementById("push6");

const text = document.getElementById("myText");
const task = document.getElementById("tasks");

const text2 = document.getElementById("myText2");
const task2 = document.getElementById("tasks2");

const text3 = document.getElementById("myText3");
const task3 = document.getElementById("tasks3");

const text4 = document.getElementById("myText4");
const task4 = document.getElementById("tasks4");

const text5 = document.getElementById("myText5");
const task5 = document.getElementById("tasks5");

const text6 = document.getElementById("myText6");
const task6 = document.getElementById("tasks6");

addButton.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = text.value;
  task.appendChild(paragraph);
  text.value = "";
  paragraph.addEventListener("click", function () {
    task.removeChild(paragraph);
  });
});

addButton2.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = text2.value;
  task2.appendChild(paragraph);
  text2.value = "";

  paragraph.addEventListener("click", function () {
    task2.removeChild(paragraph);
  });
});

addButton3.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = text3.value;
  task3.appendChild(paragraph);
  text3.value = "";

  paragraph.addEventListener("click", function () {
    task3.removeChild(paragraph);
  });
});

addButton4.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = text4.value;
  task4.appendChild(paragraph);
  text4.value = "";

  paragraph.addEventListener("click", function () {
    task4.removeChild(paragraph);
  });
});

addButton5.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = text5.value;
  task5.appendChild(paragraph);
  text5.value = "";

  paragraph.addEventListener("click", function () {
    task5.removeChild(paragraph);
  });
});

addButton6.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = text6.value;
  task6.appendChild(paragraph);
  text6.value = "";

  paragraph.addEventListener("click", function () {
    task6.appendChild(paragraph);
  });
});
