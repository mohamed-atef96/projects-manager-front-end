import { ITask } from './tasks.interface';
export interface IProject{
  _id:string;
  name:string;
  tasks:ITask[];
  createdAt:string;
  updatedAt:string
}

export const defaultProject:IProject ={
  _id: '',
  name: '',
  createdAt: '',
  updatedAt: '',
  tasks: []
}
