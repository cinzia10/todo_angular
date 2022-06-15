export class TodoClass {

   /**public: valore di default*/ name: string;
  /**private: non è possibile visualizzare i dati*/ tags: string[];
  /**readonly: è possibile modificarlo una sola volta, all'interno del costruttore */ private readonly _creationDate: number;
  priority: TodoPriority;

  constructor(name: string, tags: string[] = [], creationDate: Date = new Date(), priority: TodoPriority = TodoPriority.LOW){
    this.name = name;
    this.tags = tags;
    this._creationDate = creationDate.getTime();
    this.priority = priority;
  }

  get creationDate(){
    return new Date(this._creationDate);
  }

  get color():string{
    return getPriorityColor(this.priority)
  }

  get string():string{
    return getPriorityString(this.priority)
  }
}


// export enum TodoPriority{
//   DONE = {order: -1, name: 'completato', color: 'gray'},
//   LOW = {order: 0, name: 'bassa', color: 'green'},
//   MEDIUM = {order: 1, name: 'media', color: 'yellow'},
//   HIGH = {order: 2, name: 'alta', color: 'orange'},
//   VERYHIGH = {order: 3, name: 'molto alta', color: 'red'}
// }

export enum TodoPriority{
  DONE = -1,
  LOW = 0,
  MEDIUM = 1,
  HIGH = 2,
  VERYHIGH = 3
}

export function getPriorityColor(priority: TodoPriority): string{
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
export function getPriorityString(priority: TodoPriority): string{
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
