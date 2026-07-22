import type { IMovie } from "../../../Shared/Types";


export interface IShowState {
  show: IMovie[];
  total_pages: number;
}