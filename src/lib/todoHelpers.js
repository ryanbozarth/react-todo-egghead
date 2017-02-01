export const addTodo = (list, item) => [...list, item]

export const generateID = () => Math.floor(Math.random()*10000)

export const findByID = (id, list) => list.find(item => item.id === id)
