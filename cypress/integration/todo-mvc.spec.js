/// <reference types="Cypress" />
import {
    visit,
    addTodo,
    validateItemsLeft,
    clearCompleted,
    completeTodo,
    checkLabelText,
    checked,
    textDecoration,
    emptyTodoList,
    destroyTodo,
    checkPlaceHolder
} from "../actions/todo-mvc.action";

import { createTodo } from "../factory/todo-mvc.factory";


describe('testes e2e lista de tarefas', ()=>{
    beforeEach(()=>{
        visit()
    })
    it('validar placeholder', ()=>{
        checkPlaceHolder('What needs to be done?')
    })

    it('validar se item da lista ta marcado', ()=>{
        addTodo('Arrumar Quarto')
        completeTodo(1)
        checked(1)
    })

    it('validar exclusão de item lista', ()=>{
        addTodo('Arrumar Quarto')
        destroyTodo(1)
        emptyTodoList()
    })

    it('validar nome da tarefa na lista', ()=>{
        addTodo('Arrumar Quarto')
        checkLabelText(1,'Arrumar Quarto')
    })

    it('validar texto cortado após selecionar tarefa', ()=>{
        addTodo('Arrumar Quarto')
        completeTodo(1)
        textDecoration(1)
    })

    it('validar quantidade de items restantes', ()=>{
        addTodo('Arrumar Quarto')
        validateItemsLeft(1)
        addTodo('Lavar louça')
        validateItemsLeft(2)
        addTodo('Passar as roupas')
        validateItemsLeft(3)
        completeTodo(1)
        validateItemsLeft(2)
        completeTodo(2)
        validateItemsLeft(1)
    })

    it('limpar itens completados', ()=>{
        addTodo('Arrumar Quarto')
        addTodo('Lavar louça')
        validateItemsLeft(2)
        completeTodo(1)
        checkLabelText(1,'Arrumar Quarto')
        clearCompleted()
        validateItemsLeft(1)
        checkLabelText(1,'Lavar louça')
    })

    it('validar lista vazia', ()=>{
        addTodo('Arrumar Quarto')
        completeTodo(1)
        clearCompleted()
        emptyTodoList()
    })

    it('gerar lista aleatória', ()=>{
        addTodo(createTodo())
        addTodo(createTodo())
        addTodo(createTodo())
        addTodo(createTodo())
        addTodo(createTodo())
        addTodo(createTodo())
        addTodo(createTodo())
        addTodo(createTodo())
        addTodo(createTodo())
        addTodo(createTodo())
        addTodo(createTodo())
        addTodo(createTodo())
    })
})
