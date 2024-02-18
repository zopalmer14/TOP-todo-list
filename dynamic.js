
// back-end SCHEDULE CONTROLLER
const scheduleController = function scheduleController() {
    // list of projects
    const projectList = [];

    const getProjects = () => projectList;

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

    return { getProjects, addProject, deleteProject, toDoItem, createProject };
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

    return { setupSidebar, setupAddProject, setupAddTask};
}();

// back-end setup
scheduleController.addProject('Testing');

// front-end setup
DOMController.setupSidebar();
DOMController.setupAddTask();
DOMController.setupAddProject();

