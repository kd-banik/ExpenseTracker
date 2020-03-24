let sql = require('./database.js');

let Task = function(tblOne) {
//   this.tblOne = tblOne.tblOne;
  this.name = tblOne.name;
  this.email = tblOne.email;
  this.designation = tblOne.designation;  
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
Task.createTask = function(newtask, result) {
    sql.query('INSERT INTO tblOne (name, email, designation) values ?', newtask, function(err, res) {
        if (err) {
            console.log('Error: ',err);
            result(err, null);
        }
        else
        {
            console.log(res.insertid);
            result(null, res.insertid);
        }
    });
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////
Task.getAllTask = function(result) {
    sql.query('SELECT * FROM tblOne', function(err, res) {
        if (err) {
            console.log('Error: ',err);
            result(null, err);
        }
        else
        {
            console.log('tblOne: ',res);
            result(null, res);
        }
    });
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////
Task.getTaskById = function(id, result) {
    sql.query('SELECT name, email FROM tblOne WHERE id=?', id, function(err, res) {
        if (err) {
            console.log('Error: ',err);
            result(err, null);
        }
        else
        {
            // console.log('name: ',res);
            result(null, res);
        }
    });
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////
Task.UpdateTaskById = function(id, task, result) {
    sql.query('UPDATE tblOne SET email=? WHERE id=?', [dbOne.email, id], function(err, res) {
        if (err) {
            console.log('Error: ',err);
            result(err, null);
        }
        else
        {
            // console.log('name: ',res);
            result(null, res);
        }
    });
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////
Task.remove = function(id, result) {
    sql.query('DELETE FROM tblOne WHERE id=?', [id], function(err, res) {
        if (err) {
            console.log('Error: ',err);
            result(err, null);
        }
        else
        {
            // console.log('name: ',res);
            result(null, res);
        }
    });
};

module.exports = Task;