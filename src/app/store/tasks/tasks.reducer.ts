import { createReducer, on } from '@ngrx/store';
import { initialState } from './tasks.state';
import {reset, editTask, createTask, deleteTask} from './tasks.actions';

export const tasksReducer = createReducer(
  initialState,
  on(editTask, (state, { payload }) =>
    {
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === payload.id) {
            return {
              ...task,
              ...payload,
            }
          }

          return task;
        })
      }
    }
  ),
  on(createTask, (state, { payload}) =>
    {
      const tasks = [...state.tasks];
      tasks.push(payload);

      return {
        ...state,
        tasks
      }
    }
  ),
  on(deleteTask, (state, {id }) => ({
    ...state,
    tasks: state.tasks.filter(task => task.id !== id)
  })),
  on(reset, state => ({ ...state, count: 0 })),
);
