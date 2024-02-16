
// back-end SCHEDULE CONTROLLER
const scheduleController = function scheduleController() {
    // list of projects
    const projectList = [];

    const getProjects = () => projectList;

    // add project to list
    const addProject = function addProject(project) {
        projectList.push(project);
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

        return { title, getList, addItem, deleteItem }
    };

    // To-Do Item Factory Function 
    const toDoItem = function toDoItem(title, desc, dueDate, prio) {
        return { title, desc, dueDate, prio };
    };

    return { getProjects, addProject, deleteProject, createProject, toDoItem };
}();

// DOM MANIPULATION

const DOMController = function DOMController() {
    const setupSidebar = function setupSidebar() {
        const nav_items = document.querySelectorAll('#nav>ul>li');

        nav_items.forEach((item) => {
            item.addEventListener('click', (event) => {
                event.target.classList.add('active');
            })
        });
    }

    const setupAddProject = function setupAddProject() {
        const add_button = document.querySelector('#add-button');
        const dialog = document.querySelector('dialog');
        const add_project_form = document.querySelector('#add-project-form'); 

        // open the add project form when the user clicks the button
        add_button.addEventListener('click', () => {
            dialog.showModal();
        });

        // create a new project when the user submits the form
        add_project_form.addEventListener('submit', (event) => {
            console.log(event);
        });
    }

    return { setupSidebar, setupAddProject};
}();

DOMController.setupSidebar();
DOMController.setupAddProject();

