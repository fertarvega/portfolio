export interface IProjectSection {
  id: number;
  title: string;
  description: string;
  technologies?: string[];
  liveLink?: string;
  repoLink?: string;
  imageUrl?: string;
}

export interface IProjectDetails {
  project: IProjectSection;
  color?: string;
}
