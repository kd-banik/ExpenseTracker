//Router file
let todoList = require('../controller/appController');

module.exports = function (app) {
    // let todoList = require('../controller/appController');

    //todoList routes
    app.route('/tblOne')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);

    app.route('/tblOne/:id')
        .get(todoList.read_a_task)
        .post(todoList.update_a_task)
        .delete(todoList.delete_a_task);
};