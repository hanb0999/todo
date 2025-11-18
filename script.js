document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    function addTodo() {
        const taskText = todoInput.value.trim();
        
        if (taskText === "") {
            alert("タスクを入力してください！");
            return;
        }

        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // リストアイテムをクリックすると削除
        listItem.addEventListener('click', () => {
            todoList.removeChild(listItem);
        });

        todoList.appendChild(listItem);
        todoInput.value = ''; // 入力フィールドをクリア
    }
});