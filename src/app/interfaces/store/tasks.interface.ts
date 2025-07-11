export interface ITasksState {
  tasks: ITask[];
}

export interface ITask {
  id: number;
  isDone: boolean;
  title: string;
  description: string;
  date: string;
}
