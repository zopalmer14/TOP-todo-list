
// back-end SCHEDULE CONTROLLER
const scheduleController = function scheduleController() {
    // list of projects
    const projectList = [];
    const active_project = 0;

    const getProjects = () => projectList;
    const getActiveProject = () => projectList[active_project];
    const setActiveProject = (index) => active_project = index;

    // add project to list
    const addProject = function addProject(title) {
        const new_project = createProject(title);
        projectList.push(new_project);
    };

    // delete project from list
    const deleteProject = function deleteProject(project) {
        const index = projectList.indexOf(project);
        if (index > -1) { 
            projectList.splice(index, 1); 
        } else {
            console.log('Error: to-do item not found');
        }
    };

    // Project Factory Function (i.e. a list of to-do items)
    const createProject = function createProject(title) {
        const toDoList = [];

        const getTitle = () => title;

        const getList = () => toDoList;

        // add to-do item to project
        const addItem = function addItem(toDoItem) {
            toDoList.push(toDoItem);
        };

        // delete to-do item from project
        const deleteItem = function deleteItem(toDoItem) {
            const index = toDoList.indexOf(toDoItem);
            if (index > -1) { 
                toDoList.splice(index, 1); 
            } else {
                console.log('Error: to-do item not found');
            }
        };

        return { getTitle, getList, addItem, deleteItem }
    };

    // To-Do Item Factory Function 
    const toDoItem = function toDoItem(title, desc, dueDate, prio) {
        return { title, desc, dueDate, prio };
    };

    return { getProjects, getActiveProject, setActiveProject, addProject, deleteProject, toDoItem, createProject };
}();

// DOM MANIPULATION

const DOMController = function DOMController() {
    const setupSidebar = function setupSidebar() {
        // dom references
        const personal_projects = document.querySelector('#personal-projects');

        // creates a list of the personal projects in the sidebar
        function displayProjects() {
            const projects = scheduleController.getProjects();

            projects.forEach((project) => {
                // create a list item to represent the project
                const list_item = document.createElement('li');

                // create a logo to add to the list item
                const logo = document.createElement('span');
                logo.classList.add('material-icons');
                logo.textContent = 'list';

                // create a div to hold the title
                const title = document.createElement('div');
                title.textContent = project.getTitle();;

                // append both to the list item
                list_item.appendChild(logo);
                list_item.appendChild(title);

                console.log(list_item);

                // append the list item to the list of personal projects
                personal_projects.appendChild(list_item);
            });
        }

        displayProjects();

        const nav_items = document.querySelectorAll('#nav>ul>li');
        nav_items.forEach((item) => {
            item.addEventListener('click', (event) => {
                event.target.classList.add('active');
            })
        });
    }

    // displays the tasks associated with a given project
    const displayTasks = function displayTasks(project) {
        // dom references
        const main_panel = document.querySelector('.content .main-panel');
        console.log(main_panel);

        // grab the task / to-do list
        const tasks = project.getList();

        // create an unsorted list for the project's tasks
        const task_list = document.createElement('ul');
        task_list.dataTitle = project.getTitle();

        // create a list item for each task
        for (let i = 0; i < tasks.length; i++) {
            const task = tasks[i];
            const task_item = document.createElement('li');
            task_item.classList.add('todo-item');
            task_item.dataIndex = i;

            // build the left side of the task display
            const left_side = document.createElement('div');

            // complete status indicator
            const complete_status = document.createElement('div');
            complete_status.classList.add('item-complete');

            // task title
            const task_title = document.createElement('div');
            task_title.textContent = task.title;
            task_title.classList.add('item-title');

            left_side.appendChild(complete_status);
            left_side.appendChild(task_title);

            // build the right side of the task display
            const right_side = document.createElement('div');

            // task desc button
            const task_desc = document.createElement('div');
            task_desc.textContent = 'Desc';
            task_desc.classList.add('item-desc');

            // task desc button
            const task_date = document.createElement('div');
            task_date.textContent = task.dueDate;
            task_date.classList.add('item-date');

            // task prio indicator
            const task_prio = document.createElement('div');
            task_prio.classList.add('item-prio');
            task_prio.classList.add(task.prio);

            // edit task symbol
            const task_edit = document.createElement('span');
            task_edit.textContent = 'edit_note';
            task_edit.classList.add('material-icons');

            // delete task symbol
            const task_delete = document.createElement('span');
            task_delete.textContent = 'delete';
            task_delete.classList.add('material-icons');

            right_side.appendChild(task_desc);
            right_side.appendChild(task_date);
            right_side.appendChild(task_prio);
            right_side.appendChild(task_edit);
            right_side.appendChild(task_delete);

            // append both to the task_item
            task_item.appendChild(left_side);
            task_item.appendChild(right_side);

            // append the item to the main panel
            main_panel.appendChild(task_item);
        }
    };

    const setupAddProject = function setupAddProject() {
        // dom references
        const add_project = document.querySelector('.add-project');
        const add_project_dialog = document.querySelector('#add-project-dialog');
        const add_project_form = document.querySelector('#add-project-form'); 

        // open the add project form when the user clicks the button
        add_project.addEventListener('click', () => {
            add_project_dialog.showModal();
        });

        // create a new project when the user submits the form
        add_project_form.addEventListener('submit', (event) => {
            const testItem = scheduleController.createProject(event.target.title.value);
            console.log(testItem);
            console.log(testItem.getTitle());
        });
    }

    const setupAddTask = function setupAddTask() {
        // dom references
        const add_task = document.querySelector('.add-item');
        const add_task_dialog = document.querySelector('#add-task-dialog');
        const add_task_form = document.querySelector('#add-task-form'); 

        // open the add task form when the user clicks the button
        add_task.addEventListener('click', () => {
            add_task_dialog.showModal();
        });

        // create a new task when the user submits the form
        add_task_form.addEventListener('submit', (event) => {
            const testItem = scheduleController.toDoItem(event.target.title.value, event.target.desc.value, event.target.dueDate.value, event.target.prio.value);
            console.log(testItem);
        });
    }

    return { setupSidebar, displayTasks, setupAddProject, setupAddTask};
}();

// front-end setup
DOMController.setupSidebar();
DOMController.setupAddTask();
DOMController.setupAddProject();

// back-end setup
function debug() {
    // add test project
    scheduleController.addProject('Test Project');

    // create a test task item
    const test_task = scheduleController.toDoItem (
        'To-Do Website Back-End', 
        'Finish setting up the back-end handling of tasks and projects, then link up with front-end display',
        'Feb 21st',
        'medium'
    );

    // grab the test project
    const projects = scheduleController.getProjects();
    console.log(projects);
    const test_project = projects[0];

    // add the task to the project
    test_project.addItem(test_task);

    // grab the task list from the project
    const tasks = test_project.getList();
    console.log(tasks);

    // display the tasks
    DOMController.displayTasks(test_project);
}

debug();

