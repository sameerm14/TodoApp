let input = document.querySelector("input");
let addbtn = document.querySelector("button");
let tasks = document.querySelector("ul");

addbtn.addEventListener("click", () => {
  let val = input.value;
  if (val === "") {
    alert("please fill the input");
  } else {
    let li = document.createElement("li");
    li.textContent = val;

    let rbtn = document.createElement("button");
    rbtn.textContent = "delete";
    rbtn.style.marginLeft = "10px";
    rbtn.style.cursor = "pointer";

    rbtn.addEventListener("click", () => {
      li.remove();
    });
    tasks.appendChild(li);

    li.appendChild(rbtn);
    input.value = "";
  }
});
