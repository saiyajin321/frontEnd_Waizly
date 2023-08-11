const express = require('express')
const TodoController = require('../controller/todoController')
const { authentication } = require('../middleware/authentication')
const router = express.Router()

router.use(authentication)
router.get('/todo', TodoController.showTodos)
router.post('/todo', TodoController.addTodos)
router.get('/myTodo', TodoController.showUserTodo)
router.delete('/myTodo/:id', TodoController.deleteTodo) 
router.patch('/myTodo/:id', TodoController.patchTodo) 

module.exports = router
