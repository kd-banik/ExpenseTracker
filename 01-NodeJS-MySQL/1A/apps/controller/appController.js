let Task = require('../model/appModel.js')
/////////////////////////////////////////////////////////////////////////////////////////////////////
exports.list_all_tasks = function (req, res, next) {
    Task.getAllTask(function (err, name) {
        console.log('controller')
        if (err) {
            res.send(err);
            // console.log('res', name);
            console.log(req.query);
        }
        res.send(name);
    });
};
///////////////////////////////////////////////////////////////////////////////////////////////////
exports.create_a_task = function (req, res, next) {
    let new_task = new Task(req.body);

    //handles null error
    if (!new_task.name || !new_task.email ||!new_task.designation) {
        res.status(400).send({
            error: true,
            message: 'Please provide data'
        });
    }
    else {
        Task.createTask(new_task, function (err, name) {
            if (err) {
                res.send(err);
            }
            res.json(name);
        });
    }
};
///////////////////////////////////////////////////////////////////////////////////////////////////
exports.read_a_task = function (req, res, next) {
    Task.getTaskById(req.params.id, function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json(name);
    });
};
///////////////////////////////////////////////////////////////////////////////////////////////////
exports.update_a_task = function (req, res, next) {
    Task.updateById(req.params.id, new Task(req.body), function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
};
///////////////////////////////////////////////////////////////////////////////////////////////////
exports.delete_a_task = function (req, res, next) {
    Task.remove(req.params.id, function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Record successfully deleted' });
    });
};