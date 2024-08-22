let users = ["User1", "User2", "User3"];
let tasks = [];

function populateUserList() {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';
    users.forEach(user => {
        const li = document.createElement('li');
        li.innerHTML = `<input type="radio" name="user" value="${user}"> ${user}`;
        userList.appendChild(li);
    });
}

function banUser() {
    const selectedUser = document.querySelector('input[name="user"]:checked');
    if (selectedUser) {
        users = users.filter(user => user !== selectedUser.value);
        populateUserList();
        alert(`User ${selectedUser.value} has been banned.`);
    } else {
        alert('Please select a user to ban.');
    }
}

function addTask() {
    const taskName = document.getElementById('task-name').value;
    const coinAmount = document.getElementById('coin-amount').value;
    const claimLimit = document.getElementById('claim-limit').value;
    
    if (taskName && coinAmount && claimLimit) {
        tasks.push({
            name: taskName,
            coins: coinAmount,
            limit: claimLimit
        });
        populateTaskList();
        alert(`Task ${taskName} added with ${coinAmount} coins and ${claimLimit} claims.`);
    } else {
        alert('Please fill out all fields.');
    }
}

function populateTaskList() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.text = task.name;
        taskList.appendChild(option);
    });
}

function updateTask() {
    const selectedTaskIndex = document.getElementById('task-list').value;
    const newCoinAmount = document.getElementById('new-coin-amount').value;
    const newClaimLimit = document.getElementById('new-claim-limit').value;
    
    if (selectedTaskIndex !== '' && newCoinAmount && newClaimLimit) {
        tasks[selectedTaskIndex].coins = newCoinAmount;
        tasks[selectedTaskIndex].limit = newClaimLimit;
        alert(`Task ${tasks[selectedTaskIndex].name} updated.`);
    } else {
        alert('Please fill out all fields.');
    }
}

// Initialize user list and task list
populateUserList();
populateTaskList();
