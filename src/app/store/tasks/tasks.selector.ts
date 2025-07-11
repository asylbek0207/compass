import { createFeatureSelector, createSelector } from '@ngrx/store';
import {ITasksState} from '../../interfaces/store/tasks.interface';

export const selectTasksState = createFeatureSelector<ITasksState>('tasks');

export const selectTasks = createSelector(
  selectTasksState,
  state => state.tasks
)
