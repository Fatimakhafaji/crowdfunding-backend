export interface Project {
  id: number;
  title: string;
  description: string | null;
  targetAmount: number;
  deadline: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
