import { IPaginateBook } from "@books/domain/models/IPaginateBook";
import { IBooksRepository } from "@books/domain/repositories/IBookRepositories";
import { SearchParams } from "@books/infra/database/repositories/BookRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListBookService {
  constructor(
    @inject('BooksRepository')
    private booksRepository: IBooksRepository,
  ) { }
  public async execute({
    page,
    skip,
    take,
  }: SearchParams): Promise<IPaginateBook> {
    const books = this.booksRepository.findAll({ page, skip, take });
    return books
  }
}

export default ListBookService;
