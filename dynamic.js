
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

