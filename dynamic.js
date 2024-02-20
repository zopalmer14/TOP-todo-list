
// back-end SCHEDULE CONTROLLER
const scheduleController = function scheduleController() {
    // list of projects
    const projectList = [];
    const active_project = 0;

    const getProjects = () => projectList;
    const getActiveProject = () => projectList[active_project];
    const setActiveProject = (index) => active_project = index;

    // Project Factory Function (i.e. a list of to-do items)
    function projectItem(title) {
        const toDoList = [];

        const getTitle = () => title;

        const getList = () => toDoList;

        // Task Item Factory Function 
        function toDoItem(title, desc, dueDate, prio) {
            return { title, desc, dueDate, prio };
        };

        // add to-do item to project
        const addItem = function addItem(title, desc, dueDate, prio) {
            const new_item = toDoItem(title, desc, dueDate, prio);
            toDoList.push(new_item);
        };

        // delete to-do item from project
        const deleteItem = function deleteItem(index) {
            if (index > -1 && index < toDoList.length) {
                toDoList.splice(index, 1); 
            } else {
                console.log(`Error: index out of bounds ${index}`);
            }
        };

        return { getTitle, getList, addItem, deleteItem }
    };

    // add project to list
    const addProject = function addProject(title) {
        const new_project = projectItem(title);
        projectList.push(new_project);
    };

    // delete project from list
    const deleteProject = function deleteProject(index) {
        if (index > -1 && index < projectList.length) { 
            projectList.splice(index, 1); 
        } else {
            console.log(`Error: index out of bounds ${index}`);
        }
    };

    return { getProjects, getActiveProject, setActiveProject, addProject, deleteProject };
}();

// DOM MANIPULATION

const DOMController = function DOMController() {
    // creates a list of the personal projects in the sidebar
    const displayProjects = function displayProjects(projects) {
        // dom references
        const personal_projects = document.querySelector('#personal-projects');
        const add_project = document.querySelector('li.add-project');

        // reset the project list and re-add the 'add project' option
        personal_projects.replaceChildren(add_project);

        // create a list item to represent each project
        for (let i = 0; i < projects.length; i++) {
            const project = projects[i];
            const list_item = document.createElement('li');
            list_item.dataset.index = i;

            // create the left side, which contains the logo and project title 
            const left_side = document.createElement('div');

            // create the logo 
            const logo = document.createElement('span');
            logo.classList.add('material-icons');
            logo.textContent = 'list';

            // create a div to hold the title
            const title = document.createElement('div');
            title.textContent = project.getTitle();

            // append both to the left side
            left_side.appendChild(logo);
            left_side.appendChild(title);

            // create the delete option
            const item_delete = document.createElement('span');
            item_delete.classList.add('material-icons');
            item_delete.classList.add('delete');
            item_delete.textContent = 'delete';

            // append the left side and delete option to the list item
            list_item.appendChild(left_side);
            list_item.appendChild(item_delete);

            // append the list item to the list of personal projects
            personal_projects.appendChild(list_item);
        }
    };

    // displays the tasks associated with a given project
    const displayTasks = function displayTasks(project) {
        // dom references
        const task_list = document.querySelector('ul.todo-list');
        const add_task = document.querySelector('li.add-item');

        // set the title of the list to the project title 
        task_list.dataset.title = project.getTitle(); 

        // reset the current task_list and re-add the 'add task' option
        task_list.replaceChildren(add_task);
        
        // grab the task / to-do list
        const tasks = project.getList();

        // create a list item for each task
        for (let i = 0; i < tasks.length; i++) {
            const task = tasks[i];
            const task_item = document.createElement('li');
            task_item.classList.add('todo-item');
            task_item.dataset.index = i;

            // we will build the banner for the list item one item at a time
            const task_banner = document.createElement('div');
            task_banner.classList.add('banner');

            // build the left side of the task display
            const left_side = document.createElement('div');

            // complete status indicator
            const complete_status = document.createElement('div');
            complete_status.textContent = 'X';
            complete_status.classList.add('item-complete');

            // reactively change the complete status of the item (changes appearance only, nothing in back-end)
            complete_status.addEventListener('click', (event) => {
                event.target.classList.toggle('finished');
            })

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
            task_edit.classList.add('edit');

            // delete task symbol
            const task_delete = document.createElement('span');
            task_delete.textContent = 'delete';
            task_delete.classList.add('material-icons');
            task_delete.classList.add('delete');

            // only append 'desc' div if the task has a description
            if (task.desc !== '') {
                right_side.appendChild(task_desc);
            }

            right_side.appendChild(task_date);
            right_side.appendChild(task_prio);
            right_side.appendChild(task_edit);
            right_side.appendChild(task_delete);

            // append both to the banner
            task_banner.appendChild(left_side);
            task_banner.appendChild(right_side);

            // create the desc-extension 
            const task_desc_ext = document.createElement('div');
            task_desc_ext.textContent = task.desc;
            task_desc_ext.classList.add('desc-extension');
            task_desc_ext.classList.add('hidden');

            // reactively show the desc-extension when the user clicks the 'desc' div
            task_desc.addEventListener('click', () => {
                task_desc_ext.classList.toggle('hidden');
                task_banner.classList.toggle('border');
            });

            // append the banner and desc extension to the list_item
            task_item.appendChild(task_banner);
            task_item.appendChild(task_desc_ext);

            // append the item to the task list
            task_list.appendChild(task_item);
        }
    };

    return { displayProjects, displayTasks};
}();

