
// css bundling
import './styles.css';

// package bundling
import { format, isToday, isThisWeek, compareAsc } from "date-fns";

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
        const taskList = [];
        const getTasks = () => taskList;

        let project_title = title;
        const getTitle = () => project_title;
        const setTitle = (new_title) => project_title = new_title;

        // Task Item Factory Function 
        function toDoItem(title, desc, dueDate, prio) {
            let task_title = title;
            const getTitle = () => task_title;
            const setTitle = (new_title) => task_title = new_title;

            let task_desc = desc;
            const getDesc = () => task_desc;
            const setDesc = (new_desc) => task_desc = new_desc;

            let task_due = dueDate;
            const getDueDate = () => task_due;
            const setDueDate = (new_date) => task_due = new_date;

            let task_prio = prio;
            const getPrio = () => task_prio;
            const setPrio = (new_prio) => task_prio = new_prio;

            return { getTitle, setTitle, getDesc, setDesc, getDueDate, setDueDate, getPrio, setPrio };
        };

        // add to-do item to project
        const addItem = function addItem(title, desc, dueDate, prio) {
            const new_item = toDoItem(title, desc, dueDate, prio);
            taskList.push(new_item);
        };

        // delete to-do item from project
        const deleteItem = function deleteItem(index) {
            if (index > -1 && index < taskList.length) {
                taskList.splice(index, 1); 
            } else {
                console.log(`Error: index out of bounds ${index}`);
            }
        };

        return { getTasks, getTitle, setTitle, addItem, deleteItem }
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

        for (let i = 0; i < projects.length; i++) {
            // create a list item to represent each project
            const curr_project = projects[i];
            const project_item = createProjectItem(curr_project, i);

            // append the list item to the list of personal projects
            personal_projects.appendChild(project_item);
        }

        // helper function which handles creating the project item's
        function createProjectItem(project, projectIndex) {
            // create a list item and assign it the project's index
            const list_item = document.createElement('li');
            list_item.dataset.index = projectIndex;
    
            // create the left side, which contains the logo and project title 
            const item_left_side = createProjectLeftSide();
    
            // create the right side, which contains the edit and delete options
            const item_right_side = createProjectRightSide(); 
    
            // append the left and right sides to the list item
            list_item.appendChild(item_left_side);
            list_item.appendChild(item_right_side);
    
            return list_item;
            
            function createProjectLeftSide() {
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
    
                return left_side;
            }
            
            function createProjectRightSide() {
                const right_side = document.createElement('div');
    
                // create the edit option
                const item_edit = document.createElement('span');
                item_edit.classList.add('material-icons');
                item_edit.classList.add('edit');
                item_edit.textContent = 'edit_note';
                pageInterface.setupEditProject(item_edit);
    
                // create the delete option
                const item_delete = document.createElement('span');
                item_delete.classList.add('material-icons');
                item_delete.classList.add('delete');
                item_delete.textContent = 'delete';
                pageInterface.setupDeleteProject(item_delete);
    
                // append both to the right side
                right_side.appendChild(item_edit);
                right_side.appendChild(item_delete);
    
                return right_side;
            }
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
        const tasks = project.getTasks();

        // grab the sort input and determine the variable to sort by 
        const sort_input = document.querySelector('#sort-variable');
        const sort_variable = sort_input.checked;

        console.log('sort variable - ' + sort_variable);

        // grab the sort DESC input  
        const sort_descending = document.querySelector('#sort-descending');
        const sort_desc = sort_descending.checked;

        console.log('sort direction - ' + sort_desc);

        // function to sort the tasks by due date
        const sortByDate = function sortByDate(taskA, taskB) {
            return compareAsc(taskA.getDueDate(), taskB.getDueDate());
        }

        // function to sort the tasks by priority
        const sortByPrio = function sortByPrio(taskA, taskB) {
            const prioA = taskA.getPrio();
            const prioB = taskB.getPrio();

            let result = 'error';

            switch (prioA) {
                case 'low':
                    result = prioB === 'low' ? 0 : -1;
                    break;
                case 'high':
                    result = prioB === 'high' ? 0 : 1;
                    break;
                case 'medium':
                    switch (prioB) {
                        case 'low':
                            result = 1;
                            break;
                        case 'high':
                            result = -1;
                            break;
                        case 'medium':
                            result = 0;
                    }
            }

            return result;
        };

        // sort by priority if sort_variable = true; by due date otherwise
        if (sort_variable) {
            tasks.sort(sortByPrio)
        } else {
            tasks.sort(sortByDate);
        }

        // reverse the book order if the DESC option is true (checked)
        if (sort_desc) {
            tasks.reverse();
        }

        // create a task-item for each task and add it to the list 
        tasks.forEach((task, index) => {
            const task_item = createTaskItem(task, index); 
            task_list.appendChild(task_item);
        });

        // helper function to create a task item
        function createTaskItem(task, taskIndex) {
            const task_item = document.createElement('li');
            task_item.classList.add('todo-item');
            task_item.dataset.index = taskIndex;

            // create a banner for the task item 
            const task_banner = createBanner();

            // create the desc-extension 
            const task_desc_ext = document.createElement('div');
            task_desc_ext.textContent = task.getDesc();
            task_desc_ext.classList.add('desc-extension');

            // append the banner and desc extension to the task item
            task_item.appendChild(task_banner);
            task_item.appendChild(task_desc_ext);

            return task_item;

            function createBanner() {
                const task_banner = document.createElement('div');
                task_banner.classList.add('banner');

                // build the left side of the banner
                const left_side = createBannerLeft(); 

                // build the left side of the banner
                const right_side = createBannerRight();

                // append both to the banner
                task_banner.appendChild(left_side);
                task_banner.appendChild(right_side);

                return task_banner;
                
                function createBannerLeft() {
                    const left_side = document.createElement('div');

                    // completion status indicator
                    const complete_status = document.createElement('div');
                    complete_status.textContent = 'X';
                    complete_status.classList.add('item-complete');

                    // reactively change the completion status of the item (changes appearance only, nothing in back-end)
                    complete_status.addEventListener('click', (event) => {
                        event.target.classList.toggle('finished');
                    })

                    // task title
                    const task_title = document.createElement('div');
                    task_title.textContent = task.getTitle();
                    task_title.classList.add('item-title');

                    left_side.appendChild(complete_status);
                    left_side.appendChild(task_title);

                    return left_side;
                }

                function createBannerRight() {
                    const right_side = document.createElement('div');

                    // task desc button
                    const task_desc = document.createElement('div');
                    task_desc.textContent = 'Desc';
                    task_desc.classList.add('item-desc');

                    // reactively show the desc-extension when the user clicks the 'desc' div
                    task_desc.addEventListener('click', () => {
                        task_desc_ext.classList.toggle('showing');
                        task_banner.classList.toggle('ext-showing');
                    });

                    // task due date
                    const task_date = document.createElement('div');
                    task_date.textContent = format(task.getDueDate(), 'MMM d');
                    task_date.classList.add('item-date');

                    // task prio indicator
                    const task_prio = document.createElement('div');
                    task_prio.classList.add('item-prio');
                    task_prio.classList.add(task.getPrio());

                    // edit task symbol
                    const task_edit = document.createElement('span');
                    task_edit.textContent = 'edit_note';
                    task_edit.classList.add('material-icons');
                    task_edit.classList.add('edit');
                    pageInterface.setupEditTask(task_edit);

                    // delete task symbol
                    const task_delete = document.createElement('span');
                    task_delete.textContent = 'delete';
                    task_delete.classList.add('material-icons');
                    task_delete.classList.add('delete');
                    pageInterface.setupDeleteTask(task_delete);

                    // only append 'desc' div if the task has a description
                    if (task.getDesc() !== '') {
                        right_side.appendChild(task_desc);
                    }

                    right_side.appendChild(task_date);
                    right_side.appendChild(task_prio);
                    right_side.appendChild(task_edit);
                    right_side.appendChild(task_delete);

                    return right_side;
                }
            }
        }
    };

    return { displayProjects, displayTasks };
}();

