export interface IProject {
  id: number;
  title: string;
  description?: string;
  targetamount?:number;
  deadline:Data;
  createdAt: Date;
  updatedAt: Date;
}
