'user strict';

module.exports=function (app) {
    let todolist=require('../controllers/appcontroller');

    app.route('/tasks')
    .get(todolist.list_all_tasks)
    .post(todolist.create_a_task)

    app.route('/tasks/:taskId')
    .get(todolist.read_a_task)
    .post(todolist.update_a_task)
    .delete(todolist.delete_a_task)
};