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
        addTodo(createTodo())
    })
    it('validar placeholder', ()=>{
        checkPlaceHolder('What needs to be done?')
    })

    it('validar se item da lista ta marcado', ()=>{
        completeTodo(1)
        checked(1)
    })

    it('validar exclusão de item lista', ()=>{
        destroyTodo(1)
        emptyTodoList()
    })

    it('validar texto cortado após selecionar tarefa', ()=>{
        completeTodo(1)
        textDecoration(1)
    })

    it('validar lista vazia', ()=>{
        completeTodo(1)
        clearCompleted()
        emptyTodoList()
    })

   it('gerar lista aleatória', ()=>{
    var i;
    for (i= 0; i < 10; i++) {
        addTodo(createTodo())
    }
    })

    /* Testes a serem alterados utilizando actions.

       it('validar nome da tarefa na lista', ()=>{
        addTodo('Arrumar Quarto')
        checkLabelText(1,'Arrumar Quarto')
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
     */
})


