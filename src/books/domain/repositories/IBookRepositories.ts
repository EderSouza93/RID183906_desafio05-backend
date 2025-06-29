import { IBook } from "../models/IBook";
import { ICreateBook } from "../models/ICreateBook";
import { IFindBooks } from "../models/IFindBooks";
import { IPaginateBook } from "../models/IPaginateBook";

type SearchParams = {
  page: number;
  skip: number;
  take: number;
}

export interface IBooksRepository {
  findAll({ page, skip, take }: SearchParams): Promise<IPaginateBook>;
  findByIsbn(codeIsbn: string): Promise<IBook | null>;
  findByTitle(title: string): Promise<IBook | null >;
  findById(id: number): Promise<IBook | null>;
  create(data: ICreateBook): Promise<IBook>;
  save(book: IBook): Promise<void>
  remove(book: IBook): Promise<void>;
}
