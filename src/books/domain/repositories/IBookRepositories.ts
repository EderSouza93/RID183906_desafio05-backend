import { IBook } from "../models/IBook";
import { ICreateBook } from "../models/ICreateBook";
import { IPaginateBook } from "../models/IPaginateBook";

type SearchParams = {
  page: number;
  skip: number;
  take: number;
}

export interface IBooksRepository {
  findAll({ page, skip, take }: SearchParams): Promise<IPaginateBook>;
  findByTitle(title: string): Promise<IBook | null>;
  findById(id: number): Promise<IBook | null>;
  create(data: ICreateBook): Promise<IBook>;
  save(book: IBook): Promise<void>
}
