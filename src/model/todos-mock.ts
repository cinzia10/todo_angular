import { TodoClass, TodoPriority } from "./todo-class";

export const TODOS: TodoClass[] = [];

const todo1 = new TodoClass('Fare la spesa');
const todo2 = new TodoClass('Aggiornare curriculum',[], new Date(), TodoPriority.VERYHIGH);
const todo3 = new TodoClass('Prepararsi per l\'esame finale',[], new Date(), TodoPriority.HIGH);


TODOS.push(todo1, todo2, todo3);
