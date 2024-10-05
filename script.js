document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        addTask(taskValue);
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
});

function addTask(task) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    li.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);
}
