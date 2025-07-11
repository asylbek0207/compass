import { createAction, props } from '@ngrx/store';
import {ITask} from '../../interfaces/store/tasks.interface';

export const createTask = createAction('[Tasks] Create task', props<{ payload: ITask }>());
export const editTask = createAction('[Tasks] Edit task', props<{ payload: ITask }>());
export const deleteTask = createAction('[Tasks] Edit task', props<{ id: number }>());
export const reset = createAction('[Counter] Reset');

