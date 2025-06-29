import { IBook } from "./IBook";

export interface IPaginateBook {
  per_page: number;
  total: number;
  current_page: number;
  data: IBook[];
}
