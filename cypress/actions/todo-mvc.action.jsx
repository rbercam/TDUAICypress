export function checkPlaceHolder(text){
    cy.get('.new-todo').should('have.attr','placeholder',text)
}

export function visit(){
    cy.visit('/')
}

export function addTodo(text){
    cy.get('.new-todo').type(text + '{enter}')
}

export function validateItemsLeft(num){
    if(num == 1){
        cy.contains(num +' item left').should('have.contain.text', num +' item left')
    }
    else{
        cy.contains(num +' items left').should('have.contain.text', num +' items left')
    }
}

export function clearCompleted(){
    cy.get('.clear-completed').click()
}

export function completeTodo(position){
    cy.get(`.todo-list li:nth-child(${position}) .toggle`).click()
}

export function destroyTodo(position){
    cy.get(`.todo-list li:nth-child(${position}) .destroy`).click({force: true})
}

export function checkLabelText(position, text){
    cy.get(`.todo-list li:nth-child(${position}) label`).should('have.text', text)
}

export function checked(position){
    cy.get(`.todo-list li:nth-child(${position}) .toggle`).should('be.checked')
}

export function textDecoration(position){
    cy.get(`.todo-list li:nth-child(${position}) label`).should('have.css', 'text-decoration-line', 'line-through')
}

export function emptyTodoList(){
    cy.get('.todo-list').should('not.have.descendants', 'li')
}
