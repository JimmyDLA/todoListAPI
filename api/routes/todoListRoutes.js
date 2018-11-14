const router = require('express').Router;
const todoList = require('../controllers/todoListController');

router.route('/taks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_task)

router.route('/task/:taskId')
    .get(todoList.read_task)
    .put(todoList.update_task)
    .delete(todoList.delete_task)

module.exports = router;



// module.exports = function(app) {
//     var todoList = require('../controllers/todoListController');

//     // todoList Routes
//     app.route('/tasks')
//         .get(todoList.list_all_tasks)
//         .post(todoList.create_a_task);


//     app.route('/tasks/:taskId')
//         .get(todoList.read_a_task)
//         .put(todoList.update_a_task)
//         .delete(todoList.delete_a_task);
// };