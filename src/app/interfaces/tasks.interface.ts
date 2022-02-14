export interface ITask{
  _id:string;
  name:string;
  progress:number;
  done:boolean;
  createdAt:string;
  updatedAt:string
}

export const defaultTask:ITask = {
  _id: '',
  name: '',
  progress: 0,
  done: false,
  createdAt: "",
  updatedAt: ""
}
