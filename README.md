# ✅ Todo App with Projects Navigation

A simple and interactive **Todo Application** built using **HTML, CSS, and JavaScript**.  
The app helps users manage daily tasks and also includes a **Projects button** to navigate and view other frontend projects.

---

## 🚀 Project Overview

This Todo App allows users to:
- Add daily tasks
- Delete tasks
- Navigate to other projects using a dedicated button

It is a beginner-friendly project focused on **DOM manipulation** and **JavaScript logic**.

---

## 🧠 Features

- Add new todo tasks
- Delete tasks
- Clean and responsive UI
- Button to view other projects
- Pure HTML, CSS, JavaScript (No frameworks)

---

## 🛠️ Tech Stack

- HTML5  
- CSS3  
- JavaScript (ES6)  

---

## 📄 JavaScript Logic Example

```js
let input = document.querySelector('#todo-input');
let btn = document.querySelector('#add-btn');
let list = document.querySelector('#todo-list');

btn.addEventListener('click', () => {
  if (input.value === '') return;

  let li = document.createElement('li');
  li.innerHTML = `
    ${input.value}
    <button class="delete">❌</button>
  `;

  li.querySelector('.delete').addEventListener('click', (e) => {
    e.stopPropagation();
    li.remove();
  });

  list.appendChild(li);
  input.value = '';
});
