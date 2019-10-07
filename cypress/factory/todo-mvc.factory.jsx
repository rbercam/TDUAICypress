const faker = require('faker')

export function createTodo(){
    return faker.random.arrayElement([
        "Arrumar quarto",
        "Lavar louça",
        "Passar roupas",
        "Dar banho nos cachorros",
        "Limpar banheiro",
        "Fazer almoço"
    ])
}