// abstract layer outside of the controllers that facilitates their communication
const pageInterface = function pageInterface() {
    const initializePage = function initializePage() {
        // to initialize the page:
        // - setup the sidebar 
        // - setup the main panel
        setupSidebar();
        setupMainPanel();

        function setupSidebar() {
            // to setup the sidebar:
            // - display the list of projects 
            // - make the project list dynamic and clickable (.active toggling) 
            // - make the 'add project' option dynamic by setting up the click and form logic
            // - setup the edit project form 
            const projects = scheduleController.getProjects();
            DOMController.displayProjects(projects);
            setupInboxToggle();
            setupAddProject();
            setupEditProjectForm();
    
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

                    // reset the form inputs
                    add_project_form.reset(); 
        
                    // re-render the list of projects to reflect the change
                    const projects = scheduleController.getProjects();
                    DOMController.displayProjects(projects);
                });
            }
    
            function setupEditProjectForm() {
                // dom references
                const edit_project_form = document.querySelector('#edit-project-form'); 
    
                // edit the project when the user submits the form
                edit_project_form.addEventListener('submit', (event) => {
                    // grab the project index
                    const index = edit_project_form.dataset.projectIndex;
    
                    // edit the associated project with the form info
                    const projects = scheduleController.getProjects();
                    const assoc_project = projects[index];
                    assoc_project.setTitle(event.target.title.value);
    
                    // re-render the list of projects to reflect the change
                    DOMController.displayProjects(projects);
                });
            }
    
            // NEED TO FIX
            // function that handles the user choosing a different project to display
            function setupInboxToggle() {
                // dom references
                const nav_home_items = document.querySelectorAll('#default-options li');
                nav_home_items.forEach((home_item) => {
                    home_item.addEventListener('click', (event) => {
                        // grab the currently active list item and toggle the class
                        const curr_active = document.querySelector('#nav li.active');
                        curr_active.classList.toggle('active');
            
                        // now make the targeted list item the active one
                        event.currentTarget.classList.add('active');
                    });
                });
            }
        }
    
        function setupMainPanel() {
            // to setup the main panel:
            // - display the tasks associated with the active project
            // - make the 'add_task' option dynamic by setting up the click and form logic
            // - setup the 'edit_task' form to handle editing the tasks in the back-end
            // - setup the sorting options to re-render the tasks when changed  
            const active_project = scheduleController.getActiveProject();
            DOMController.displayTasks(active_project);
            setupAddTask();
            setupEditTaskForm();
            setupTaskSorting();
    
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
                    // grab the active project
                    const active_project = scheduleController.getActiveProject();
    
                    // create a new task with the form info and add it to the active project
                    active_project.addItem (
                        event.target.title.value, 
                        event.target.desc.value, 
                        event.target.dueDate.valueAsDate, 
                        event.target.prio.value
                    );

                    // reset the form inputs
                    add_task_form.reset(); 
        
                    // re-render the list of tasks for the active project to reflect the change
                    DOMController.displayTasks(active_project);
                });
            }

            function setupEditTaskForm() {
                // dom references
                const edit_task_form = document.querySelector('#edit-task-form'); 
    
                // edit the task when the user submits the form
                edit_task_form.addEventListener('submit', (event) => {
                    // grab the task index
                    const index = edit_task_form.dataset.taskIndex;
    
                    // grab the active project
                    const active_project = scheduleController.getActiveProject();

                    // edit the associated task with the form info
                    const tasks = active_project.getTasks();
                    const assoc_task = tasks[index];

                    assoc_task.setTitle(edit_task_form.title.value);
                    assoc_task.setDesc(edit_task_form.desc.value);
                    assoc_task.setDueDate(edit_task_form.dueDate.valueAsDate);
                    assoc_task.setPrio(edit_task_form.prio.value);
    
                    // re-render the list of tasks for the active project to reflect the change
                    DOMController.displayTasks(active_project);
                });
            }

            // function that re-renders tasks when the sorting options is changed / toggled
            function setupTaskSorting() {
                // DOM references
                const sort_variable = document.querySelector('#sort-variable');
                const sort_descending = document.querySelector('#sort-descending');

                // if the sort variable is changed we must re-render the tasks
                sort_variable.addEventListener('change', () => {
                    console.log('change - sort variable');
                    const active_project = scheduleController.getActiveProject();
                    DOMController.displayTasks(active_project);
                });

                // if the sort DESC option is changed we must re-render the tasks
                sort_descending.addEventListener('change', () => {
                    console.log('change - sort direction');
                    const active_project = scheduleController.getActiveProject();
                    DOMController.displayTasks(active_project);
                });
            }
        }
    };

    const setupDeleteProject = function setupDeleteProject(delete_icon) {
        // delete the associated project when the user clicks the delete material-icon 
        delete_icon.addEventListener('click', (event) => {
            // grab the project that the delete icon belongs to -- two levels up the DOM tree 
            const project_item = event.target.parentNode.parentNode;

            // remove the associated project from the project list
            const index = project_item.dataset.index;
            scheduleController.deleteProject(index);

            // re-render the list of projects to reflect the change
            const projects = scheduleController.getProjects();
            DOMController.displayProjects(projects);
        });
    };

    const setupEditProject = function setupEditProject(edit_icon) {
        // dom references
        const edit_project_dialog = document.querySelector('#edit-project-dialog');
        const edit_project_form = document.querySelector('#edit-project-form'); 

        // open the edit project form when the icon is clicked
        edit_icon.addEventListener('click', (event) => {
            // transmit the project index through the interaction
            const index = event.target.parentNode.parentNode.dataset.index;
            edit_project_form.dataset.projectIndex = index;

            // also prefill the title input with the current project title
            const projects = scheduleController.getProjects();
            const assoc_project = projects[index];
            edit_project_form.title.value = assoc_project.getTitle();

            edit_project_dialog.showModal();
        });
    };

    const setupDeleteTask = function setupDeleteTask(delete_icon) {
        // delete the associated list item when the user click the delete material-icon 
        delete_icon.addEventListener('click', (event) => {
            // grab the list item the delete icon belongs to -- three levels up the DOM tree 
            const list_item = event.target.parentNode.parentNode.parentNode;

            // remove the associated task from the active project
            const active_project = scheduleController.getActiveProject();
            const index = list_item.dataset.index;
            active_project.deleteItem(index);

            // re-render the list of tasks for the active project to reflect the change
            DOMController.displayTasks(active_project);
        });
    };

    const setupEditTask = function setupEditTask(edit_icon) {
        // dom references
        const edit_task_dialog = document.querySelector('#edit-task-dialog');
        const edit_task_form = document.querySelector('#edit-task-form'); 

        // open the edit task form when the icon is clicked
        edit_icon.addEventListener('click', (event) => {
            // grab the list item the edit icon belongs to -- three levels up the DOM tree 
            const list_item = event.target.parentNode.parentNode.parentNode;

            // transmit the task index through the interaction
            const index = list_item.dataset.index;
            edit_task_form.dataset.taskIndex = index;

            // also prefill the inputs with the current values from the assoc task
            const active_project = scheduleController.getActiveProject();
            const tasks = active_project.getTasks();
            const assoc_task = tasks[index];

            edit_task_form.title.value = assoc_task.getTitle();
            edit_task_form.desc.value = assoc_task.getDesc();
            edit_task_form.dueDate.valueAsDate = assoc_task.getDueDate();
            edit_task_form.prio.value = assoc_task.getPrio();

            edit_task_dialog.showModal();
        });
    };

    return { initializePage, setupDeleteProject, setupEditProject, setupDeleteTask, setupEditTask }
}();

function debug() {
    // add test project
    scheduleController.addProject('Test Project');

    // front-end setup
    pageInterface.initializePage();
}

debug();

// gathers all tasks across projects to display in the inbox
function gatherAllTasks() {
    // grab the list of projects
    const projects = scheduleController.getProjects();

    // iterate over the projects and add their tasks to the overall list
    all_tasks = [];
    projects.forEach((project) => {
        const project_tasks = project.getTasks();
        all_tasks = all_tasks.concat(project_tasks);
    });

    return all_tasks;
}

// grabs the list of all tasks then filters to keep only those due today
function gatherTodaysTasks() {
    const all_tasks = gatherAllTasks();
    const todays_tasks = all_tasks.filter((task) => isToday(task.getDueDate()));
    return todays_tasks;
}

// grabs the list of all tasks then filters to keep only those due this week
function gatherWeeklyTasks() {
    const all_tasks = gatherAllTasks();
    const weekly_tasks = all_tasks.filter((task) => isThisWeek(task.getDueDate()));
    return weekly_tasks;
}

