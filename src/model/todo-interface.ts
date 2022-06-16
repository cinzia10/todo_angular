import { TodoPriority } from './todo-class';

export interface TodoInterface {
  id?: string;
  name: string;
  tags: string[];
  priority: TodoPriority;
  creationDate: number;
}


export function fromPriorityToColor(priority: TodoPriority): string{
  switch (priority) {
    case TodoPriority.DONE:
      return 'grey'
    case TodoPriority.LOW:
      return 'green'
    case TodoPriority.MEDIUM:
      return 'yellow'
    case TodoPriority.HIGH:
      return 'orange'
    case TodoPriority.VERYHIGH:
      return 'red'
    default:
    return 'red'
  }
}

export function fromPriorityToDesc(priority: TodoPriority): string{
  switch (priority) {
    case TodoPriority.DONE:
      return 'completata'
    case TodoPriority.LOW:
      return 'bassa'
    case TodoPriority.MEDIUM:
      return 'media'
    case TodoPriority.HIGH:
      return 'alta'
    case TodoPriority.VERYHIGH:
      return 'molto alta'
    default:
    return 'molto alta'
  }
}
