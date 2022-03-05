window.addEventListener('load', function() {
    
    const form = document.getElementById('form');
    const inputText = document.getElementById('inputText')
    const tasks = document.getElementById('tasks');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const taskValue = inputText.value;
        if (taskValue === "") {
            return false;
        }
        
        // Add new task container
        const newTask = document.createElement('div');
        newTask.classList.add('task');
        
        // Add new content container
        const newContent = document.createElement('div');
        newContent.classList.add('content');
        
        // Add the value
        const newInput = document.createElement('input');
        newInput.classList.add('text');
        newInput.type = 'text';
        newInput.value = taskValue;
        newInput.setAttribute("readonly", "true");

        // Add new action container
        const newActions = document.createElement('div');
        newActions.classList.add('actions');
        
        // Add Buttons and its functionality
        const newEdit = document.createElement('button');
        newEdit.classList.add('Edit');
        newEdit.innerHTML = 'Edit';
        newEdit.addEventListener('click', function() {
            if (newEdit.innerText == 'Edit') {
                newEdit.innerHTML = 'Save';
                newInput.removeAttribute("readonly");
                newInput.focus();
            } else {
                newEdit.innerHTML = 'Edit';
                newInput.setAttribute("readonly", "true");
            }
        });
        
        const newDel = document.createElement('button');
        newDel.classList.add('Delete');
        newDel.innerHTML = 'Delete';
        newDel.addEventListener('click', function() {
            newTask.remove();
        });
        
        // Combine elements
        newContent.appendChild(newInput);
        newTask.appendChild(newContent)
        tasks.appendChild(newTask);

        newActions.appendChild(newEdit);
        newActions.appendChild(newDel);
        newTask.appendChild(newActions);
    });
});