// abstract layer outside of the controllers that facilitates their communication
const pageManager = function pageManager() {
    const setupSidebar = function setupSidebar() {
        // get the list of projects from the back-end
        const projects = scheduleController.getProjects();

        function setupAddProject() {
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
                // create a new project with the form info and add it to the project list
                scheduleController.addProject(event.target.title.value);
    
                // re-render the list of projects to reflect the change
                DOMController.displayProjects(projects);
            });
        }

        // function that handles the user choosing a different project to display
        const switchActive = (event) => {
            // grab the currently active list item and toggle the class
            const curr_active = document.querySelector('#nav li.active');
            curr_active.classList.toggle('active');

            // now make the targeted list item the active one
            event.currentTarget.classList.add('active');
        };

        // to setup the sidebar:
        // - display the list of projects 
        // - make the project list dynamic and clickable 
        // - make the 'add project' option dynamic by setting up the click and form logic
        DOMController.displayProjects(projects);

        // NEED TO FIX
        const nav_items = document.querySelectorAll('#nav li');
        nav_items.forEach((item) => {
            item.addEventListener('click', switchActive);
        });

        setupAddProject();
    };

    const setupMainPanel = function setupMainPanel() {
        // grab the active project from the back-end
        const active_project = scheduleController.getActiveProject();

        function setupRemoveTask() {
            // dom references
            const delete_icons = document.querySelectorAll('li.todo-item span.material-icons.delete');

            // delete the associated list item when the user clicks one of the delete material-icons 
            delete_icons.forEach((delete_icon) => {
                delete_icon.addEventListener('click', (event) => {
                    // grab the list item the delete icon belongs to -- three levels up the DOM tree 
                    const list_item = event.target.parentNode.parentNode.parentNode;

                    // remove the associated task from the active project
                    const index = list_item.dataset.index;
                    active_project.deleteItem(index);

                    // re-render the list of tasks for the active project to reflect the change
                    DOMController.displayTasks(active_project);
                    setupRemoveTask();
                });
            });
        }

        function setupAddTask() {
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
                // create a new task with the form info and add it to the active project
                active_project.addItem (
                    event.target.title.value, 
                    event.target.desc.value, 
                    event.target.dueDate.value, 
                    event.target.prio.value
                );
    
                // re-render the list of tasks for the active project to reflect the change
                DOMController.displayTasks(active_project);
                setupRemoveTask();
            });
        }

        // to setup the main panel:
        // - display the tasks associated with the active project
        // - link up the delete logo's with the delete operation in the back-end
        // - make the 'add_task' option dynamic by setting up the click and form logic
        DOMController.displayTasks(active_project);
        setupRemoveTask();
        setupAddTask();
    };

    return { setupSidebar, setupMainPanel }
}();

function debug() {
    // add test project
    scheduleController.addProject('Test Project');

    // grab the test project
    const projects = scheduleController.getProjects();
    const test_project = projects[0];

    // create and add a test task to the project
    test_project.addItem (
        'To-Do Website Back-End', 
        'Finish setting up the back-end handling of tasks and projects, then link up with front-end display',
        'Feb 21st',
        'medium'
    );

    // front-end setup
    pageManager.setupSidebar();
    pageManager.setupMainPanel();
}

debug();

