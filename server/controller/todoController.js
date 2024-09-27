const axios = require('axios')
let url = 'https://dummyjson.com/todos'
const { Todo } = require('../models')

class TodoController {
    static async showTodos(req, res, next) {
        try {
            const { data } = await axios({
                url: `${url}`,
                method: 'GET'
            })
            res.status(200).json(data.todos)
        } catch (err) {
            next(err)
        }
    }

    static async addTodos(req, res, next) {
        try {
            const TodoId  = req.body.ToDoId
            const UserId = req.user.id
            if (!TodoId) {
                throw { name: 'EmptyBody' }
            }
            const todo = await Todo.create({ TodoId, UserId, status: false })
            res.status(201).json(todo)
            console.log("edited");
        } catch (err) {
            next(err)
        }
    }

    static async showUserTodo(req, res, next) {
        try {
            const id = req.user.id
            const myTodos = await Todo.findAll({ where: { UserId: id } })
            // console.log(myTodos);
            const todos = await Promise.all(
                myTodos.map(async (myTodo) => {
                    const todo = await fetchTodo(myTodo.TodoId)
                    const myId = myTodo.id
                    const activities = todo.todo
                    const status = myTodo.status
                    return { id: myId, TodoId: todo.id, UserId: id, activities, status }
                })
            )
            res.status(200).json(todos)
            // console.log(todos);
        } catch (err) {
            next(err)
        }
    }

    static async deleteTodo (req, res, next){
        try {
            const id  = +req.params.id
            const todo = await Todo.findOne({where : { id }})
            if(!todo){
                throw { name : "noProductFound"}
            }
            await todo.destroy()
            res.status(200).json({ message : "Todo deleted"})
        } catch (err) {
            console.log(err);
            next(err)
        }
    }

    static async patchTodo(req, res, next){
        try {
            const id = +req.params.id
            const todo = await Todo.findOne({where : { id }})
            if(!todo){
                throw { name : 'noProductFound'}
            }

            const status = req.body.status
            await Todo.update({status}, {where : {id}})
            res.status(201).json({message : "Todo Updated"})
        } catch (err) {
            console.log(err);
            next(err)
        }
    }

}

const fetchTodo = async (TodoId) => {
    const { data } = await axios({
        url: `${url}/${TodoId}`,
        method: 'GET'
    })
    return data
}

module.exports = TodoController
