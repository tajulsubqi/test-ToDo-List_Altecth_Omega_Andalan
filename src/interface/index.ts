export interface Todo {
  title: string
  description: string
  category: string
}

export interface TodosState {
  todos: Todo[]
  loading: boolean
  categories: string[]
}
